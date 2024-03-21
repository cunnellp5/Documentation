# Api architecture styles

> Applicaiton programming interfaces; Allows for integration and data exchange betwixt different systems.

## SOAP

- XML based
- Typically found in financial services
- Security is key
- For enterprise application

## RESTful API

- Built on top of HTTP methods
- youtube or twitter are examples that use RESTful APIs

## GraphQL

- Not just an architecture style
- A query language allowing users to request specific data needed
- FB developed this, used by Github or shopify

## gRPC

- high performance
- uses protocol buffers by default
- used by microservices
- netflix uses this
- not good for browser users

## WebSocket

- Bi-Directional
- Realtime and persistent connections

## Webhook

- Asynchronous
- Event driven
- Not good for immediate response / synchronous connections
