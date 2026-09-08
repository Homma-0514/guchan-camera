const video =
document.getElementById("video");

navigator.mediaDevices
.getUserMedia({

video:{
facingMode:"user"
}

})

.then(stream=>{

video.srcObject = stream;

});