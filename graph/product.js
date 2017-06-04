const Graph = require('./graph.js').Graph;
const Node = require("../graph/graphNode.js").Node;
const Edge = require("../graph/graphEdge.js").Edge;

const INTERSECTION = 1;
const UNION = 2;

/**
 * Product Graph
 * @param {*} graph 
 */
function Product(graph1, graph2, operation) {
    this.graph1 = graph1;
    this.graph2 = graph2;
    let graph = new Graph();
    this.resultGraph = graph;
    this.resultGraphTransitions = [];
    this.operation = operation;
    this.chooseNodes();
    this.setTransitions();
    this.addTransitions();
    console.log(this.resultGraph.toDotFile());
}

Product.prototype = Object.create(Object.prototype);
Product.prototype.constructor = Product;

/**
 * Adds nodes to result graph { Nodes Graph1 } x { Nodes Graph2 }
 */
Product.prototype.chooseNodes = function () {
    for (var i = 0; i < this.graph1.nodeSet.length; i++) {
        let node1 = this.graph1.nodeSet[i];
        let name = node1.val;

        for (var j = 0; j < this.graph2.nodeSet.length; j++) {
            let node2 = this.graph2.nodeSet[j];
            let newVal = [name, node2.val];

            let newNode;

            switch (this.operation) {
                case INTERSECTION:
                    if (node1.acceptanceNode && node2.acceptanceNode)
                        newNode = new Node(newVal, true);
                    else newNode = new Node(newVal, false);
                    break;
                case UNION:
                    if (node1.acceptanceNode || node2.acceptanceNode)
                        newNode = new Node(newVal, true);
                    else newNode = new Node(newVal, false);
                    break;
                case DIFF:
                    if (node1.acceptanceNode && !node2.acceptanceNode)
                        newNode = new Node(newVal, true);
                    else newNode = new Node(newVal, false);
                    break;
                default:
                    newNode = new Node(newVal, false);
                    break;
            }

            this.resultGraph.addNode(newNode);

            if (node1.nodeEquals(node1, this.graph1.startNode) && node2.nodeEquals(node2, this.graph2.startNode))
                this.resultGraph.startNode = newNode;
        }
    }
}

/**
 * Adds Transitions to new nodes
 */
Product.prototype.addTransitions = function () {

    for (var i = 0; i < this.resultGraph.nodeSet.length; i++) {
        let node = this.resultGraph.nodeSet[i];
        let nameNode1 = node.val[0];
        console.log("Node 1: " + nameNode1);
        let nameNode2 = node.val[1];
        console.log("Node 2: " + nameNode2);

        console.log(this.resultGraphTransitions);

        for (var j = 0; j < this.resultGraphTransitions.length; j++) {

            let transitionVal = this.resultGraphTransitions[j];
            //graph containing that node
            let graph = this.graphResponsibleForNode(nameNode1);
            //graph containing that node
            let graph2 = this.graphResponsibleForNode(nameNode2);
            let destinationNode1Name, destinationNode2Name;

            /**
             * Finds destination node name of node1 with transition "transitionVal"
             */
            for (var k = 0; k < graph.nodeSet.length; k++) {
                if (graph.nodeSet[k].val == nameNode1) {
                    for (var l = 0; l < graph.nodeSet[k].edgeSet.length; l++) {
                        if (graph.nodeSet[k].edgeSet[l].transition == transitionVal)
                            destinationNode1Name = graph.nodeSet[k].edgeSet[l].nodeTo.val;
                    }
                }
            }

            /**
             * Finds destination node name of node2 with transition "transitionVal"
             */
            for (var l = 0; l < graph2.nodeSet.length; l++) {
                if (graph2.nodeSet[l].val == nameNode2) {
                    for (var m = 0; m < graph2.nodeSet[l].edgeSet.length; m++) {
                        if (graph2.nodeSet[l].edgeSet[m].transition == transitionVal)
                            destinationNode2Name = graph2.nodeSet[l].edgeSet[m].nodeTo.val;
                    }
                }
            }

            /**
             * Finds destination node of node1+node2 with transition "transitionVal"
             */
            let destination = [destinationNode1Name, destinationNode2Name];
            let destinationNode = this.getNode(destination);

            /**
             * Adds edge to node1+node2 
             */
            let edge = new Edge(destinationNode, transitionVal);
            node.addEdge(edge);
        }
    }
}

Product.prototype.getNode = function (destination) {

    for (var i = 0; i < this.resultGraph.nodeSet.length; i++) {
        if (this.resultGraph.nodeSet[i].val.toString() === destination.toString()) {
            return this.resultGraph.nodeSet[i];
        }
    }
}

Product.prototype.setTransitions = function () {

    let setTransitions = this.graph1.getTransitionsSet();

    for (var i = 0; i < this.graph2.nodeSet.length; i++) {
        for (var j = 0; j < this.graph2.nodeSet[i].edgeSet.length; j++) {
            let value = this.graph2.nodeSet[i].edgeSet[j].transition;
            if (!setTransitions.has(value))
                setTransitions.add(value);
        }
    }

    this.resultGraphTransitions = Array.from(setTransitions);
}

Product.prototype.graphResponsibleForNode = function (value) {
    let array = new Array();

    for (var i = 0; i < this.graph1.nodeSet.length; i++) {
        let name = this.graph1.nodeSet[i].val;
        if (name == value)
            return this.graph1;
    }

    for (var i = 0; i < this.graph2.nodeSet.length; i++) {
        let name = this.graph2.nodeSet[i].val;
        if (name == value)
            return this.graph2;
    }

}

Product.prototype.getResultGraph = function () {
    return this.resultGraph;
}

exports.Product = Product;