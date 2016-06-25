self.addEventListener('message', function (event) {

var fecha= new Date();

while (new Date() - fecha <1000){

}
self.postMessage("Casual desde el worker:"+event.data)

}, false);
