# Uber

> A car ride provider, allowing users to book rides and a driver to transport them in a way similar to a taxi. It is available on the web and mobile platforms such as Android and iOS.

[Resource im paraphrasing/studying](https://dev.to/karanpratapsingh/system-design-uber-56b1)

---

#### Taxi Hailing App (Uber)

- Start with an intro / questions
- Driver Locations
- Storing Locations
- Taxis Around You
- Matching
- finish with a summary

---

## Functional Requirements (users: [Customers, Drivers])

### Customers

- Customers should be able to see all cars within a certain range with an ETA and pricing information
- Customers should be able to book a cab to adestination
- Customers should be able to see the location of the driver.

### Drivers

- Drivers should be able to accept or deny a ride request
- Once accepted, driver should see the pickup location
- Drivers should be able to mark the trip as complete on reaching the destination

## Non Functional requirements

- High reliability
- High availability with minimal latency
- System should scale and be efficient

## Bonus requirements

- Customers can rate the trip after its completed
- Payment processing
- Metrics and analytics

---

## 1. Esitimation and Constraints
