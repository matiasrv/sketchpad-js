const container = document.querySelector('.container');
const containerStyle = document.defaultView.getComputedStyle(container);
containerWidth = containerStyle.width.slice(0, -2);

const gridSize = 2;

function generateGrid(side){
    while(container.childNodes.length > 0){
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < side; i++){
        for(let j = 0; j < side; j++){
            let pixel = document.createElement('div');
            pixel.style.width = (containerWidth/side) -1/side  + "px";
            container.appendChild(pixel);
        }
    }
}
function draw(e){
    if(e.target.tagName === 'DIV' && e.target.className !== 'container'){
        e.target.style.backgroundColor = "black";
    }
};
container.addEventListener('mousedown', event =>{
    draw(event);
    container.addEventListener('mouseover', draw);
});

container.addEventListener('mouseup', () => {
    container.removeEventListener('mouseover', draw);
});

generateGrid(gridSize);

generateGrid(4);