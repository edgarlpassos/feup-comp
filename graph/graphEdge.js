function Edge(nodeTo, transition) {
    this.nodeTo = nodeTo;
    this.transition = transition;
    this.new = false;
}

Edge.prototype = Object.create(Object.prototype);
Edge.prototype.constructor = Edge;

Edge.prototype.getNodeTo = function () {
    return this.nodeTo;
}

Edge.prototype.getTransition = function () {
    return this.transition;
}

exports.Edge = Edge;