// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var btn = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  btn.className = "close";
  btn.appendChild(txt);
  myNodelist[i].appendChild(btn);
}

