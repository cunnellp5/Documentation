# CAP

> is Consistency Availibility Partition Tolerance

Our services 'can only pick two', and we need to balance betwixt the three

## Consistency

Means that data is the same across the cluster, so you can read or write from/to any node and get the same data.

## Availability

Means the ability to access the cluster even if a node in the cluster goes down

## Partition Tolerance

Cluster continues to function even if there is a communication break between two nodes

### Examples

1. **Availability** vs **Consistency**

   - Consider two nodes nodeA and nodeB;
   - A break in communication occurs. nodeA and nodeB cannot sync updates
     - At this point
       1. we can choose to allow the nodes to be out of sync (give up **consistency**)
       2. consider the system to be 'down' (give up **availability**)

2. Having **Consistency** and **Partition Tolerance**

   - Data is consistentent between all nodes but in order to prevent being out of sync we must deal with the system going down

3. Having **Availability** and **Partition Tolerance**

   - Nodes remain online and even if they cannot communicate and will re sync data communications are resolved, but this wont guarantee the same data across nodes
