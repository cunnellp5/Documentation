# Chat app

## 1. Requirements (understand the problem at hand)

### Example questions and answers

1. Should the chat app be 1 on 1 or group?

   - both

2. Is this a mobile app or a web app?

   - both

3. Whats the scale? As in is this a new start up or will it be a massive known scale?

   - 50 million DAU

4. For group chats, is there a limit of users?

   - 100 max

5. What are some important features in the chat app? Does it support attachments?

   - 1 on 1, group, online indicator, system only handles text messages

6. Is there a message size limit?

   - texts sholud be less than 100,000 characters long

7. Is there end to end encryption?

   - Not required, but can be discussed if there is time

8. How long should chat history be stored?

   - Forever!

- Focuses / summary:

  ```
  A one-on-one chat with low delivery latency

  Small group chat (max of 100 people)

  Online presence

  Multiple device support. The same account can be logged in to multiple accounts at the same time.

  Push notifications
  ```

## 2. Estimation - high-level design and get buy-in

- On a high level we can diagram a user sending a message to a chat service, then the chat service running logic to figure out who the message needs to go to, if they're online, and if they should send it.

  ```
  Client --> Chat Server --> Receiver
  ```

- When the client initiates a message, we can use a basic HTTP protocol. This has fewer TCP handshakes. And is an acceptable way to initiate the connection.

- On the other hand, the receiver is getting a server side initiated message. HTTP is typically client side initiated. Some options we have are `polling, long polling, and WebSocket`

  - **Polling**: A technique where the client asks the server for information periodically. Depending on the frequency, this could be a waste of time because there can be lots of instances where the response will never change. In our case the client would ask the servier if there is a new message.

  - **Long Polling**: This technique came about because 'vanilla' polling above can be inefficient. In this design, the server instead holds onto the 'question' or the initial poll, then instead of immediately responding with a yes/no, the server either waits for a message to send, or the timeout threshold to expire.

    - Problems:

      1. sender and receiver may not be connected to the same chat server. HTTP servers are stateless, therefore they may be sitting behind a load balancer using some sort of 'round robin' algorithm to spread the load, and the server that receives the message may not have long-polling connection with the client who receives the message

      2. server cant really tell if a client disconnected

      3. the inefficiencies from polling are bascally observed here, in that after a timeout, we're observing the same polling behaviour of wasting connections for no response

  - **WebSocket**: First an HTTP handshake initiates the socket, after acknowledgement, then bidirectional/persistent messaging between server and client is enabled

## 3. High level design

- in a pic

## 4. Storage schema

1. The stateless servers can handle a relational DB (profile, settings, any of the basic HTTP requests)

- these can be scaled with **sharding** or **replication**

2. The chats them selves should be stored with `Key-Value stores` because looking up history of items in these is easy (like using a known index of an array to find something, rather than searching every record)

   - examples of keyvalue stores are 'Cassandra' or 'Hbase'

## 5. API Design

3. data models:

- **essage_id** will hold the key to ensuring the order of messages, this can be accomplished with 2 constraints:

  1. ids must be unique
  2. ids should be sortable by time, meaning new rows have higher ids than old ones.

  - how can we achieve these guarantees in a noSQL set up?
    - we could 'auto increment' ids but thats only given to us in MySql, but we're doing key-value stores
    - another approach is to store 64-bit sequence number generator like 'Snowflake' (Design a unique ID generator in a distributed system)
    - The final approach could be to create locally unique ids since 1on1 and group chats could be easy to generate unique ids rather than architecting a global distributed id generator system

- message table for 1 on 1 chats:

  | Message      |           |
  | ------------ | --------- |
  | message_id   | bigint PK |
  | message_from | biging    |
  | message_to   | bigint    |
  | content      | text      |
  | created_at   | timestamp |

- message table for group chats:

  1. **channel_id** && **message_id** are 'composit primary keys'
  2. **channel_id** is the partition key

  | group_message |           |
  | ------------- | --------- |
  | channel_id    | bigint PK |
  | message_id    | bigint PK |
  | user_id       | bigint    |
  | content       | text      |
  | created_at    | timestamp |

## 6. Detailed design

#### Choosing 3 interesting features:

#### 1. service discovery (just connects to the fastest server)

    - Primary role is to suggest best chat server based on geographic location or server capacity

- steps for discovery:

  1. User A tries to log in to the app.
  2. The load balancer sends the login request to API servers.
  3. After the backend authenticates the user, service discovery finds the best chat server for User A. In this example, server 2 is chosen and the server info is returned back to User A.
  4. User A connects to chat server 2 through WebSocket.

#### 2. messaging flows (1 on 1 || group)

    * 1 on 1:
        1. 'User A' sends a message to 'Chat server 1'
        2. 'Chat server 1' uses the id generator to create a unique ID
        3. 'Chat server 1' then forwards the message to the message queue
        4. Message is then stored in the 'key value store'

            5a. If 'User B' is online, 'Chat server 2' picks up message from queue has a connection with "user B" via web sockets
            5b. if 'User B' offline, a push message is sent from the notification service

    * Message synchronization between multiple devices for one user:
        * for small group chats each receipient can have their own message queue similarly to an inbox of emails
        * for large group chats a receipient can have one message queue from all the chat senders, similarly to slack channels

#### 3. online/offline indicators

- A user signs in, makes a connection and interfaces with the 'Presence servers' that update the key value stores with an 'online=true' update
  - A connection may go on or off multiple times during a single connection or chat, therefore the idea of observing a users connection might lead to a bad UX
- If the user is online, we can implemnt a heart beat mechanism. While online, the client can send a heart beat to the presence servers ever 5 s to keep itself online, else after 30s if no heartbeat, the user is set to offline
  - This strategy helps with users who might disconnect and re connect really quickly
