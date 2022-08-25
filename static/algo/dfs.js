function dfs() {
  let stack = [];
  const visited = new Set();

  var count = 0;
  stack.push(parseInt(input.src));
  while (stack.length > 0) {
    var currentNode = stack.pop();
    visited.add(currentNode);
    console.log(visited);

    var value = "#" + String(currentNode);
    $(value)
      .stop(true, false)
      .delay(40 * ++count)
      .animate(visitingAnimation, 200);

    if (currentNode == parseInt(input.dest)) return;

    for (var i of graph[currentNode]) {
      if (visited.has(i) === false) {
        stack.push(i);
      }
    }
  }
}
