$("#bfs").click(function () {
  const speedInput = 210 - $("#speedInput").val();
  console.log(speedInput);

  let queue = [];
  const visited = new Set();

  var animationDelay = 0;
  var animationSpeed = speedInput;
  queue.push(parseInt(input.src));

  while (queue.length > 0) {
    var currentNode = queue.shift();
    visited.add(currentNode);
    console.log(currentNode);

    if (currentNode == parseInt(input.dest)) return;

    if (currentNode != input.src) {
      var value = "#" + String(currentNode);
      $(value).stop(true, true).delay(animationDelay).animate(searchAnimation, 200);
      animationDelay += animationSpeed;
    }

    for (var i of graph[currentNode]) {
      if (visited.has(i) === false && notInQueue(i, queue)) {
        queue.push(i);
      }
    }
  }
});

function notInQueue(element, queue) {
  for (var n of queue) if (element == n) return false;
  return true;
}
