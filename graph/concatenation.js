const Graph = require('./graph.js').Graph;
const Node = require("../graph/graphNode.js").Node;
const Edge = require("../graph/graphEdge.js").Edge;

/**
 * Complement Graph
 * @param {*} graph 
 */
function Concatenation(graph1, graph2) {
    this.graph1 = graph1;
    this.graph2 = graph2;
    this.resultGraph;
    this.concatenateGraphs();
}

Concatenation.prototype = Object.create(Object.prototype);
Concatenation.prototype.constructor = Concatenation;

Concatenation.prototype.concatenateGraphs = function () {
    this.resultGraph = this.graph1;

    // Each final node on graph1 connects to start node of graph 2

    // Getting initial state of graph 2
    let node = this.graph2.getStartNode();

    let newEdge = new Edge(node, "Ɛ");

    // If it is a final node of graph 1, it is connect to start node of graph 2
    for (let node of this.resultGraph.getNodeSet()) {
        if (node.isAcceptanceNode()) {
            node.addEdge(newEdge);
        }
    }

    // Adding graph 2 node to the result graph
    for (let node of this.graph2.getNodeSet()) {
        this.resultGraph.addNode(node);
    }
}

Concatenation.prototype.getResultGraph = function () {
    return this.resultGraph;
}

exports.Concatenation = Concatenation;