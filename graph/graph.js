const Node = require('./graphNode.js').Node;

function Graph(){
    this.nodeSet = new Array();
    this.startNode = null;
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

Graph.prototype.getTransitionsArray = function(){
    let transitions = new Set();

    for(var i=0; i < this.nodeSet.length;  i++){
        for( var j=0; j < this.nodeSet[i].edgeSet.length; j++){
            let value = this.nodeSet[i].edgeSet[i].transition;
             if(!transitions.has(value))
                transitions.add(value);
        }
    }

    return Array.from(transitions);
}

Graph.prototype.getTransitionsSet = function(){
    let transitions = new Set();

    for(var i=0; i < this.nodeSet.length;  i++){
        for( var j=0; j < this.nodeSet[i].edgeSet.length; j++){
            let value = this.nodeSet[i].edgeSet[i].transition;
             if(!transitions.has(value))
                transitions.add(value);
        }
    }

    return transitions;
}
    
exports.Graph = Graph;