alert("JS読み込み成功");

const video =
document.getElementById("video");

navigator.mediaDevices
.getUserMedia({
  video:{
    facingMode:"user"
  }
})
.then(stream=>{
  alert("カメラ取得成功");
  video.srcObject = stream;
})
.catch(err=>{
  alert(err.message);
});
