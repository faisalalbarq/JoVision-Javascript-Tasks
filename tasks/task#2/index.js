document.getElementById("SumArray").addEventListener("click", function () {
  const sum = [];
  var sumOfArray = 0;
  for (var i = 1; i <= 100; i++) {
    sum.push(i);
    sumOfArray += i;
  }

  console.log("Sum from 1 to 100 is:", sumOfArray);
});
