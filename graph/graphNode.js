const Edge = require('./graphEdge.js').Edge;

function GraphNode(val){
    this.edgeSet = {};
    this.val = val;
}

GraphNode.prototype = Object.create(Object.prototype);
GraphNode.prototype.constructor = GraphNode;

GraphNode.prototype.getEdgeSet = function(){
    return this.edgeSet;
}

exports.Node = Node;