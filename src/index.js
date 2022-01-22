// js-t ide
const tBody = document.querySelector("#tBody");

/**
 * Create the table with document.createElement
 *
 * @param {Array<SWCharacter>} database
 */
function renderTable(database) {
  for (let i = 0; i < database.length; ++i) {
    let newTr = document.createElement("tr");
    let newTd = document.createElement("td");
    let newTd2 = document.createElement("td");

    newTr.append(newTd, newTd2);
    newTd.innerText = database[i].name;
    newTd2.innerText = database[i].gender;
    tBody.append(newTr);

    newTr.addEventListener("click", function (event) {
      console.log(newTr);
      console.log(database[i].birth_year);
    });
  }
}

/**
 * Create the table with string literal and innerHTML
 *
 * @param {Array<SWCharacter>} database
 */
function renderTableAsStringLiteral(database) {
  for (let i = 0; i < database.length; ++i) {
    tBody.innerHTML += `
      <tr>
        <td> ${database[i].name} </td>
        <td> <strong> ${database[i].gender} </strong></td>
      </tr>
    `;
  }
}

// renderTable(window.swbook);
renderTableAsStringLiteral(window.swbook);

tBody.addEventListener("click", function (event) {
  let current = event.target.parentElement;
  while (current.nodeName !== "TR") {
    current = current.parentElement;
  }
  console.log(current);
});
