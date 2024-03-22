# Study Guide

> Full guide: https://github.com/karanpratapsingh/system-design

## Networks

- Load Balancing
- CDN

## Caching

### caching strategies:

- Cache Aside
- Read Through
- Write Through
- Write Behind

### Eviction Policies

- LRU
  Least Recently Used (LRU), we discard the least recently used key first.
- LFU

### Redis

> Redis is the most popular solution on the market for distributed cache at the moment.

- Data types,
- TTL on keys,
- how Redis persists the data

## Queues

- queues facilitate asynchronous messaging
- decoupling of components resulting in faster order processing
- Explore the benefits of buffering requests and storing messages for recovery
- acknowled the complexities of asynchronous communication

### Messaging

- publisher/subscriber (pub/sub).
- message queues
  - Learn how message queues ensure messages are delivered to a single recipient, while pub/sub queues allow notifications to be sent to multiple services

### RabbitMQ

- Routing keys
- Types of exchanges
- Channels
- Acknowledgements

### Kafka

- Topics
- Events
- Partitions
- Consumer groups
- Consumer offsets

## Protocols

- TCP
  - This protocol has three main benefits. It's Reliable, Ordered and Error-checked.
- UDP
- HTTP
  - Methods
  - Status Codes
- REST/RESTfulness
- WebSockets
- Long Polling
  - Differences between Web Sockets and Long Polling
- gRPC
  - based on Protobufs and is a popular way to communicate between microservices
- GraphQL

## Concurrency

- Concurrency vs Parallelism
- Processes
- Threads
- Thread Pools

## Databases

- Indexes
- Sharding
- Consistent Hashing
- Partitioning
- CAP Theorem
- ACID transactions

## Architectural Patterns

- Web Sessions
- Serialization
  - Request Serialization is an important technique to resolve data races in your system
- CORS

## Practice Designs (with steps)

#### Taxi Hailing App (Uber)

- Start with an intro / questions
- Driver Locations
- Storing Locations
- Taxis Around You
- Matching
- finish with a summary

#### Chat app (WhatsApp)

- Start with an intro / questions
- Basic Design - Chat
- Scaling Reads
- Sharding Chat Messages
- Scaling chat using queues
- finish with a summary

#### Web Crawler (Google Crawler)

- Start with an intro / questions
- Basic Design - Web Crawler
- Fetching Content
- What is a 'new' URL?
- Uniqueness
- Priorities
- Summary

#### Auction app (eBay)

- Start with an intro / questions
- Basic Design - Design an Auction
- Optimistic Locking of Bids
- Serialisation of Bids
- Event-Driven Approach for Bids
- Scaling an Auction
- Summary

#### URL Shortner (TinyURL)

- Start with an intro / questions
- Basic Design - URL Shortner
- Short Identifiers
- Scaling Reads
- Should DynamoDB be used??
- Caching
- Summary

#### Coupon System (Groupon)

- Start with an intro / questions
- Basic Design - Coupon System
- Concurrency
- Scalability
- Bonus: Scaling using Queues??
- Summary

#### News Feed (Twitter)

- Start with an intro / questions
- Basic Design - News Feed
- Storage Calculations - News Feed
- Scaling reads
- Long Term Storage and Short Term Storage
- Feed Optimisation
- VIPs
- Summary

#### Ticketing System

- Start with an intro / questions
- Basic Design - Ticketing System
- Checking Tickets Count (talk about difficulties of figuring out how many tickets are still left in the system)
- Handling Payments
- Scaling ticketing system
- Conflict resolution
- Summary

#### Cloud Storage (Google Drive, Dropbox)

- Start with an intro / questions
- Basic Design - Cloud Storage
- Scaling storage
- Control Service
- Scaling file metadata
- Cient-size Optimizations
- Synchronization
- Summary
