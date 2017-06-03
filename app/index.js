import * as antlr from 'antlr4';
import * as vizJs from 'viz.js';
const Graph = require("../graph/graph.js").Graph;
const Node = require("../graph/graphNode.js").Node;
const Complement = require("../graph/complement.js").Complement;
const Reverse = require("../graph/reverse.js").Reverse;
const Product = require("../graph/product.js").Product;
const Edge = require("../graph/graphEdge.js").Edge;

let inputParser = require('./main.js').inputParser;
$(document).ready(function () {

  /*
  //creating a graph test for reverse
  let graph = new Graph();
  //creatiang nodes
  let p0 = new Node("p0",false);
  let p1 = new Node("p1",false);
  let p2 = new Node("p2",true);
  //creating edges
  let edge = new Edge(p2,"ε");
  let edge1 = new Edge(p1,"0");
  let edge2 = new Edge(p0,"0");
  let edge3 = new Edge(p2,"1");
  //ading edges
  p0.addEdge(edge1);
  p0.addEdge(edge2);
  p0.addEdge(edge);
  p1.addEdge(edge2);
  p2.addEdge(edge3);
  graph.addNode(p0);
  graph.addNode(p1);
  graph.addNode(p2);
  graph.setStartNode(p0);
  graph.addTransitions("0");
  graph.addTransitions("1");
  graph.addTransitions("ε");
  let reverse = new Reverse(graph);*/


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
  graph.addTransitions("0");
  graph.addTransitions("1");
  let complement = new Complement(graph);*/


   //creating a graph test for product
  let graph1 = new Graph();
  let graph2 = new Graph();
  //creatiang nodes
  let q1 = new Node("q1",true);
  let q2 = new Node("q2",false);
  let q3 = new Node("q3",false);
  let q4= new Node("q4",true);
    
  //creating edges
  let edge = new Edge(q1,"b");
  let edge1 = new Edge(q2,"b");
  let edge2 = new Edge(q2,"a");
  let edge3 = new Edge(q1,"a");

  let edge4 = new Edge(q3,"b");
  let edge5 = new Edge(q3,"a");
  let edge6 = new Edge(q4,"a");
  let edge7 = new Edge(q4,"b");

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
  graph1.addTransitions("b");
  graph1.addTransitions("a");

  graph2.addNode(q3);
  graph2.addNode(q4);

  graph2.setStartNode(q3);
  graph2.addTransitions("b");
  graph2.addTransitions("a");

  let product = new Product(graph1,graph2);



  $('#text-input-submit').on('click',function(e){
    e.preventDefault();
    let textarea = $('#text-input-area');
    let input = textarea.val();

    let outputDiv = $('#output');
    let currentImg = outputDiv.children('#output-image');
    console.log(currentImg);

    if(currentImg != null){
      currentImg.remove();
    }

    let image = vizJs(input,{format: "png-image-element"});

    outputDiv.append(image);

    if(input === '')
      return;
    
    inputParser.parse(input)
  });
});



