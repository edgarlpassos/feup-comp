const Edge = require('./graphEdge.js').Edge;
function Node(val,acceptanceNode){
    this.edgeSet = new Array();
    this.val = val;
    this.acceptanceNode = acceptanceNode;
    this.visited = false;
}
Node.prototype = Object.create(Object.prototype);
Node.prototype.constructor = Node;

Node.prototype = Object.create(Object.prototype);
Node.prototype.constructor = Node;

Node.prototype.getEdgeSet = function(){
    return this.edgeSet;
}

Node.prototype.addEdge = function(newEdge){
    this.edgeSet.push(newEdge);
}

Node.prototype.getVal = function(){
    if(this.val.length === 2)
        return this.val[0] + '' + this.val[1];

    return this.val;
}

Node.prototype.isAcceptanceNode = function(){
    return this.acceptanceNode;
}

Node.prototype.changeNodeType = function(){
    this.acceptanceNode = !this.acceptanceNode;
}

Node.prototype.deleteEdge = function(transition, nodeTo){
    for(var index = 0; index < this.edgeSet.length; index++){
        if(this.edgeSet[index].transition == transition && this.edgeSet[index].nodeTo.val == nodeTo.val){
            console.log("FOUND IT");
            break;
        } 
    }

    if (index > -1){
        this.edgeSet.splice(index, 1);
        console.log(this.edgeSet);
    }
       
}

Node.prototype.nodeEquals = function(node1,node2){
    if(node1.val != node2.val)
        return false;

    if(node1.acceptanceNode != node2.acceptanceNode)
        return false;

    for(var i = 0; i <node1.getEdgeSet().length; i++){
            edge = node1.getEdgeSet()[i];
            edge1 = node2.getEdgeSet()[i];

            if(edge.transition.valueOf() != edge1.transition.valueOf()){
                console.log("dif 1");
                return false;
            }   

            if(edge.nodeTo.val != edge1.nodeTo.val){
                console.log("dif 2");
                console.log(edge.nodeTo.val);
                console.log(edge1.nodeTo.val);
                return false;
            }
    }
    return true;
}

/**
 * This function returns dot file sintax
 */
Node.prototype.toDotFile = function(){

    if(this.visited)
        return;

    this.visited = true;

    if(this.edgeSet.length == 0)
        return this.getVal() + ";\n";

    let ret = "";

    console.log(this);
    for(let i = 0; i < this.edgeSet.length; i++){
        console.log(this.edgeSet[i].getNodeTo().getVal());
        let node = this.edgeSet[i].getNodeTo();
        if(node.isVisited())
            ret += this.getVal() + "->" + node.getVal() + ";\n";
        else ret += this.getVal() + "->" + node.toDotFile();
    }

    return ret;
}

Node.prototype.isVisited = function(){
    return this.visited;
}

Node.prototype.setVisited = function(newValue){
    this.visited = newValue;
}

exports.Node = Node;