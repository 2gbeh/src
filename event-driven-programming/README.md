# Event-Driven Programming

![JavaScript](https://img.shields.io/badge/JavaScript-ES2017-F7DF1E.svg)

> [Open JavaScript Online Interpreter](https://onecompiler.com/javascript)

## Section 1 > JavaScript Fundamentals > Variables & Constants

#### Example 1

```js
// TODO: Compute Student Grade
var score = 47;
const total = 60;
const grade = (score * 100) / total; // 78.33%
const passed = score >= total / 2; // true
const remarks = passed ? "Pass" : "Fail";

console.log(grade, passed, remarks);
```

#### Example 2

```js
// TODO: Compute Person Age
var birthYear = 1952; // BAT
const thisYear = new Date().getFullYear(); // 2026
const age = thisYear - birthYear; // 74
const canVote = age >= 18 ? "Sure" : "Nope";

console.log(thisYear, age, canVote);
```

## ## Section 1 > JavaScript Fundamentals > Data Types

#### Example 1

```js
// TODO: Process Jamb Scores
const jambScores = [56, 42, 55, 60]; // ENG, MAT, PHY, ECO
var size = jambScores.length; // 4
var english = jambScores[0]; // 56
var economics = jambScores[size - 1]; // 60

var scored_56 = jambScores.includes(56); // false
var scored_76 = jambScores.includes(76); // true
var removedLastValue = jambScores.pop(); // [56, 42, 55], 60
var newArraySize = jambScores.push(55); // [56, 42, 55, 55], 4
var removedFirstValue = jambScores.shift(); // [42, 55, 55], 56
var newArraySize = jambScores.unshift(76); // [76, 42, 55, 55], 4

var sortedScoresAsc = jambScores.toSorted((a, b) => a - b); // [42, 55, 55, 76];
var sortedScoresDesc = jambScores.toSorted((a, b) => b - a); // [76, 55, 55, 42];
var totalScore = jambScores.reduce((total, value) => total + value, 0); // 228

var minScore = Math.min(...jambScores); // 42
var maxScore = Math.max(...jambScores); // 76

var verifyDatatype = Array.isArray(jambScores); // true

console.log(jambScores, totalScore, sortedScoresAsc, sortedScoresDesc);
```

#### Example 2

```js
// TODO: Process Jamb Scores
const jambScores = { ENG: 56, MAT: 42, PHY: 55, ECO: 60 };
var size = Object.keys(jambScores).length; // 4
var english = jambScores["ENG"]; // 56 (index-notation)
var economics = jambScores.ECO; // 60 (dot-notation preferred)

jambScores.PHY = 71; // {ENG: 56, MAT: 42, PHY: 71, ECO: 60}
jambScores.CHE = 35; // {ENG: 56, MAT: 42, PHY: 71, ECO: 60, CHE: 35}
delete jambScores.CHE; // {ENG: 56, MAT: 42, PHY: 71, ECO: 60}

var wroteChemistry = Object.keys(jambScores).includes("CHE"); // god forbid!
var scored_56 = Object.values(jambScores).includes(56); // true
var totalScore = Object.values(jambScores).reduce(
  (total, value) => total + value,
  0
); // 229
var minScore = Math.min(...Object.values(jambScores)); // 42
var maxScore = Math.max(...Object.values(jambScores)); // 71
var verifyDatatype = typeof jambScores === "object"; // true

console.log(jambScores, totalScore, wroteChemistry, verifyDatatype);
```

#### Example 3

```js
// TODO: Format datetime as Sun, 8 Jul 2026 | 10:00 AM
const dateObj = new Date("2020-10-20 15:00:00"); // #EndSARS Protest
const dayOfWeekIndex = dateObj.getDay(); // 0-6
const dayOfMonth = dateObj.getDate(); // 1-31
const monthIndex = dateObj.getMonth(); // 0-11
const year = dateObj.getFullYear(); // 2026
const hourIndex = dateObj.getHours(); // 0-23
const minuteIndex = dateObj.getMinutes(); // 0-59

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const meridiem = hourIndex < 12 ? "AM" : "PM";
const hours_f = hourIndex % 12 || 12; // 1-12
const minutes_f = minuteIndex.toString().padStart(2, "0"); // 00-59
const date_f = `${days[dayOfWeekIndex]}, ${dayOfMonth} ${months[monthIndex]} ${year}`;
const time_f = `${hours_f}:${minutes_f} ${meridiem}`;
const output = `${date_f} | ${time_f}`;

console.log(dateObj.toString(), output);
```
