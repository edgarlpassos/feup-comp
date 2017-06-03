const Node = require('./graphNode.js').Node;

function Graph(){
    this.nodeSet = new Array();
    this.startNode = null;
    this.transitions = new Set();
}

Graph.prototype = Object.create(Object.prototype);
Graph.prototype.constructor = Graph;

Graph.prototype.getNodeSet = function(){
    return this.nodeSet;
}

Graph.prototype.getStartNode = function(){
    return this.startNode;
}

Graph.prototype.setStartNode = function(node){
    this.startNode = node;
}

Graph.prototype.addNode = function(node){
    this.nodeSet.push(node);
}

Graph.prototype.addTransitions = function(value){
    if(!this.transitions.has(value))
         this.transitions.add(value);
}

Graph.prototype.getTransitions = function(value){
    return this.transitions;
}

Graph.prototype.getTransitionsArray = function(value){
    return Array.from(this.transitions);
}

Graph.prototype.cloneGraph = function(){

    let object = new Graph();

    object= JSON.parse(JSON.stringify(this));
    return object;
}

Graph.prototype.toDotFile = function(){

    return startNode.toDotFile();
}
    
exports.Graph = Graph;