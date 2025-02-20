const gridContainer = document.querySelector('.grid-container');

function createGrid() {
    for (let i = 0; i < 4; i++) {
        let column = document.createElement('div');
        column.classList.add('grid-column');
        for (let j = 0; j < 4; j++) {
            let cell = document.createElement('div');
            cell.classList.add("grid-cell");
            column.appendChild(cell);
        }

        gridContainer.appendChild(column);
    }
}

gridContainer.addEventListener("mouseenter", addCellColor, true);

function addCellColor(event) {
    if (event.target.className === ("grid-cell")) {
        event.target.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

createGrid();