// Define a grammar called Hello grammar DotFile;
grammar DotFile;

options {tokenVocab = DotFileLexer;}

entry  : GRAPH NAME OPEN_BRACKET instruction CLOSE_BRACKET;
instruction: NAME stateTransition shaping instruction | SEMICOLON instruction |;
stateTransition: TRANSITION NAME stateTransition labeling SEMICOLON | TRANSITION NAME labeling| ;
labeling: OPEN_SQUARE LABEL EQUAL QUOTATION NAME QUOTATION CLOSE_SQUARE | ;
shaping: OPEN_SQUARE SHAPE EQUAL QUOTATION DOUBLE_CIRCLE QUOTATION CLOSE_SQUARE | ;


startpoint: entry;

