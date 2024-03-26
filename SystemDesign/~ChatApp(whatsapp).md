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
