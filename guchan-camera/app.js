alert("JS成功");

const video = document.getElementById("video");

navigator.mediaDevices
  .getUserMedia({
    video: true
  })
  .then((stream) => {
    alert("カメラ成功");
    video.srcObject = stream;
  })
  .catch((err) => {
    alert("エラー: " + err.message);
  });
