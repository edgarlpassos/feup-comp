// Define a grammar called Hello grammar DotFile;
grammar DotFile;

r  : GRAPH NAME OPEN_BRACKET instruction CLOSE_BRACKET;
instruction: NAME stateTransition shaping instruction | SEMICOLON instruction |;
stateTransition: TRANSITION NAME stateTransition labeling SEMICOLON | TRANSITION NAME labeling| ;
labeling: OPEN_SQUARE LABEL EQUAL QUOTATION NAME QUOTATION CLOSE_SQUARE | ;
shaping: OPEN_SQUARE SHAPE EQUAL QUOTATION DOUBLE_CIRCLE QUOTATION CLOSE_SQUARE | ;
WS : [ \n\t\r]+ -> skip;

GRAPH: 'graph';
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
DIGIT: [0-9];

