var button = document.getElementById("giris");
var ilave = document.getElementById("ilave");
var ol = document.querySelector("ol");
var buttonsil = document.getElementById("tumsil");



function listeyeIlaveEt() {
	var li=document.createElement("li");
	var btn = document.createElement("button");
	  	btn.innerHTML = "Alındı";
  		btn.addEventListener("click", function () {
			this.parentNode.remove(this);})
	li.appendChild(document.createTextNode(ilave.value+"......"));
	li.appendChild(btn);
	ol.appendChild(li);
	ilave.value="";
}


button.addEventListener("click", function () {
	if (ilave.value.length !== 0) {
	listeyeIlaveEt();
}
})

ilave.addEventListener("keydown", function (e) {
	if (13 == e.keyCode && ilave.value.length !== 0) {
	listeyeIlaveEt();
}
})

buttonsil.addEventListener("click", function () {
	var li = document.querySelector("ol");
	while (li.hasChildNodes()) {  
 	li.removeChild(li.firstChild);
}
})