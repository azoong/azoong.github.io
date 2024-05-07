// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// 함수의 이름은 우리가 가져온 라이브러리에 맞게 최적화된것이라 바꾸면 안됨
function onYouTubeIframeAPIReady() {
  // in html. <div id="player"></div>
new YT.Player('player', {
    videoId: 'yM7RKVY25ao', //최초 재생할 유투브 영상 ID
    playerVars: {
      autoplay: true, //자동재생유무
      loop: true, //반복재생유무
      playlist: 'yM7RKVY25ao' //반복 재생할 유투브 영상 ID목록
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거, target은 현재 요소를 말함
      }
    }
  });
}