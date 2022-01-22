console.log(window.swbook);
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
      <tr data-index="${i}">
        <td> ${database[i].name} </td>
        <td> <strong> ${database[i].gender} </strong></td>
      </tr>
    `;
  }
}

// renderTable(window.swbook);
renderTableAsStringLiteral(window.swbook);

tBody.addEventListener("click", function (event) {
  let row = event.target;
  while (row.nodeName !== "TR") {
    row = row.parentElement;
  }
  const index = Number(row.dataset.index); // row.getAttribute('data-index')
  const character = window.swbook[index];
  console.log(character);
});

let modalCloseElement = document.querySelector(".modalClose");
let modalDivElement = document.querySelector(".modal-background");
modalCloseElement.addEventListener("click", function (event) {
  modalDivElement.classList.remove("open");
  modalDivElement.classList.add("closing");
  modalDivElement.addEventListener("transitionend", () => {
    modalDivElement.classList.remove("closing");
  });
});

const modalOpen = document.querySelector("#modalOpen");

modalOpen.addEventListener("click", () => {
  modalDivElement.classList.add("open");
});

const form = document.getElementById("swform");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(form.name.value);
  console.log(form.height.value);
  console.log(form.mass.value);

  const obj = {};

  for (let i = 0; i < form.elements.length; i++) {
    const value = form.elements[i].value; // Luke Skywalker, blond, 55
    const name = form.elements[i].name; // hair_color, mass

    obj[name] = value;
  }

  //
  // Ezt helyettesiti a ciklus
  //
  // obj.birth_year = form.elements.birth_year.value
  // obj.eye_color = form.elements.eye_color.value
  // obj.gender = form.elements.gender.value
  // obj.hair_color = form.elements.hair_color.value
  // obj.height = form.elements.height.value
  // obj.mass = form.elements.mass.value
  // obj.name = form.elements.name.value
  // obj.skin_color = form.elements.skin_color.value

  console.log(obj);
});
