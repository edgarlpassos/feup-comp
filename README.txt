PROJECT TITLE: Autoanalyze
GROUP: G2
NAME1: Edgar de Lemos Passos NR1: 201404131
GRADE1: 20 CONTRIBUTION1: 33 %
NAME2: Maria João dos Santos Aguiar e Mira Paulo NR2: 201403820
GRADE2: 20 CONTRIBUTION2: 33%
NAME3: Nuno Miguel Mendes Ramos NR2: 201405498
GRADE3: 20 CONTRIBUTION3: 33%

SUMMARY: Our project reads one or two automatons from a dotty-like input, and performs a number of analysis an operations, such as checking if a certain input is accepted by an automaton, and perform operations between automata (product, intersection,union,difference) and on an automaton (reverse and complement).

EXECUTE: To execute this tool, execute the following instruction on a linux terminal, in the root directory of the project

python3 -m http.server 8080

Following this, open a web browser and enter the following address:

localhost:8080
and go to the pages/ directory

This should open a web page with the project. From here you can type automata into the textareas and perform the operations mentioned above. There is a link on the top that will give you some help if needed.


DEALING WITH SYNTACTIC ERRORS: The tool used for the grammar creation and parsing was ANTLRv4. A custom parser was made to parse the input, that inherited from the default parser.
By default, any errors picked up by the parser are printed into the console. In our project the error strategy was changed to throw exceptions, which allowed us to abort processing the input and display an error message, saving execution time, and not allowing bad (but valid to the graph displaying API - VizJS) inputs to be displayed on the page.
