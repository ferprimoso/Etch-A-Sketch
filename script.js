const gridContainer = document.querySelector('.grid-container');

//
function generateGrid(size){
    if (size > 100 || isNaN(size) || size <= 0){
        alert("Enter a valid number");
        return;
    }

    deleteGrid();

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++){
        const gridPixel = document.createElement("div");
        gridContainer.appendChild(gridPixel);
    }

    const gridPixels = gridContainer.querySelectorAll('div');
    gridPixels.forEach(pixel => pixel.addEventListener('mouseenter', () => pixel.classList.add('colored')));
}

function deleteGrid() {
    gridContainer.innerHTML='';
}

const gridButton = document.querySelector('.grid-button').addEventListener('click', () => generateGrid(prompt('Enter the grid size: (1-100)')))


function main() {
    deleteGrid();
    generateGrid(16);
}

main();
