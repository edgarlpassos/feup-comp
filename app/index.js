import * as antlr from 'antlr4';
import * as vizJs from 'viz.js';
const Graph = require("../graph/graph.js").Graph;
const Node = require("../graph/graphNode.js").Node;
const Complement = require("../graph/complement.js").Complement;
const Reverse = require("../graph/reverse.js").Reverse;
const Product = require("../graph/product.js").Product;
const Concatenation = require("../graph/concatenation.js").Concatenation;
const Edge = require("../graph/graphEdge.js").Edge;

let inputParser = require('./main.js').inputParser;
$(document).ready(function () {

  /* let graph = new Graph();
   //creatiang nodes
   let a = new Node("a", false);
   let b = new Node("b", false);
   let c = new Node("c", true);
   let d = new Node("d", false);
   //creating edges
   let edge = new Edge(b, "1");
   let edge1 = new Edge(c, "1");
   let edge2 = new Edge(d, "1");
   //ading edges
   a.addEdge(edge);
   a.addEdge(edge2);
   b.addEdge(edge1);
   d.addEdge(edge1);

   graph.addNode(a);
   graph.addNode(b);
   graph.addNode(c);
   graph.addNode(d);
   graph.setStartNode(a);

   graph.setGraphName('name');

   let dotFile = graph.toDotFile();
   console.log(dotFile);*/

  /*
    //creating a graph test for complement
    let graph = new Graph();
    //creatiang nodes
    let q0 = new Node("q0",true);
    let q1 = new Node("q1",false);
    //creating edges
    let edge = new Edge(q1,"0");
    let edge1 = new Edge(q0,"1");
    let edge2 = new Edge(q0,"0");
    //ading edges
    q0.addEdge(edge1);
    q0.addEdge(edge);
    q1.addEdge(edge2);
    graph.addNode(q0);
    graph.addNode(q1);
    graph.setStartNode(q0);
    let complement = new Complement(graph);*/


  //creating a graph test for product
  let graph1 = new Graph();
  let graph2 = new Graph();
  //creatiang nodes
  let q1 = new Node("q1", true);
  let q2 = new Node("q2", false);
  let q3 = new Node("q3", false);
  let q4 = new Node("q4", true);

  //creating edges
  let edge = new Edge(q1, "b");
  let edge1 = new Edge(q2, "b");
  let edge2 = new Edge(q2, "a");
  let edge3 = new Edge(q1, "a");

  let edge4 = new Edge(q3, "b");
  let edge5 = new Edge(q3, "a");
  let edge6 = new Edge(q4, "a");
  let edge7 = new Edge(q4, "b");

  q1.addEdge(edge2);
  q1.addEdge(edge);
  q2.addEdge(edge1);
  q2.addEdge(edge3);

  q3.addEdge(edge7);
  q3.addEdge(edge5);
  q4.addEdge(edge4);
  q4.addEdge(edge6);

  graph1.addNode(q1);
  graph1.addNode(q2);
  graph1.setStartNode(q1);

  graph2.addNode(q3);
  graph2.addNode(q4);
  graph2.setStartNode(q3);

  //INTERSECTION 1 UNION 2
  console.log(graph1.toDotFile());
  console.log(graph2.toDotFile());
  graph1.belongsToLanguage('abb');
  //let product = new Product(graph1, graph2, 1);
  let concatenation = new Concatenation(graph1,graph2);

  /*$('#text-input-submit').on('click', function (e) {
    e.preventDefault();
    let textarea = $('#text-input-area');
    let input = textarea.val();

    let outputDiv = $('#output');
    let currentImg = outputDiv.children('#output-image');
    console.log(currentImg);

    if (currentImg != null) {
      currentImg.remove();
    }

    let image = vizJs(input, {
      format: "png-image-element"
    });

    outputDiv.append(image);

    if (input === '')
      return;

    inputParser.parse(input)
  });*/

  $('#text-input-submit-graph1').on('click', graph1Submit);
  $('#text-input-submit-graph2').on('click', graph2Submit);
  $('#text-input-submit-operation').on('click', executeOperation);

  $("#dropdown-operations li a").click(function () {

    $("#dropdown-button:first-child").text($(this).text());
    $("#dropdown-button:first-child").val($(this).text());
    $("#dropdown-button").append('<span class="caret"></span>');
  });
});

function graph1Submit() {
  visualizeAutomaton($('#text-input-area-graph1').val());
}

function graph2Submit() {
  visualizeAutomaton($('#text-input-area-graph2').val());
}

function visualizeAutomaton(input) {

  let outputDiv = $('#output');
  let currentImg = outputDiv.children('#output-image');
  console.log(currentImg);

  outputDiv.empty();

  let image = vizJs(input, {
    format: "png-image-element"
  });

  outputDiv.append(image);

  if (input === '')
    return;

  inputParser.parse(input)
}

function executeOperation() {
  let activeOperation = $('#dropdown-button').text();

  if (activeOperation === 'DFA Operations') {
    return;
  }

  switch (activeOperation) {
    case 'Output Input 1':
      break;
    case 'Output Input 2':
      break;
    case 'Complement Input 1':
      break;
    case 'Reverse Input 1':
      break;
    case 'Complement Input 2':
      break;
    case 'Product':
      break;
    case 'Intersection':
      break;
    case 'Union':
      break;
    case 'Diff':
      break;
    default:
      break;
  }
}