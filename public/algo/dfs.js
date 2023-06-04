$("#dfs").click(function () {
  const speedInput = 210 - $("#speedInput").val();
  console.log("Speed: " + speedInput);

  let stack = [];
  const visited = new Set();

  var animationDelay = 0;
  var animationSpeed = speedInput;
  stack.push(parseInt(input.src));

  while (stack.length > 0) {
    var currentNode = stack.pop();
    visited.add(currentNode);
    console.log(currentNode);

    if (currentNode == parseInt(input.dest)) return;

    if (currentNode != input.src) {
      var value = "#" + String(currentNode);
      $(value).stop(true, true).delay(animationDelay).animate(searchAnimation, 50);
      animationDelay += animationSpeed;
    }

    for (var i of graph[currentNode]) {
      if (visited.has(i) === false) {
        stack.push(i);
      }
    }
  }
});
