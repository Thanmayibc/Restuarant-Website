
/*To create tabs*/
function info(event, name) {
    var i, content, links;
  
    content = document.getElementsByClassName("infos");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  
    links = document.getElementsByClassName("tab");
    for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
    }
  
    document.getElementById(name).style.display = "block";
    event.currentTarget.className += " active";
    console.log(event.currentTarget.className);
  }

  /* Disabling button */ 
 function disablebtn(idname){
    var button = document.getElementById(idname); 
    button.disabled = true;
}

  var arr = [];
  var keyarr = [];
  var i=0, quantity,key;
  function fn(idname){
  
      arr[i] = Number(document.getElementById(idname).value);
      keyarr[i] = idname;
      i++;
  }
  function setquantity(){
          localStorage.setItem("quantity",JSON.stringify(arr));
          localStorage.setItem("key",JSON.stringify(keyarr));
  }
  function preview(){
      var list = document.getElementById("preview");
      list.querySelectorAll('*').forEach(n => n.remove());
      for(var j=0;j<arr.length;j++){
       x = parseInt(arr[j]);
      var name = document.getElementById(keyarr[j]).name;
      var list = document.getElementById("preview");
      var ol = document.createElement("ul");
      var item = document.createElement("li");
      if(x > 0){
          var value = document.createTextNode("Name : "+name+", Quantity : "+arr[j]);
      }else{
        var value = document.createTextNode("Provide a quantity");
      }
      item.appendChild(value);
      list.appendChild(ol);
      ol.appendChild(item);
      }
      if(arr.length>0){
          alert("Scroll Down to see your Preview !");
      }
  
  }

 
 