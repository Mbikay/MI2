let img = document.querySelector('#img-car');
let button=document.querySelector('#btn2');
button.addEventListener('click',function(){
 if (img.classList.contains('GRAYSCALE')) img.classList.remove('NORMAL'); 
  else img.classList.add('GRAYSCALE');
});
