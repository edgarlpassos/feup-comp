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
  $('#visualize-language').on('click', function () {
    let graph = inputParser.parse($('#new-language').val());
    let outPutDiv = $('#output-2');
    visualizeAutomaton(graph, outPutDiv);
  });
  $('#text-input-submit-operation').on('click', function () {
    let graph1 = inputParser.parse($('#text-input-area-graph1').val());
    let graph2 = inputParser.parse($('#text-input-area-graph2').val());
    executeOperation(graph1, graph2);
  });
  $('#test-new-language').on('click', function () {
    let graph1 = inputParser.parse($('#text-input-area-graph1').val());
    testNewLanguage(graph1);
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

  if (input[0] != 'success') {
    for (let i = 0; i < input.length; i++) {
      outputDiv.append($('<div class="alert alert-danger" role="alert">' + input[i] + '</div>'));
    }
    return;
  }

  console.log(input[1]);
  input = input[1].toDotFile();

  console.log(input);

  let image = vizJs(input, {
    format: "png-image-element"
  });


  outputDiv.append('<button id="empty-output" class="btn btn-default pull-right" type="button">x</button>');
  $('#empty-output').on('click', emptyContent.bind(this, outputDiv));
  outputDiv.append('<button type="button" class="btn btn-default" data-toggle="modal" data-target="#dot-file">Get Dot File</button>')
  $('#dot-file-modal-body').empty();
  outputDiv.append(image);
  $('#dot-file-modal-body').append('<textarea class="input" name="text-input" id="text-input-area-graph2" rows="15" cols="7">' + input + '</textarea>')
}

function executeOperation(graph1, graph2) {

  let activeOperation = $('#dropdown-button').text();

  if (activeOperation === 'DFA Operations') {
    return;
  }

  let result;

  switch (activeOperation) {
    case 'Output Input 1':
      result = graph1;
      break;
    case 'Output Input 2':
      result = graph2;
      break;
    case 'Complement Input 1':
      if (graph1[0] != 'success') {
        result = graph1;
        break;
      }
      let complement1 = new Complement(graph1[1]);
      result = ['success', complement1.getResult()];
      break;
    case 'Complement Input 2':
      if (graph2[0] != 'success') {
        result = graph2;
        break;
      }
      let complement2 = new Complement(graph2[1]);
      result = ['success', complement2.getResult()];
      break;
    case 'Reverse Input 1':
      if (graph1[0] != 'success') {
        result = graph1;
        break;
      }
      let reverse1 = new Reverse(graph1[1]);
      result = ['success', reverse1.getResult()];
      break;
    case 'Reverse Input 2':
      if (graph2[0] != 'success') {
        result = graph2;
        break;
      }
      let reverse2 = new Reverse(graph2[1]);
      result = ['success', reverse2.getResult()];
      break;
    case 'Product':
      if (graph1[0] != 'success') {
        result = graph1;
        break;
      }
      if (graph2[0] != 'success') {
        result = graph2;
        break;
      }
      let product = new Product(graph1[1], graph2[1], PRODUCT);
      result = ['success', product.getResultGraph()];
      break;
    case 'Intersection':
      if (graph1[0] != 'success') {
        result = graph1;
        break;
      }
      if (graph2[0] != 'success') {
        result = graph2;
        break;
      }
      let intersection = new Product(graph1[1], graph2[1], INTERSECTION);
      result = ['success', intersection.getResultGraph()];
      break;
    case 'Union':
      if (graph1[0] != 'success') {
        result = graph1;
        break;
      }
      if (graph2[0] != 'success') {
        result = graph2;
        break;
      }
      let union = new Product(graph1[1], graph2[1], UNION);
      result = ['success', union.getResultGraph()];
      break;
    case 'Diff':
      if (graph1[0] != 'success') {
        result = graph1;
        break;
      }
      if (graph2[0] != 'success') {
        result = graph2;
        break;
      }
      let diff = new Product(graph1[1], graph2[1], DIFF);
      result = ['success', diff.getResultGraph()];
      break;
    default:
      break;
  }

  visualizeAutomaton(result, $('#output'));
}

function testNewLanguage(graph) {
  console.log(graph);
  let outPutDiv = $('#output-2');
  visualizeAutomaton(graph, outPutDiv);

  if (graph[0] != 'success') {
    return;
  }

  let input = $('#input-new-language').val();

  console.log(graph[1]);

  if (graph[1].belongsToLanguage(input)) {
    $(outPutDiv).append('<div class="alert alert-success" role="alert">The FA accepts the input!</div>');
  } else {
    $(outPutDiv).append('<div class="alert alert-danger" role="alert">The FA doesn\'t accept the language!</div>');
  }
}

function emptyContent(content) {
  $(content).empty();
}