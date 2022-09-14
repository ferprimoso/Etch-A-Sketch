const gridContainer = document.querySelector('.grid-container');

console.log(gridContainer);

for (let i = 0; i < 256; i++){
    let gridPixel = document.createElement("div")
    gridContainer.appendChild(gridPixel);
}