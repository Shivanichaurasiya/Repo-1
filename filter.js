let student = [
  { id: 1, name: "rohan", sports: "cricket" },
  { id: 2, name: "mohan", sports: "football" },
  { id: 3, name: "sohan", sports: "hockey" },
  { id: 4, name: "alice", sports: "basketball" },
  { id: 5, name: "jack", sports: "chess" },
];

console.log(student);

const newArr = student.filter((currValue) => {
  if (currValue.id % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(newArr);
