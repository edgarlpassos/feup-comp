let dotFileListener = require('./DotFileListener').DotFileListener;

CustomDotFileListener = function(){
    dotFileListener.call(this);
    return this;
}

CustomDotFileListener.prototype = Object.create(dotFileListener.prototype);
CustomDotFileListener.prototype.constructor = CustomDotFileListener;

/*
 * Overrides
 */

// Enter a parse tree produced by DotFileParser#entry.
CustomDotFileListener.prototype.enterEntry = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#entry.
CustomDotFileListener.prototype.exitEntry = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#instruction.
CustomDotFileListener.prototype.enterInstruction = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#instruction.
CustomDotFileListener.prototype.exitInstruction = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#stateTransition.
CustomDotFileListener.prototype.enterStateTransition = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#stateTransition.
CustomDotFileListener.prototype.exitStateTransition = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#labeling.
CustomDotFileListener.prototype.enterLabeling = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#labeling.
CustomDotFileListener.prototype.exitLabeling = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#shaping.
CustomDotFileListener.prototype.enterShaping = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#shaping.
CustomDotFileListener.prototype.exitShaping = function(ctx) {
};


// Enter a parse tree produced by DotFileParser#startpoint.
CustomDotFileListener.prototype.enterStartpoint = function(ctx) {
};

// Exit a parse tree produced by DotFileParser#startpoint.
CustomDotFileListener.prototype.exitStartpoint = function(ctx) {
};



exports.CustomDotFileListener = CustomDotFileListener;