# Approach

> R.E.S.H.A.D.E.D.

- Requirements
- Estimation
- Storage schema
- High-level design
- Api design
- Detailed design
- Evaluation
- Distinctive Component/feature

example uber

## Requirements

1. functional requirements
   - passengers request rides
   - drivers get matched to riders in real time
   - trip is monitored in real time
2. nonfunctional requirements
   - available
   - scalable
   - consistent

## Estimation

1. ask clarifying questions
   - how many rides happen per day? per min
   - how mnay drivers will be conneected to the system
   - how many payments will be processed

## Storage schema

- payments must meet strict consistency requirements
- availability is important to the platforms requirements

## High-level design

    * this is the design phase where we might draw a diagram
         * this is where we show the different types of services and perhaps how a client interacts with the function requirements

## API Design

    * this is basics of showing routes or maybe a table/schema of DB

## Detailed design

    * describe the high level in more detail
    * consider how real world open source services can be configured
    * trade-offs
    * traffic spikes

## Evaluation

    important!
        * consider 2-3 solutions for the given problem
        * narrate the tradeoffs of each solution
        * justifty your chosen tradeoff

    common tradeoffs
        * storage
        * security
        * cost
        * reliability
        * consistency
        * availability

## Distincitve Feature

    * these distintions are unique per application
    * for uber, is the match making process with the driver/passenger
