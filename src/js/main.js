
document.addEventListener('DOMContentLoaded', function(e) {
   /*Видео по клику на кнопку (блок "Как я работаю")*/
   let btnVideo = document.querySelector('.video__btn');
   let frameContant = document.querySelector('.frame-content');
   btnVideo.onclick = function(e) {
      if (!btnVideo) {
      frameContant.className = '.frame-content' 
      } else {
      frameContant.className = '.frame-content-open' 
      }
   }
  
});