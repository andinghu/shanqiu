/**
Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.

OJ's undirected graph serialization:
Nodes are labeled uniquely.

We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
As an example, consider the serialized graph {0,1,2#1,2#2,2}.

The graph has a total of three nodes, and therefore contains three parts as separated by #.

First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
Second node is labeled as 1. Connect node 1 to node 2.
Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
Visually, the graph looks like the following:

       1
      / \
     /   \
    0 --- 2
         / \
         \_/
*/

/**
 * Definition for undirected graph.
 */
class UndirectedGraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = [];
  }
}

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
 const cloneGraph = (graph) => {
     let visited = new Map();
     return clone(graph, visited);
 };

 const clone = (graph, visited) => {
     if (graph === null) {
         return graph;
     }
     if (visited.has(graph.label)) {
         return visited.get(graph.label);
     }
     let cloneNode = new UndirectedGraphNode(graph.label);
     visited.set(graph.label, cloneNode);
     for (let neighbor of graph.neighbors) {
         cloneNode.neighbors.push(clone(neighbor, visited));
     }
     return cloneNode;
 };

 const one = new UndirectedGraphNode(1);
 const two = new UndirectedGraphNode(2);
 const zero = new UndirectedGraphNode(0);
 one.neighbors.push(two);
 one.neighbors.push(zero);
 zero.neighbors.push(two);
 zero.neighbors.push(one);
 two.neighbors.push(two);
 console.log(cloneGraph(zero));
