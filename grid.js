const container = document.querySelector('.container');
const gridSize = 16;
for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j++){
        let pixel = document.createElement('div');
        // pixel.style.backgroundColor = "grey";
        container.appendChild(pixel);
    }
}