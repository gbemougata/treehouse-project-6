//adding buttons videofeatures

$('videofeatures').mediaelementplayer({
  features:['playpause', 'current', 'progress', 'duration', 'track', 'volume', 'fullscreen', 'skipback'],
  startlanguage :'en',
  skipBackInterval :4
});

let vidwrapper= document.getElementById('vidwrapper');
let video =document.getElementById('videofeatures');
let newElement=document.querySelector('element');
let text=document.getAttribute('span');

//loop through text and its corresponding span

video.addEventlistener('timeupdate',() =>{
  for (let i=0; i<text.length; i++){
    if (video.currentTime>=text[i].getAttribute('data-start') && video.currentTime<=text[i].getAttribute('data-end')){
      newElement.innerHtml="i love coding";
      text[i].appendChild(newElement);

    }
    else {
      text[i].removeChild(newElement);
    }
  }
});

//text click video set to that timeupdate

for ( let i=0; i<text.length; i++){
  text[i].addEventListener('click',()=>{


  let setTime=text[i].getAttribute('data-start');
  video.currentTime=setTime;
  document.write('setTime');
}
});
