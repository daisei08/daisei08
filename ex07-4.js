function calc(){
 var h = Number(document.getElementById("height").value);
 var w = Number(document.getElementById("weight").value);
      alert( w / ( (h / 100) * (h / 100) ) );
    }