const Edge = require('./graphEdge.js').Edge;

function Node(val,acceptanceNode){
    this.edgeSet = new Array();
    this.val = val;
    this.acceptanceNode = acceptanceNode;
    
}
Node.prototype = Object.create(Object.prototype);
Node.prototype.constructor = Node;

Node.prototype.getEdgeSet = function(){
    return this.edgeSet;
}

Node.prototype.addEdge = function(transition, node){
    var newEdge = new Edge(node,transition);
    this.edgeSet.push(newEdge);
}

Node.prototype.getVal = function(){
    return this.val;
}

Node.prototype.isAcceptanceNode = function(){
    return this.acceptanceNode;
}

Node.prototype.changeNodeType = function(){
    this.acceptanceNode = !this.acceptanceNode;
}

exports.Node = Node;