function Edge(nodeFrom, nodeTo, transition){
    this.nodeTo = nodeTo;
    this.transition = transition;
}

Edge.prototype = Object.create(Object.prototype);
Edge.prototype.constructor = GraphEdge;

Edge.getNodeTo = function(){
    return this.nodeTo;
}

Edge.getTransition = function(){
    return this.transition;
}

exports.Edge = Edge;