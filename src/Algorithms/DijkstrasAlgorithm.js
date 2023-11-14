/*The code in this file represents Dijsktra's Algorithm, which will find the
shortest path between the source node and all other nodes in the graph. The 
algorithm will constantly update the distances to neighboring nodes by
prioritizing nodes with the smallest distances and iteratively exploring 
the graph until the shortest paths to each node is determined.*/

export function DijsktrasAlgorithm (graph, sourceNode, endNode) {
    const visitedNodesInOrder = []; 
    sourceNode.distance = 0; //Initializing distance property of the starting node to 0
    const unvisitedNodes = [];

    while (!!unvisitedNodes.length) { //!! used for 

    }
}    