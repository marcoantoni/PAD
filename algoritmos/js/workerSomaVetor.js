importScripts('algoritmos.js');

self.addEventListener('message', function(e) {
 
  var data = e.data,
    arr = data.arr,
    soma = 0,
    length = arr.length;

    //console.log(arr);

    for (var i = 0; i < length; i++) {
      soma = soma + arr[i];
    }  

    //console.log('soma=' + soma);

   this.postMessage({ 'soma': soma, 'workerId': data.workerId });


}, false);