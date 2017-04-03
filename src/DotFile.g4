// Define a grammar called Hello
grammar DotFile;

r  : GRAPH NAME OPEN_BRACKET content CLOSE_BRACKET;
content: START stateTransition SEMICOLON | ;
stateTransition: TRANSITION NAME stateTransition SEMICOLON | TRANSITION NAME |   ;
WS : [ \n\t\r]+ -> skip;

GRAPH: 'graph';
START: 'start';
LABEL: 'label';
STYLE: 'style';
SHAPE: 'shape';
DOUBLE_CIRCLE: 'doublecircle';
TRANSITION: '->';
EQUAL: '=';
SEMICOLON: ';';
OPEN_BRACKET: '{';
CLOSE_BRACKET: '}';
OPEN_SQUARE: '[';
CLOSE_SQUARE: ']';
NAME : [A-Za-z][A-Za-z0-9]* ;
DIGIT: [0-9];