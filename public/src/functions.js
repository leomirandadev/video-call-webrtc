function formatMsg(msg, lastMsgs) {
  var now = new Date();
  var h = now.getHours();
  var m = addZero(now.getMinutes());
  var s = addZero(now.getSeconds());

  if (h > 12)
      h -= 12;
  else if (h === 0)
      h = 12;

  function addZero(t) {
      if (t < 10)
          t = "0" + t;
      return t;
  };

  return "<p><span class=\"msg-time\">" + h + ":" + m + ":" + s + "</span>  " + msg + lastMsgs + "</p>";
};

const listExactCamera = ["enviroment", "user", "left", "right"]

function createStremLocalVideo(localVideoStream, exactCamera) {

    alert(exactCamera)
    const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    const videoConfig = {
        facingMode: exactCamera
    }

    getUserMedia({video: videoConfig, audio: true}, function(stream) {
        localVideoStream.srcObject = stream
    }, function(err) {
        console.log('Failed to get local stream' ,err);
    });
}


// for $_GET
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}