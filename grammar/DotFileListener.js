// Generated from DotFile.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by DotFileParser.
function DotFileListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

DotFileListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
DotFileListener.prototype.constructor = DotFileListener;

// Enter a parse tree produced by DotFileParser#entry.
DotFileListener.prototype.enterEntry = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#entry.
DotFileListener.prototype.exitEntry = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#instruction.
DotFileListener.prototype.enterInstruction = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#instruction.
DotFileListener.prototype.exitInstruction = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#stateTransition.
DotFileListener.prototype.enterStateTransition = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#stateTransition.
DotFileListener.prototype.exitStateTransition = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#labeling.
DotFileListener.prototype.enterLabeling = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#labeling.
DotFileListener.prototype.exitLabeling = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#shaping.
DotFileListener.prototype.enterShaping = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#shaping.
DotFileListener.prototype.exitShaping = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#labelname.
DotFileListener.prototype.enterLabelname = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#labelname.
DotFileListener.prototype.exitLabelname = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#startpoint.
DotFileListener.prototype.enterStartpoint = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#startpoint.
DotFileListener.prototype.exitStartpoint = function(ctx) {
};



exports.DotFileListener = DotFileListener;