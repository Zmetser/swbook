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
        <td> <button class="deleteButton"> Delete </button> </td>
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

const closeModal = function (event) {
  modalDivElement.classList.remove("open");
  modalDivElement.classList.add("closing");
  modalDivElement.addEventListener("transitionend", () => {
    modalDivElement.classList.remove("closing");
  });
};

modalCloseElement.addEventListener("click", closeModal);

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

  //for (let i = 0; i < form.elements.length; i++) {
  //const value = form.elements[i].value; // Luke Skywalker, blond, 55
  //const name = form.elements[i].name; // hair_color, mass

  //obj[name] = value;
  //}

  // Tombbe alakitas
  // nemtomb {0: ertek0, 1: ertek1, ...}
  // Array.from(nemtomb), [...nemtom]
  // Object.keys(nemtomb) [0,1,2,3...]
  // Object.values(nemtomb) [ertek0, ertek1...]
  // Object.entries(nemtomb) [[0, ertek0], [1, ertek1]]

  Array.from(form.elements).forEach((input) => {
    // if (value != "")
    const value = input.value;
    const name = input.name;
    if (value !== "") {
      obj[name] = value;
    }
  });

  window.swbook.push(obj);

  // document.forms[0].elements.toArray()

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
  newObj(obj);
  closeModal();
});

const newObj = function (obj) {
  const newName = obj.name;
  const newGender = obj.gender;

  tBody.innerHTML += `
  <tr>
  <td>${newName}</td>
  <td><strong>${newGender}</strong></td>
  </tr>`;
};

let deleteButtons = document.querySelectorAll(".deleteButton");
let tableRows55 = tBody.querySelectorAll("tr");

for (let j = 0; j < deleteButtons.length; j++) {
  deleteButtons[j].addEventListener("click", () => {
    tableRows55[j].style.backgroundColor = "red";
    function removeThis() {
      tableRows55[j].remove();
    }

    setTimeout(removeThis, 1000);
  });
}
