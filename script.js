document.body.style.padding = "0px";
document.body.style.margin = "0px";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column-reverse";
document.body.style.alignItems = "center";
document.body.style.gap = "10px";

const container = document.querySelector("#container");

container.style.display = "flex";
container.style.width = "550px";
container.style.flexWrap = "wrap";

const newGridBtn = document.createElement("button");
newGridBtn.textContent = "Create New Grid";
newGridBtn.classList.add("primary-button");
newGridBtn.style.color = "white";
newGridBtn.style.backgroundColor = "#f54275";
newGridBtn.style.border = "none";
newGridBtn.style.padding = "10px";
newGridBtn.style.borderRadius = "10px";
newGridBtn.style.cursor = "pointer";

document.body.appendChild(newGridBtn);

function createSquareDiv() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.height = "30px";
  square.style.width = "30px";
  square.style.backgroundColor = "#e4e8f0";
  square.style.border = "2px solid white";
  square.style.cursor = "pointer";

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "grey";
  });

  container.appendChild(square);
}
function createGrid(numOfSqaures = 16) {
  for (let i = 1; i <= numOfSqaures ** 2; i++) {
    createSquareDiv();
  }
}
createGrid();
function numOfGridSquares() {
  const newGridSquares = parseInt(
    prompt(
      "Enter the number of squres needed per side on your new grid (ex:- 16 for 16 x 16)?"
    )
  );
  return newGridSquares;
}
newGridBtn.addEventListener("click", () => {
  numOfGridSquares();
});
