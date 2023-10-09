const clearTable = (): void => {
    let table: Element = document.querySelector(".table-hits");
    table.innerHTML = `
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Успех?</th>
                <th>Время работы</th>
            </tr>
        `;
    saveTable();
};
