const Node = require('./graphNode.js').Node;

function Graph(){
    this.nodeSet = new Array();
    this.startNode = null;
    this.transitions = new Set();
    this.graphName = null;
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

Graph.prototype.getTransitionsArray = function(){
    return Array.from(this.transitions);
}

Graph.prototype.setGraphName = function(name){
    this.graphName = name;
}

Graph.prototype.cloneGraph = function(){

    let object = new Graph();

    object= JSON.parse(JSON.stringify(this));
    return object;
}

/**
 * This function returns dot file sintax
 */
Graph.prototype.toDotFile = function(){

    let ret = "digraph " + this.graphName + " {\n";

    ret += this.startNode.toDotFile();

    ret += "}";

    return ret;
}
    
exports.Graph = Graph;