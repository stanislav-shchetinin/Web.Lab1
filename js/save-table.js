const saveTable = () => {
    localStorage.setItem('table', document.querySelector('.table-hits').innerHTML);
}