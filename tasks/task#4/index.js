// Task 4, A
document.getElementById("button1").addEventListener("click", function () {
  let array = [];
  for (var i = 1; i <= 100; i++) {
    if (!(i % 3 == 0)) array.push(i);
  }

  console.log("Numbers from the array that are NOT divisible by 3: ", array);
});



// Task 4, B
document.getElementById("button2").addEventListener("click", function () {
  let array = [];
  for (var i = 0; i < 100; i++) {
    array.push(i);
  }

  for (var i = 100; i < 150; i++) {
    array.push(i);
  }

  console.log("Final Array Including numbers from 0 to 150: ", array);
});



// Task 4, C
document.getElementById("button3").addEventListener("click", function () {
  let array = [];
  for (var i = 0; i < 300; i+= 3) {
    array.push(i);
  }


  console.log("Generated Array From 1 to 100 with adds 3 foreach element ", array);
});



// Task 4, D
document.getElementById("button4").addEventListener("click", function () {
  let array = [];
  for (var i = 0; i < 100; i++) {
    array.push(i);
  }

  console.log("Print The numbers from index 20 to 40");
  for (let i = 20; i < 40; i++) {
    console.log(array[i]);
  }
});




// Task 4, E
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.getElementById("button5").addEventListener("click", function () {
  const array = [];
  for (let i = 0; i <= 100; i++) {
    array.push(i);
  }

  shuffleArray(array);
  console.log("🔀 Shuffled array:", array);

  // Sort descending
  array.sort((a, b) => b - a);
  console.log("Sorted array (descending):", array);
});

