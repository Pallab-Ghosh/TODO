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

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].addEventListener("click",function(e) {
    var div = this.parentElement;
    div.style.display = "none";
  },false)
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
