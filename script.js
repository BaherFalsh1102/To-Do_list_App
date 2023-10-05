const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Error: You Should Add Something!!");
  } else {
    // Create list element = input box value
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    // Create cross icon at the end of each task to remove this task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

//  Create a function to:
//  checked element that i have finish if i click on li
//  delete a list if i click on span

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Create a fucntion to save a data that i have write into list Element

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Create a fucntion to show a data that stored in local storage
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
