const Edge = require('./graphEdge.js').Edge;

function Node(val){
    this.edgeSet = {};
    this.val = val;
}

Node.prototype = Object.create(Object.prototype);
Node.prototype.constructor = Node;

Node.prototype.getEdgeSet = function(){
    return this.edgeSet;
}

exports.Node = Node;