function createGrid() {
    const gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i < 4; i++) {
        let row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < 4; j++) {
            let cell = document.createElement('div');
            cell.classList.add("grid-cell");
            row.appendChild(cell);
        }
        gridContainer.appendChild(row);
    }
}

createGrid();