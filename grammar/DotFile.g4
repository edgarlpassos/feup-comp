
grammar DotFile;

options {tokenVocab = DotFileLexer;}

entry  : GRAPH NAME OPEN_BRACKET instruction CLOSE_BRACKET;
instruction: NAME stateTransition SEMICOLON instruction | NAME shaping SEMICOLON instruction |;
stateTransition: TRANSITION NAME labeling instruction;
labeling: OPEN_SQUARE LABEL EQUAL QUOTATION labelname QUOTATION CLOSE_SQUARE;
shaping: OPEN_SQUARE SHAPE EQUAL QUOTATION DOUBLE_CIRCLE QUOTATION CLOSE_SQUARE | ;
labelname: NAME | EPS;


startpoint: entry;

