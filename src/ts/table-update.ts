const saveTable = (): void => {
    localStorage.setItem(
        "table",
        document.querySelector(".table-hits").innerHTML,
    );
};

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

const responseHandler = (response: string): void => {
    let data = JSON.parse(response);
    const table: Element = document.querySelector(".table-hits");
    table.insertAdjacentHTML("beforeend", data.htmlTable);
    document.querySelector(".table-hits").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
    saveTable();
};