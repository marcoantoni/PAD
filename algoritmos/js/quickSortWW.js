self.addEventListener('message', function(e) {
 
  var data = e.data;

  
  origArray = data.arr;

  console.log("ww " + origArray);
 

    if (origArray.length <= 1) { 
      return origArray;
    } else {

      var left = [];
      var right = [];
      var newArray = [];
      var pivot = origArray.pop();
      var length = origArray.length;

      for (var i = 0; i < length; i++) {
        if (origArray[i] <= pivot) {
          left.push(origArray[i]);
        } else {
          right.push(origArray[i]);
        }
      }

      var quickSort = new Worker('quickSortWW.js');


     // var arr = [left, pivot, right];

      quickSort.postMessage(left);

      //newArray.concat(quick_Sort(left), pivot, quick_Sort(right));

      this.postMessage('arr': newArray);
    }


}, false);
