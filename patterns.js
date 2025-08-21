// 1.
// ****
// ****
// ****
// ****
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + "*";
  }
  //   console.log(row);
}

// 2.
// *
// **
// ***
// ****
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }
  // console.log(row);
}

//3.
// 1
// 12
// 123
// 1234
// 12345
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (j + 1);
  }
  // console.log(row);
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j <i; j++) {
    console.log(i, j);
  }
}
// 1 0
// 2 0
// 2 1
