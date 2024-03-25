# ACID

> Atomicity Consistency Isolation Durability

## Atomicity

- Takes an 'all or nothing' approach to making a transaction to something like a Database

  1. If someone makes a payment and there is a power outage, then the atomicity of the entire trasaction should allow it to fail, not allowing any payment to go through until the user resubmits payment and observes a successul resolution

  2. Think about transferring money between users. If one person had the money widthdrawn and the receipient didnt have the same money deposited at the time of some transactional failure, then the entire process is rolled back such that the money sender has the original money they tried sending

## Consistency

- Follows constraints, typically dictated by Database rules (primaryKeys, foreignKeys, etc..)
  1. One example would be if a user tries to withdrawl more money than they have resulting in a negative number. The transaction should fail based on that constraint

## Isolation

- Ensures any given transaction is run in an isolated environment. Allows for simultaneous transactions, since they wont run into each other.
  1. An account has $200 and the user submits two widthdrawl requests of $100 at the exact same time. The account results in $0 since both instances are guaranteed to complete

## Durability

- After a transaction occurs, guarantees the data is persisted to some Database
  1. If a powerfailure happens right after a successful bank transaction occurs, we can expect the database holds the correct amount when power is restored
