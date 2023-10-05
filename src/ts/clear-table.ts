const clearTable = () => {
    let btn = document.querySelector('.btn-clear-table');
    btn.addEventListener('click', () => {
        table = document.querySelector('.table-hits');
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
    });

}
clearTable();