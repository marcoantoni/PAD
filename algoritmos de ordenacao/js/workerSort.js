importScripts('algoritmos.js');

self.addEventListener('message', function(e) {
  var data = e.data;
  
    var quantidade = data.quantidade;
    var op = data.op;
    var numeros = [];
    numeros = gerar(quantidade, op)
    var tempos = [];
        
    //execucao do bubble sort
    var bs_time0 = performance.now();
    bs = bubbleSort(numeros);
    var bs_time1 = performance.now();
    var bs_time =  calcularExecucao(bs_time0, bs_time1);

    // console.log('Ordenação array com bubbleSort', bs_time, 'milliseconds to generate:');
    
    //tempos.push(bs_time);
    
    //delete bs;
    //delete bs_time;


    //execucao do selection sort
    var ss_time0 = performance.now();
    ss = selectionSort(numeros);
    var ss_time1 = performance.now();
    var ss_time =  calcularExecucao(ss_time0, ss_time1);

  //  tempos.push(ss_time);
  //  console.log('Ordenação array com selectionSort', ss_time, 'milliseconds to generate:');
    //delete ss;
   // delete ss_time;
    
    // execucao do insertion sort

    var is_time0 = performance.now();
    is = insertionSort(numeros);
    var is_time1 = performance.now();
    var is_time = calcularExecucao(is_time0, is_time1);

    //tempos.push(is_time);
    //console.log('Ordenação array com insertionSort', is_time, 'milliseconds to generate:');
   // delete is;
   // delete is_time;

    // execucao do merge sort
    var ms_time0 = performance.now();
    ms = mergeSort(numeros); 
    var ms_time1 = performance.now()
    var ms_time =  calcularExecucao(ms_time0, ms_time1);

   // tempos.push(ms_time);
   // console.log('Ordenação array com mergeSort', ms_time, 'milliseconds to generate:');
   // delete ms;
   // delete ms_time;

    // execucao do quick sort
    var qs_time0 = performance.now(); 
    qs = quickSort(numeros, 0, 50 );
    var qs_time1 = performance.now()
    var qs_time =  calcularExecucao(qs_time0, qs_time1);

    //tempos.push(qs_time);
   // console.log('Ordenação array com quickSort', qs_time, 'milliseconds to generate:');
   // delete ms;
   // delete ms_time;

    // execucao do heap sort
    var hs_time0 = performance.now(); 
    qs = heapSort(numeros);
    var hs_time1 = performance.now()
    var hs_time =  calcularExecucao(hs_time0, hs_time1);

    //tempos.push(hs_time);
    //console.log('Ordenação array com heapSort', hs_time, 'milliseconds to generate:');
   // delete hs;
  //  delete hs_time;


    // execucao do sort
    var sort_time0 = performance.now();
    sort = numeros.sort();
    var sort_time1 = performance.now();
    var sort_time =  calcularExecucao(sort_time0, sort_time1);

    //tempos.push(sort_time);
    //console.log('Ordenação array usando sort()', sort_time, 'milliseconds to generate:');
   // delete sort;
   // delete sort_time;
    
    //self.postMessage(tempos);
    self.postMessage({'execucaoN': data.execucaoN, 'bubbleSort': bs_time, 'selectionSort': ss_time, 'insertionSort': is_time, 'mergeSort': ms_time, 'quickSort': qs_time, 'heapSort': hs_time, 'sort': sort_time});

}, false);