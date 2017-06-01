function GraphNode(){
    this.edgeSet = {};
}

GraphNode.prototype = Object.create(Object.prototype);
GraphNode.prototype.constructor = GraphNode;

GraphNode.getEdgeSet = function(){
    return this.edgeSet;
}