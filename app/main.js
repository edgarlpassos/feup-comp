/**
 * Created by epassos on 5/18/17.
 */

const http = require('http');
const antlr4 = require('antlr4/index');
const DotFileLexer = require('../grammar/DotFileLexer');
const DotFileParser = require('../grammar/DotFileParser');
const DotFileListener = require('../grammar/DotFileListener').DotFileListener;
const CustomDotFileVisitor = require('../grammar/CustomDotFileVisitor').CustomDotFileVisitor;
const BailErrorStrategy = require('antlr4/error/ErrorStrategy.js').BailErrorStrategy;

inputParser = function(){}

inputParser.prototype = Object.create(Object.prototype);
inputParser.constructor = inputParser;

inputParser.parse = function(input){
    var chars = new antlr4.InputStream(input);
    var lexer = new DotFileLexer.DotFileLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new DotFileParser.DotFileParser(tokens);
    parser._errHandler = new BailErrorStrategy();
    parser.buildParseTrees = true;
    try {
        var tree = parser.entry();
    } catch (err) {
        return ['Invalid input'];
    }
    var visitor = new CustomDotFileVisitor();
    return visitor.visitEntry(tree);
}

exports.inputParser = inputParser;