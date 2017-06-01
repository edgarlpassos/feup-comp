function GraphEdge(nodeFrom, nodeTo, transition){
    this.nodeFrom = nodeFrom;
    this.nodeTo = nodeTo;
    this.transition = transition;
}

GraphEdge.prototype = Object.create(Object.prototype);
GraphEdge.prototype.constructor = GraphEdge;

GraphEdge.getNodeFrom = function(){
    return this.nodeFrom;
}

GraphEdge.getNodeTo = function(){
    return this.nodeTo;
}

GraphEdge.getTransition = function(){
    return this.transition;
}