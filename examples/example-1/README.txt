Coloque na primeira caixa de texto o seguinte grafo:

digraph example1 {
    q1->q2;
    q2->q2[label="b"];
    q2->q1[label="a"];
    q1->q1[label="b"];
    q1[shape="doublecircle"];
}

Escolha na dropdown a operação 'Complement Input 1'. Após, escolher a operação clique no botão 'Execute Operation'.

Após isso deverá surgir do lado direito da página, um erro.
A razão para aparecer um erro é pela sintaxe mal-formada do grafo. A nossa sintaxe obriga que, por cada linha do texto tenha um nó, um conector(->), outro nó e por fim a label (transição). Apenas é excepção o caso em que se define o estado final, que no exemplo é q1[shape="doublecircle"]. O estado inicial é o primeiro estado dentro das chavetas, no caso o nó 'q1'.
