/**
 * Created by epassos on 5/18/17.
 */

const http = require('http');
const antlr4 = require('antlr4/index');
const DotFileLexer = require('../grammar/DotFileLexer');
const DotFileParser = require('../grammar/DotFileParser');
const DotFileListener = require('../grammar/DotFileListener').DotFileListener;
const CustomDotFileVisitor = require('../grammar/CustomDotFileVisitor').CustomDotFileVisitor;

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
    var visitor = new CustomDotFileVisitor();
    visitor.visitEntry(tree);

}

exports.inputParser = inputParser;