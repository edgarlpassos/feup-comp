const Edge = require('./graphEdge.js').Edge;

function GraphNode(){
    this.edgeSet = {};
}

GraphNode.prototype = Object.create(Object.prototype);
GraphNode.prototype.constructor = GraphNode;

GraphNode.getEdgeSet = function(){
    return this.edgeSet;
}

exports.Node = Node;