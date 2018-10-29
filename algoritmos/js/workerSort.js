importScripts('algoritmos.js');

self.addEventListener('message', function(e) {
 
  var data = e.data;
  numeros = data.numeros;
 
  var t0 = performance.now();
  arr = insertionSort(numeros);
  var t1 = performance.now();
  var tempo = calcularExecucao(t0, t1);



  // retorna a mensagem para a thread windows
  self.postMessage({ 'arr': arr, 'tempo': tempo });

}, false);