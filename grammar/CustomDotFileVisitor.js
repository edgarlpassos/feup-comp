const DotFileVisitor = require('./DotFileVisitor').DotFileVisitor;
const Graph = require('../graph/graph.js').Graph;

CustomDotFileVisitor = function(){
    DotFileVisitor.call(this);
    return this;
}

CustomDotFileVisitor.prototype = Object.create(DotFileVisitor.prototype);
CustomDotFileVisitor.prototype.constructor = CustomDotFileVisitor;

/*
 * Overrides
 */

// Visit a parse tree produced by DotFileParser#entry.
DotFileVisitor.prototype.visitEntry = function(ctx) {
  this.graph = new Graph();
  console.log(ctx);
};


// Visit a parse tree produced by DotFileParser#instruction.
DotFileVisitor.prototype.visitInstruction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#stateTransition.
DotFileVisitor.prototype.visitStateTransition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#labeling.
DotFileVisitor.prototype.visitLabeling = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#shaping.
DotFileVisitor.prototype.visitShaping = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#startpoint.
DotFileVisitor.prototype.visitStartpoint = function(ctx) {
  return this.visitChildren(ctx);
};


exports.CustomDotFileVisitor = CustomDotFileVisitor;