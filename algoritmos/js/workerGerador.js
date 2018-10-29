importScripts('algoritmos.js');

// retorns um array numerico
self.addEventListener('message', function(e) {
 
  var data = e.data;
  
  var quantidade = data.quantidade;
  var op = data.op;
  var numeros = gerar(quantidade, op);
  
  self.postMessage(numeros)

}, false);