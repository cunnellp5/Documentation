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

  #### Questions

  - How are REST apis stateless?
    - stateful: Remembers specific client info like preferences/user actions
    - stateless: if searching for something and the browser refreshes the search bar is forgotten
  - Explain the HTTP methods
    - RESTful uses http methods in client requests [GET, POST, PUT, DETELE]
    - GET: fetches a resource from the server
    - POST: Requests a for a resource to be created on the server
    - PUT: Requests for a resource to be updates
    - DELETE: Requests for a resource to be deleted
  - Explain the HTTP status codes
    - RESTful web services uses HTTP-status codes in service responses
      Most common codes:
    - 2xx are success request/response
    - 4xx are client side errors
    - 5xx are server side errors
  - What is a URI

    - Uniform resource identifier: identifies every resource in the REST architecture
    - 2 types
      - URN: identifies a resource through a unique name
      - URL: typical web address
    - URLS are typically used when designing apis

  - Best practices for making the URI for RESTful webservice
    - Should be mostly standardized when developing a service
      1. develop them such that forward slashes indicate heirarchy
      2. use plural nouns for branches
      3. use hyphens for multiple words
      4. use lowercase
      5. refrane from using file extensions
  - Difference between REST and SOAP

    - While rest is an architecture for devleoping web services, SOAP exchages structured information by way of apis
    - SOAP standards are more strict
    - REST allows for data transfer in JSON, xml and others, SOAP just uses xml
    - SOAP is more strict than REST, and used when data needs to be more regulated

  - Difference between REST and Ajax:

    -

  - Tools used to develop and test rest apis

    - Depends on the language used
    - Node.js uses something like an Express framework
    - Something like Postman can test

  - Real world examples of REST apis

    -

  - Pros

    - Easy to learn
    - Wide range of data trnasfer
    - Statelessness
    - Scalability

  - Cons
    - Sessions not maintained from statelessness
    - Lack of built-in security
    - Need to be versioned for backward compatibility
    - Consistency in URIs being difficult to maintain for complex projects

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
