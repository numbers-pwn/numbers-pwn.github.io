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

console.log(Worker.prototype.constructor)
