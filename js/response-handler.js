"use strict";
const responseHandler = (response) => {
    let data = JSON.parse(response);
    const table = document.querySelector('.table-hits');
    table.insertAdjacentHTML('beforeend', data.htmlTable);
    saveTable();
};
//# sourceMappingURL=response-handler.js.map