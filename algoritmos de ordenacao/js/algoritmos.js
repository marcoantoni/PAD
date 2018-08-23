function bubbleSort(arr){
       var len = arr.length;
       for (var i = len-1; i>=0; i--){
         for(var j = 1; j<=i; j++){
           if(arr[j-1]>arr[j]){
               var temp = arr[j-1];
               arr[j-1] = arr[j];
               arr[j] = temp;
            }
         }
       }
       return arr;
    }

    function selectionSort(arr){
      var minIdx, temp, 
      len = arr.length;
      for(var i = 0; i < len; i++){
        minIdx = i;
        for(var  j = i+1; j<len; j++){
           if(arr[j]<arr[minIdx]){
              minIdx = j;
           }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
      }
      return arr;
    }


      function insertionSort(arr){
        let length = arr.length;
        for (let i = 1; i < length; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return arr;
      }
  
      function mergeSort(arr){
         var len = arr.length;
         if(len <2)
            return arr;
         var mid = Math.floor(len/2),
             left = arr.slice(0,mid),
             right =arr.slice(mid);
         //send left and right to the mergeSort to broke it down into pieces
         //then merge those
         return merge(mergeSort(left),mergeSort(right));
      }

      function merge(left, right){
        var result = [],
            lLen = left.length,
            rLen = right.length,
            l = 0,
            r = 0;
        while(l < lLen && r < rLen){
           if(left[l] < right[r]){
             result.push(left[l++]);
           }
           else{
             result.push(right[r++]);
          }
        }  
        //remaining part needs to be addred to the result
        return result.concat(left.slice(l)).concat(right.slice(r));
      }

    function quickSort(arr, left, right){
       var len = arr.length, 
       pivot,
       partitionIndex;


      if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
        
       //sort left and right
       quickSort(arr, left, partitionIndex - 1);
       quickSort(arr, partitionIndex + 1, right);
      }
      return arr;
    }


      function partition(arr, pivot, left, right){
         var pivotValue = arr[pivot],
             partitionIndex = left;

         for(var i = left; i < right; i++){
          if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
          }
        }
        swap(arr, right, partitionIndex);
        return partitionIndex;
      }
              


      function swap(arr, i, j){
         var temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
      }

      // heap sort 

function heapSort(arr){
  var len = arr.length,
      end = len-1;

  heapify(arr, len);
  
  while(end > 0){
   swap(arr, end--, 0);
   siftDown(arr, 0, end);
  }
  return arr;
}
        


function heapify(arr, len){
   // break the array into root + two sides, to create tree (heap)
   var mid = Math.floor((len-2)/2);
   while(mid >= 0){
    siftDown(arr, mid--, len-1);    
  }
}
        


function siftDown(arr, start, end){
   var root = start,
       child = root*2 + 1,
       toSwap = root;
   while(child <= end){
      if(arr[toSwap] < arr[child]){
        swap(arr, toSwap, child);
      }
      if(child+1 <= end && arr[toSwap] < arr[child+1]){
        swap(arr, toSwap, child+1)
      }
      if(toSwap != root){
         swap(arr, root, toSwap);
         root = toSwap;
      }
      else{
         return; 
      }
      toSwap = root;
      child = root*2+1
  }
}
        
    // função que gera uma quantidade de numeros e escreve na tela
    function gerar(quantidade, op){
      //var quantidade = document.getElementById ("quantidade").value;
      var numeros = [];
      //var e = document.getElementById("op");
      //var op = e.options[e.selectedIndex].value;
      //$('#numerosGerados').empty();
      //alert(op);
      //var numeros = [];
      
      // melhor caso
      if (op == 1){
        for (var i=0; i<quantidade; i++){
          numeros.push(i);
        }
      } 
      if (op == 2){
        for (var i=quantidade; i>0; i--){
          numeros.push(i);
        }
      }
      if (op == 3){
        for (var i=0; i<quantidade; i++){
          numeros.push(Math.floor(Math.random() * quantidade + 1));
        }
      }
      
      // escreve os numeros do array
      //for (var i=0; i<quantidade; i++){
        //$('#numerosGerados').append(numeros[i]+',');
      //}

      //$('#numerosGeradosLabel').show();
      //$('#numerosGerados').show();
      return numeros;
    }

    
    function calcularExecucao(t0, t1){
      return (t1 - t0).toFixed(10);
    }
