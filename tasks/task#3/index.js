document.getElementById("SumArray").addEventListener("click", function () {
  const sum = [];
  var sumOfArray = 0;
  for (var i = 1; i <= 100; i++) {
    sum.push(i);
    if (!(i & 1)) sumOfArray += i;
  }

  console.log(`Sum of even numbers from 1 to 100 is: ${sumOfArray}`);
});
