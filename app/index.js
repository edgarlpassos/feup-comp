import * as antlr from 'antlr4';
import * as vizJs from 'viz.js';
const Graph = require("../graph/graph.js").Graph;
const Node = require("../graph/graphNode.js").Node;
const Complement = require("../graph/complement.js").Complement;
const Reverse = require("../graph/reverse.js").Reverse;
const Product = require("../graph/product.js").Product;
const Concatenation = require("../graph/concatenation.js").Concatenation;
const Edge = require("../graph/graphEdge.js").Edge;

const PRODUCT = 0;
const INTERSECTION = 1;
const UNION = 2;
const DIFF = 3;

let inputParser = require('./main.js').inputParser;
$(document).ready(function () {

  /*
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
    graph1.belongsToLanguage('abb');
    //let product = new Product(graph1, graph2, 1);
    let concatenation = new Concatenation(graph1, graph2);

  */

  $('#text-input-submit-graph1').on('click', graph1Submit);
  $('#text-input-submit-graph2').on('click', graph2Submit);
  $('#text-input-submit-operation').on('click', function () {
    let graph1 = inputParser.parse($('#text-input-area-graph1').val());
    let graph2 = inputParser.parse($('#text-input-area-graph2').val());
    executeOperation(graph1, graph2);
  });
  $('#test-new-language').on('click', function () {
    let graph1 = inputParser.parse($('#text-input-area-graph1').val());
  });

  $("#dropdown-operations li a").click(function () {
    $("#dropdown-button:first-child").text($(this).text());
    $("#dropdown-button:first-child").val($(this).text());
    $("#dropdown-button").append('<span class="caret"></span>');
  });
});

function graph1Submit() {
  let graph = inputParser.parse($('#text-input-area-graph1').val());
  visualizeAutomaton(graph);
}

function graph2Submit() {
  let graph = inputParser.parse($('#text-input-area-graph2').val());
  visualizeAutomaton(graph);
}

function visualizeAutomaton(input, outputDiv) {

  if (input === '')
    return;


  if (outputDiv == null)
    outputDiv = $('#output');

  let currentImg = outputDiv.children('#output-image');
  outputDiv.empty();

  console.log(input);
  if (input[0] != 'success') {
    for (let i = 0; i < input.length; i++) {
      outputDiv.append($('<div class="alert alert-danger" role="alert">' + input[i] + '</div>'));
    }
    return;
  }

  input = input[1].toDotFile();

  let image = vizJs(input, {
    format: "png-image-element"
  });

  outputDiv.append(image);
}

function executeOperation(graph1, graph2) {

  let activeOperation = $('#dropdown-button').text();

  if (activeOperation === 'DFA Operations') {
    return;
  }

  let result;

  console.log('Active Operation');
  console.log(activeOperation);
  switch (activeOperation) {
    case 'Output Input 1':
      result = graph1;
      break;
    case 'Output Input 2':
      result = graph2;
      break;
    case 'Complement Input 1':
      if (graph1[0] != 'success') {
        visualizeAutomaton(graph1);
        break;
      }
      console.log(graph1[1]);
      let complement1 = new Complement(graph1[1]);
      result = ['success', complement1.getResult()];
      console.log('\nsadfsafasf');
      console.log(result);
      break;
    case 'Complement Input 2':
      if (graph2[0] != 'success') {
        visualizeAutomaton(graph2);
        break;
      }
      let complement2 = new Complement(graph2[1]);
      result = ['success', complement2.getResult()];
      console('complement');
      break;
    case 'Reverse Input 1':
      if (graph1[0] != 'success') {
        visualizeAutomaton(graph1);
        break;
      }
      let reverse1 = new Reverse(graph1[1]);
      result = ['success', reverse1.getResult()];
      break;
    case 'Reverse Input 2':
      if (graph2[0] != 'success') {
        visualizeAutomaton(graph2);
        break;
      }
      let reverse2 = new Reverse(graph2[1]);
      result = ['success', reverse2.getResult()];
      break;
    case 'Product':
      if (graph1[0] != 'success') {
        visualizeAutomaton(graph1);
        break;
      }
      if (graph2[0] != 'success') {
        visualizeAutomaton(graph2);
        break;
      }
      let product = new Product(graph1[1], graph2[1], PRODUCT);
      result = ['success', product.getResultGraph()];
      break;
    case 'Intersection':
      if (graph1[0] != 'success') {
        visualizeAutomaton(graph1);
        break;
      }
      if (graph2[0] != 'success') {
        visualizeAutomaton(graph2);
        break;
      }
      let intersection = new Product(graph1[1], graph2[1], INTERSECTION);
      result = ['success', intersection.getResultGraph()];
      break;
    case 'Union':
      if (graph1[0] != 'success') {
        visualizeAutomaton(graph1);
        break;
      }
      if (graph2[0] != 'success') {
        visualizeAutomaton(graph2);
        break;
      }
      let union = new Product(graph1[1], graph2[1], UNION);
      result = ['success', union.getResultGraph()];
      break;
    case 'Diff':
      if (graph1[0] != 'success') {
        visualizeAutomaton(graph1);
        break;
      }
      if (graph2[0] != 'success') {
        visualizeAutomaton(graph2);
        break;
      }
      let diff = new Product(graph1[1], graph2[1], DIFF);
      result = ['success', diff.getResultGraph()];
      break;
    default:
      break;
  }

  console.log(result);
  visualizeAutomaton(result, $('#output'));
}

function testNewLanguage(graph) {

  let outPutDiv = $('#output-2');
  visualizeAutomaton(graph, outPutDiv);

  if (graph[0] != 'success') {
    return;
  }

  let input = $('#input-new-language').val();

  if (this.graph.belongsToLanguage(input)) {
    $(outPutDiv).append('<div class="alert alert-success" role="alert">The FA accepts the language!</div>');
  } else {
    $(outPutDiv).append('<div class="alert alert-danger" role="alert">The FA doesn\'t accept the language!</div>');
  }
}