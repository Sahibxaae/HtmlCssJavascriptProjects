const img = document.querySelector('.bg');
const loading = document.querySelector('.load');

let load = 0;

let int = setInterval(blurring,30);

function blurring(){
    load++;
    if(load>99){
        clearInterval(int)
    }
    loading.innerHTML=`${load}%`;
    loading.style.opacity=scale(load,0,100,1,0);
    img.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }