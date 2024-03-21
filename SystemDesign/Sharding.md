# Sharding

> A method of partitioning a dataset into subsets of the whole, each subset is called a 'shard'

## Techniques

### geo-based sharding

- Partitions data based on the users location.
- Something like East or West coast
- Allows data to be closest to its user

  **BottleNeck**: - The users themselves may not be evenly distributed

### range-based sharding

- Divides data based on ranges of the key value. For example can shard users by the first letter of their firstname, creating 26 sharded tables (a-z)

  **BottleNeck**: - There maybe more people with a first name beginning with the letter a than z

### hash-based sharding

- Uses an algorithm to create a has from the key value, then computes a partition with the hash
- This creates even distributions

  **BottleNeck** - This can split related rows into different partitions which affects performance
