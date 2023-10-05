let table = document.querySelector('.table-hits');
if (localStorage.getItem('table') != null)
    table.innerHTML = localStorage.getItem('table');
