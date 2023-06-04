// Declaration of the Adjacency-List
const graph = {};
// Declaration of Graph-Matrix and Size
const graphMatrix = [];
const matrixSize = 15;

// Setting the Graph-width w.r.t window width
if (matrixSize * 21 < $(window).width()) {
  var width = matrixSize * 21;
}
else {
  var width = $(window).width();
}
$(".graph-container").width(width);

//Filling the Graph-Matrix with Natural Numbers
//w.r.t to the Matrix size provided
var num = 0;
for (var i = 0; i < matrixSize; i++) {
  var row = [];
  for (var j = 0; j < matrixSize; j++) {
    row.push(++num);
    let node = '<div class="node" id="' + num + '"></div>';
    $(".graph-container").append(node);
  }
  graphMatrix.push(row);
}

// Function to Find and Add adjacent Nodes
function addNode(row, col) {
  let temp = [];
  // top
  if (row != 0 && graphMatrix[row - 1][col] != null)
    temp.push(graphMatrix[row - 1][col]);
  // right
  if (col != matrixSize - 1 && graphMatrix[row][col + 1] != null)
    temp.push(graphMatrix[row][col + 1]);
  // bottom
  if (row != matrixSize - 1 && graphMatrix[row + 1][col] != null)
    temp.push(graphMatrix[row + 1][col]);
  // left
  if (col != 0 && graphMatrix[row][col - 1] != null)
    temp.push(graphMatrix[row][col - 1]);

  let current = graphMatrix[row][col];
  graph[current] = temp;
}

// Filling the Adjacency-List with the Matrix as Structural reference
for (let row = 0; row < matrixSize; row++)
  for (let col = 0; col < matrixSize; col++) addNode(row, col);

// Declaring the Input stucture - Starting and Ending Node
let input = {
  src: null,
  dest: null,
};

// test-code
// for (var i = 1; i <= matrixSize * matrixSize; i++) {
//   var value = "#" + String(i);
//   $(value).html(i);
// }

// Getting input from Mouse-Click
addEventListener("click", function (event) {
  var target = event.target;
  if (input.src === null && target.classList.contains("node")) {
    target.style.backgroundColor = "#2E1258";
    input.src = parseInt(target.id);
    console.log(input);
  } else if (
    input.dest === null &&
    target.classList.contains("node") &&
    target.id != input.src
  ) {
    target.style.backgroundColor = "#DFEBED";
    input.dest = parseInt(target.id);
    console.log(input);
  }
});

// Animation during the traversal
let searchAnimation = {
  "background-color": "#7045AF",
}