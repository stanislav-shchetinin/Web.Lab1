const saveTable = (): void => {
  localStorage.setItem(
    "table",
    document.querySelector(".table-hits").innerHTML,
  );
};
