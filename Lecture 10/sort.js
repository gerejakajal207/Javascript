let data = [
  { name: "John", marks: 5 },
  { name: "Abc", marks: 45 },
  { name: "Pqr", marks: 60 },
  { name: "Foo", marks: 50 },
];
data.sort((a, b) => a.marks - b.marks);
console.log(data);

// if a.marks-b.marks gives +ve -> sort
// if a.marks-b.marks gives -ve or 0 -> do not swap
// +ve means 1st is greater than 2nd
// -ve means 2nd is greater than 1st
// 0 means same
