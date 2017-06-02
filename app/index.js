import * as antlr from 'antlr4';
import * as vizJs from 'viz.js';

let inputParser = require('./main.js').inputParser;
$(document).ready(function () {
  console.log("sadfsdfasdfas");

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
