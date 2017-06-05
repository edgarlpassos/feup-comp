const Node = require('./graphNode.js').Node;

function Graph(name) {
    this.nodeSet = [];
    this.startNode = null;
    this.graphName = name;
}

Graph.prototype = Object.create(Object.prototype);
Graph.prototype.constructor = Graph;

Graph.prototype.getNodeSet = function () {
    return this.nodeSet;
}

Graph.prototype.getStartNode = function () {
    return this.startNode;
}

Graph.prototype.setStartNode = function (node) {
    if (this.startNode != null)
        throw "A starting node was already set";
    this.startNode = node;
}

Graph.prototype.addNode = function (node) {
    this.nodeSet.push(node);
}

Graph.prototype.setGraphName = function (name) {
    this.graphName = name;
}

Graph.prototype.cloneGraph = function () {

    let object = new Graph();
    object = JSON.parse(JSON.stringify(this));
    return object;
}

/**
 * This function returns dot file sintax
 */
Graph.prototype.toDotFile = function () {

    let ret = "digraph " + this.graphName + " {\n";
    ret += this.startNode.toDotFile();
    ret += this.finalNodes();
    ret += "}";

    this.resetVisited();

    return ret;
}

/**
 * Gets final nodes of the graph and returns dot file final node sintax
 */
Graph.prototype.finalNodes = function () {
    let ret = "";

    for (let node of this.nodeSet) {
        if (node.isAcceptanceNode())
            ret += node.getVal() + '[shape="doublecircle"];\n';
    }

    return ret;
}

/**
 * Puts visited field of nodes false after a 
 * depth search
 */
Graph.prototype.resetVisited = function () {

    for (let node of this.nodeSet) {
        node.setVisited(false);
    }
}

Graph.prototype.getTransitionsArray = function () {
    let transitions = new Set();

    for (var i = 0; i < this.nodeSet.length; i++) {
        for (var j = 0; j < this.nodeSet[i].edgeSet.length; j++) {
            let value = this.nodeSet[i].edgeSet[j].transition;
            if (!transitions.has(value))
                transitions.add(value);
        }
    }

    return Array.from(transitions);
}

Graph.prototype.getTransitionsSet = function () {
    let transitions = new Set();

    for (var i = 0; i < this.nodeSet.length; i++) {
        for (var j = 0; j < this.nodeSet[i].edgeSet.length; j++) {
            let value = this.nodeSet[i].edgeSet[j].transition;
            if (!transitions.has(value))
                transitions.add(value);
        }
    }

    return transitions;
}

Graph.prototype.getNode = function (value) {
    for (let i = 0; i < this.nodeSet.length; i++) {
        let node = this.nodeSet[i];
        if (value === node.getVal())
            return node;
    }

    return null;
}


Graph.prototype.toString = function () {
    console.log('Nodes: ');
    console.log(this.nodeSet.toString());
    // TODO end this
}

/**
 * Verifies if a given input belongs to the automaton language
 */
Graph.prototype.belongsToLanguage = function (input) {
    if (this.verifyInput(this.startNode, input)) {
        console.log('Pertence à linguagem!');
        return true;
    }

    console.log('Não pertence à linguagem!');
    return false;
}

/**
 * Recursive function to verify input
 */
Graph.prototype.verifyInput = function (node, input) {

    for (let edge of node.getEdgeSet()) {
        if (edge.getTransition() === input[0]) {
            if (input.length === 1 && node.isAcceptanceNode())
                return true;
            if (input.length === 1 && !node.isAcceptanceNode())
                return false;
            else if (this.verifyInput(edge.getNodeTo(), input.substring(1)))
                return true;
        }
    }

    return false;
}

Graph.prototype.isValid = function () {
    if (this.startNode == null)
        return false;

    return true;
}

exports.Graph = Graph;