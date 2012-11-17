if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
     var len = arr.length,
     flag = false;
     for(var i = 0; i < len; i++){
      if(arr[i] === item){
        flag = true;
        console.log("found");
        return i;
      }
     }
      if(!flag){
        return -1;
      }
    },

    sum : function(arr) {
      var sum = 0,
      len = arr.length;

      for(var i = 0; i < len; i++){
        sum += arr[i];
      }
      
      return sum;
    },

    remove : function(arr, item) {
      var aray = [];
      for(var i = 0; i < arr.length; i++){
        if(arr[i] !== item){
          aray.push(arr[i]);
        }
      }
      return aray;
    },
    
    removeWithoutCopy : function(arr, item) {
      for(var i = 0; i < arr.length; i++){
        if(arr[i] === item){
          arr.splice(i,1);
        }
      }
      console.log("the returned array is" +arr)
      return arr;
    },

    append : function(arr, item) {
      var farr = arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      var arr = arr1.concat(arr2);
      return arr;
    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
