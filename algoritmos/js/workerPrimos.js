importScripts('algoritmos.js');

self.addEventListener('message', function(e) {
 
  var data = e.data;
  var inicio = data.inicio;
  var fim = data.fim;
  var workerId = data.workerId;
  
  var t0 = performance.now();
 // create an Array to list all numbers within the specified range.
  var list = [];
  for (var i=inicio; i<=fim; i++) {
    if (i>1){ list.push(i); 
    //  console.log(i);
    }
  }

  // check if the no's are primeNos
  var maxDiv = Math.round(Math.sqrt(fim));
  var primes = [];

  var previousProgress;

  for (var i=0; i<list.length; i++) {
    var failed = false;
    for (var j=2; j<=maxDiv; j++) {
      if ((list[i] != j) && (list[i] % j == 0)) {
        failed = true;
      } else if ((j==maxDiv) && (failed == false)) {
        primes.push(list[i]);
      }
    }
	}
  var t1 = performance.now();
  var execucao = calcularExecucao(t0, t1);

  this.postMessage({'inicio': inicio, 'fim': fim, primes, execucao, workerId});

}, false);