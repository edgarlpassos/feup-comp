const Graph = require('./graph.js').Graph;
const Node = require("../graph/graphNode.js").Node;
const Edge = require("../graph/graphEdge.js").Edge;

/**
 * Complement Graph
 * @param {*} graph 
 */
function Complement(graph) {
    this.graph = graph;
    this.dead = new Node("dead", false);
    this.addDeadStates();
    this.changeStates();
    this.addTransitionsToDeadState();
    console.log(graph);
}

Complement.prototype = Object.create(Object.prototype);
Complement.prototype.constructor = Complement;

Complement.prototype.addTransitionsToDeadState = function () {
    var transitionsArray = this.graph.getTransitionsArray();
    for (var i = 0; i < transitionsArray.length; i++) {
        //Adds transictions to dead state
        let deadEdge = new Edge(this.dead, transitionsArray[i]);
        this.dead.addEdge(deadEdge);
    }
}

/**
 * Add dead state to complete DFA. Change states
 */

Complement.prototype.addDeadStates = function () {
    var transitionsArray = this.graph.getTransitionsArray();

    for (var i = 0; i < this.graph.getNodeSet().length; i++) {
        var node = this.graph.getNodeSet()[i];
        this.deadStates(transitionsArray, node, node.getEdgeSet());
        console.log("Passing throw over all nodes...");
    }

    this.graph.addNode(this.dead);
}

Complement.prototype.deadStates = function (transitionsArray, node, edges) {

    for (var i = 0; i < transitionsArray.length; i++) {
        for (var j = 0; j < edges.length; j++) {

            if (edges[j].transition == transitionsArray[i]) {
                break;
            }
            if (j === (edges.length - 1)) {
                console.log("Adding transition to dead state with label " + transitionsArray[i]);
                let edge = new Edge(this.dead, transitionsArray[i]);
                node.addEdge(edge);
            }
        }
        if (edges.length == 0) {
            console.log("Adding transition to dead state with label " + transitionsArray[i]);
            let edge = new Edge(this.dead, transitionsArray[i]);
            node.addEdge(edge);
        }
    }
}

Complement.prototype.changeStates = function () {
    for (var i = 0; i < this.graph.getNodeSet().length; i++)
        this.graph.getNodeSet()[i].changeNodeType();
}

Complement.prototype.getResult = function () {
    return this.graph;
}

exports.Complement = Complement;