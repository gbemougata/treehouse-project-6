//adding buttons videofeatures

$('videofeatures').mediaelementplayer({
  features:['playpause', 'current', 'progress', 'duration', 'track', 'volume', 'fullscreen', 'skipback'],
  skipBackInterval :5
});

let vidwrapper= document.getElementById('vidwrapper');
let video =document.getElementById('videofeatures');
let newElement=document.querySelector('element');
let text=document.querySelectorAll('span');

//loop through text and its corresponding span

video.addEventListener('timeupdate', () => {
  for (let i=0; i<text.length; i++){
    if (video.currentTime>=text[i].getAttribute('data-start') && video.currentTime<=text[i].getAttribute('data-end')){

      text[i].style.backgroundColor='green';
    }
    else {
      text[i].style.backgroundColor='blue';
    }
  }
});

//text click video set to that timeupdate

for ( let i=0; i<text.length; i++){
  text[i].addEventListener('click', ()=> {
  let jump=text[i].getAttribute('data-start');
  video.currentTime=jump;
});
}
