lexer grammar DotFileLexer;

WS : [ \n\t\r]+ -> skip;
GRAPH: 'digraph';
LABEL: 'label';
STYLE: 'style';
SHAPE: 'shape';
DOUBLE_CIRCLE: 'doublecircle';
TRANSITION: '->';
QUOTATION: '"';
EQUAL: '=';
SEMICOLON: ';';
OPEN_BRACKET: '{';
CLOSE_BRACKET: '}';
OPEN_SQUARE: '[';
CLOSE_SQUARE: ']';
NAME : [A-Za-z][A-Za-z0-9]* ;
EPS: 'ε';
DIGIT: [0-9];