const Node = require('./graphNode.js').Node;

function Graph(){
    this.nodeSet = {};
    this.startNode = null;
    this.endNode = null;
}

Graph.prototype = Object.create(Object.prototype);
Graph.prototype.constructor = Graph;

Graph.getNodeSet = function(){
    return this.nodeSet;
}

Graph.getStartNode = function(){
    return this.startNode;
}

Graph.getEndNode = function(){
    return this.endNode;
}

exports.Graph = Graph;