const container = document.querySelector('.container');
const containerStyle = document.defaultView.getComputedStyle(container);
containerWidth = containerStyle.width.slice(0, -2);

const gridSize = 8;

function generateGrid(side){
    while(container.childNodes.length > 0){
        container.removeChild(container.firstChild);
    }
    container.style["grid-template-columns"] = "repeat(" + side + ", 1fr)";
    for(let i = 0; i < side; i++){
        for(let j = 0; j < side; j++){
            let pixel = document.createElement('div');
            container.appendChild(pixel);
        }
    }
}
function draw(e){
    if(e.target.tagName === 'DIV' && e.target.className !== 'container'){
        e.target.style.backgroundColor = "black";
    }
};
function undraw(e){
    if(e.target.tagName === 'DIV' && e.target.className !== 'container'){
        e.target.style.backgroundColor = "";
    }
}
container.addEventListener('mousedown', event =>{
    if(event.button === 2){return;}
    draw(event);
    container.addEventListener('mouseover', draw);
});
container.addEventListener('contextmenu', e =>{
    e.preventDefault();
    undraw(e);
    container.addEventListener('mouseover', undraw);
});

container.addEventListener('mouseup', () => {
    container.removeEventListener('mouseover', draw);
    container.removeEventListener('mouseover', undraw);
});
container.addEventListener('mouseleave', (e) => {
    container.removeEventListener('mouseover', draw);
    container.removeEventListener('mouseover', undraw);
});


generateGrid(gridSize);

function clearGrid(){
    container.childNodes.forEach(child =>{
        child.style.backgroundColor = "";
    })
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);