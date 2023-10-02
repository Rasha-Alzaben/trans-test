let stars=document.getElementById('stars');
let moon2=document.getElementById('moon2');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river5=document.getElementById('river5');
let boat6=document.getElementById('boat6');
let novil=document.querySelector('.novil');
window.onscroll=function(){
    let value=scrollY;
    stars.style.left = value +'px';
    moon2.style.top =  value *4+'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river5.style.top= value  + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value *3 + 'px';
    novil.style.fontSize= value  +'px';
    if(scrollY >=94){
        novil.style.fontSize= 94 +'px';
        novil.style.position= 'fixed';
        if(scrollY >=410){
            novil.style.display='none';
        }else{
            novil.style.display = 'block';
        }
        if(scrollY >=140){
            document.querySelector('.main').style.background =background='linear-gradient(rgb(13 151 144),rgb(17, 1, 40))'
            }else
              {
            document.querySelector('.main').style.background =background= 'linear-gradient(rgb(64, 2, 54),rgb(17, 1, 46))'
               }
    }
}