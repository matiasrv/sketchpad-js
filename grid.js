const container = document.querySelector('.container');
const colorPicker = document.querySelector('#colorpick');
const gridSize = document.querySelector('#gridsize');
const updateBtn = document.querySelector('#update');
gridSize.value = 8;
colorPicker.value = '#000000';
updateBtn.textContent = gridSize.value;

function generateGrid(){
    while(container.childNodes.length > 0){
        container.removeChild(container.firstChild);
    }
    container.style["grid-template-columns"] = "repeat(" + gridSize.value + ", 1fr)";
    for(let i = 0; i < gridSize.value; i++){
        for(let j = 0; j < gridSize.value; j++){
            let pixel = document.createElement('div');
            container.appendChild(pixel);
        }
    }
};
function draw(e){
    if(e.target.tagName === 'DIV' && e.target.className !== 'container'){
        e.target.style.backgroundColor = colorPicker.value;
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

generateGrid();

function clearGrid(){
    container.childNodes.forEach(child =>{
        child.style.backgroundColor = "";
    })
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearGrid);

updateBtn.addEventListener('click', () => generateGrid())
gridSize.addEventListener('change', ()=> updateBtn.textContent = gridSize.value);