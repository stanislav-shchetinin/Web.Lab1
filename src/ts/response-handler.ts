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
