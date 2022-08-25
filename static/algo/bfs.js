function bfs() {
  let queue = [];
  const visited = new Set();

  var count = 0;
  queue.push(parseInt(input.src));
  while (queue.length > 0) {
    var currentNode = queue.shift();
    visited.add(currentNode);
    console.log(visited);

    var value = "#" + String(currentNode);
    $(value)
      .stop(true, false)
      .delay(200 + count)
      .animate(visitingAnimation, 200);
    console.log(count);
    if (count < 100) count += 3;

    if (currentNode == parseInt(input.dest)) return;

    for (var i of graph[currentNode]) {
      if (visited.has(i) === false) {
        queue.push(i);
      }
    }
  }
}
