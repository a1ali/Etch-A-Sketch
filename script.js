console.log('hello');

/*
const color1 = document.getElementById('color');
color1.onmouseover =function() {mouseOver()};
color1.onmouseout =function() {mouseOut()};
console.log('hello')


<div id="color" onmouseover="mouseOver();">1</div>
*/
function mouseOver(e) {
    document.getElementById(e.target.id).style.backgroundColor = "grey";    console.log(e)
  }

  function mouseOut() {
    document.getElementById(e.target.id).style.backgroundColor = "grey";
  }


let num = 40;

const container = document.querySelector('#box');
const button = document.querySelector('#button');
button.addEventListener('click', () => {
    for (let i = 0; i < num*num ; i++){
        document.getElementById(`color${i}`).style.backgroundColor = "white";
    }
  });


for (let i = 0; i < num*num ; i++){
    let div = document.createElement("div");
    div.innerText = '';
    div.id = `color${i}`;
    div.className = 'color';
    div.onmouseover = mouseOver;
    container.appendChild(div);
}

let autos = '';
for (let i = 0; i < num; i++){
    autos+='auto ';
}
container.style['grid-template-columns'] = autos;

