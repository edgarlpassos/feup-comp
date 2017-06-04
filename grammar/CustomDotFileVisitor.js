const DotFileVisitor = require('./DotFileVisitor').DotFileVisitor;
const Graph = require('../graph/graph.js').Graph;
const Node = require('../graph/graphNode.js').Node;
const Edge = require('../graph/graphEdge.js').Edge;
const DotFile = require('./DotFile.js').DotFile;

CustomDotFileVisitor = function () {
  DotFileVisitor.call(this);
  return this;
}

CustomDotFileVisitor.prototype = Object.create(DotFileVisitor.prototype);
CustomDotFileVisitor.prototype.constructor = CustomDotFileVisitor;

/*
 * Overrides
 */

// Visit a parse tree produced by DotFileParser#entry.
DotFileVisitor.prototype.visitEntry = function (ctx) {
  this.graph = new Graph();
  if (ctx.instruction() != null) {
    this.visitInstruction(ctx.instruction());
    console.log(this.graph);
    return this.graph;
  }
}


// Visit a parse tree produced by DotFileParser#instruction.
DotFileVisitor.prototype.visitInstruction = function (ctx) {
  console.log(ctx);
  if (ctx.children == null)
    return null;


  let valToken = ctx.NAME();
  if (valToken != null) {
    let value = valToken.getText();
    let node = this.graph.getNode(value);
    if (node == null) {
      node = new Node(value);
      this.graph.addNode(node);
    }

    /* Check for transitions */
    let transition = ctx.stateTransition();
    if (transition != null) {
      let edge = this.visitStateTransition(transition);
      if (edge != null) {
        node.addEdge(edge);
      }
    }

    /* Check for node shaping */
    let shaping = ctx.shaping();
    if (shaping != null) {
      let shape = this.visitShaping(shaping);
      if (shape != null) {}
    }
  }

  /* Semicolon Instruction */
  let instruction = ctx.instruction();
  if (instruction != null) {
    console.log('visiting instruction');
    console.log(instruction);
    this.visitInstruction(instruction);
  }
};

// Visit a parse tree produced by DotFileParser#stateTransition.
DotFileVisitor.prototype.visitStateTransition = function (ctx) {
  if (ctx.children === null)
    return null;

  /* Get destination node */
  let valToken = ctx.NAME();
  if (valToken != null) {

    let value = valToken.getText();
    let node = this.graph.getNode(value);

    if (node == null) {
      node = new Node(value);
      this.graph.addNode(node);
    }

    let transitionChar = '';
    let labeling = ctx.labeling();
    if (labeling != null)
      transitionChar = this.visitLabeling(labeling);

    let returnVal = new Edge(node, transitionChar);
    return returnVal;
  }
  return null;
};


// Visit a parse tree produced by DotFileParser#labeling.
DotFileVisitor.prototype.visitLabeling = function (ctx) {
  return null;
  //return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#shaping.
DotFileVisitor.prototype.visitShaping = function (ctx) {
  return null;
  //return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#startpoint.
DotFileVisitor.prototype.visitStartpoint = function (ctx) {
  return this.visitChildren(ctx);
};


exports.CustomDotFileVisitor = CustomDotFileVisitor;