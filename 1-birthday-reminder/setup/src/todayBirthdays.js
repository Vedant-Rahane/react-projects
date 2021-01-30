import data from "./data";

var todayData = [];

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

// data.forEach((person) => {
//   const { date } = person;

//   if (
//     parseInt(date.substring(3, 5)) === currentDate &&
//     parseInt(date.substring(0, 2)) === currentMonth + 1
//   ) {
//     todayData.push(person);
//   }
// });

todayData = data.filter((person, index) => {
  const { date } = person;
  return (
    parseInt(date.substring(3, 5)) === currentDate &&
    parseInt(date.substring(0, 2)) === currentMonth + 1
  );
});

console.log(todayData);

export default todayData;
