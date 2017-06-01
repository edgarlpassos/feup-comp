/**
 * Created by epassos on 5/18/17.
 */

const http = require('http');
const antlr4 = require('antlr4/index');
const DotFileLexer = require('./DotFileLexer');
const DotFileParser = require('./DotFileParser');
const DotFileListener = require('./DotFileListener').DotFileListener;
const CustomDotFileListener = require('./CustomDotFileListener').CustomDotFileListener;

inputParser = function(){}

inputParser.prototype = Object.create(Object.prototype);
inputParser.constructor = inputParser;

inputParser.parse = function(input){
    console.log(input);
    var chars = new antlr4.InputStream(input);
    var lexer = new DotFileLexer.DotFileLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new DotFileParser.DotFileParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.entry();
    var listener = new CustomDotFileListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
}

exports.inputParser = inputParser;