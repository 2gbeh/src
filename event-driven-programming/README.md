# Event-Driven Programming

![JavaScript](https://img.shields.io/badge/JavaScript-ES2017-F7DF1E.svg)

> [Open JavaScript Online Interpreter](https://onecompiler.com/javascript)

## Section 1 > JavaScript Fundamentals > 1.1 Variables & Constants

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
const canVote = age >= 18; // true
const remarks = canVote ? "Get Your PVC!" : "Pray For Nigeria!";

console.log(thisYear, age, canVote, remarks);
```

## Section 1 > JavaScript Fundamentals > 1.2 Data Types

#### Array Example

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

#### Object Example

```js
// TODO: Process Jamb Scores
const jambScores = { ENG: 56, MAT: 42, PHY: 55, ECO: 60 };
var size = Object.keys(jambScores).length; // 4
var english = jambScores.ENG; // 56 (dot-notation preferred)
var economics = jambScores["ECO"]; // 60 (index-notation dynamic)

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

#### Date Example

```js
// TODO: Format datetime as Tue, 20 Oct 2020 | 3:00 PM
const dateObj = new Date("2020-10-20 15:00:00"); // #EndSARS Protest
const dayOfWeekIndex = dateObj.getDay(); // 0-6 >> Sun-Sat
const dayOfMonth = dateObj.getDate(); // 1-31
const monthIndex = dateObj.getMonth(); // 0-11 >> Jan-Dec
const year = dateObj.getFullYear(); // YYYY
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

## Section 1 > JavaScript Fundamentals > 1.4 Control Flows

### Section 1 > JavaScript Fundamentals > 1.4 Control Flows > Conditional Statements

#### "if, else" Statement

```js
// TODO: Evaluate Jamb Score
var input = prompt("Enter Jamb Score:");
input = parseInt(input);

if (input >= 200) {
  alert("Passed!");
} else {
  alert("Failed!");
}
```

#### "else if" Statement

```js
// TODO: Evaluate CGPA
var input = prompt("Enter CGPA:");
input = parseFloat(input);

if (input >= 4.5 && input <= 5) {
  alert("First Class!");
} else if (input >= 3.5 && input <= 4.49) {
  alert("Second Class Upper!");
} else if (input >= 2.5 && input <= 3.49) {
  alert("Second Class Lower!");
} else if (input >= 1.5 && input <= 2.49) {
  alert("Third Class!");
} else if (input >= 1 && input <= 1.49) {
  alert("Pass!");
} else {
  alert("Haba!");
}
```

#### "switch" Statement

```js
// TODO: Language Translator
var input = prompt("Enter time of day:");
input = input.trim().toLowerCase();

switch (input) {
  case "morning":
    alert("Ẹ káàárọ̀!");
    break;
  case "afternoon":
    alert("Ẹ káàsán!");
    break;
  case "evening":
    alert("Ẹ kúùrọ̀lẹ́!");
    break;
  case "night":
    alert("Ẹ káalẹ́!");
    break;
  default: // Good day
    alert("Ẹ kú ọjọ́ rere!");
}
```

### Section 1 > JavaScript Fundamentals > 1.4 Control Flows > Repetitive Statements

#### "for" Loop

```js
// TODO: Compute Even & Odd Numbers
const even = [];
const odd = [];

for (let i = 1; i <= 10; i++) {
  i % 2 ? odd.push(i) : even.push(i);
}

console.log(even.toString()); // 2,4,6,8,10
console.log(odd.toString()); // 1,3,5,7,9
```

#### "for in/of" Loop

```js
// TODO: Iterate Array Indices & Elements
const jambScores = [56, 42, 55, 55];

for (let index in jambScores) {
  console.log(index); // 0,1,2,3
}

for (let element of jambScores) {
  console.log(element); // 56,42,55,55
}
```

#### "while" Loop

```js
// TODO: Compute Even & Odd Numbers
const even = [];
const odd = [];

let i = 1;
while (i <= 10) {
  i % 2 ? odd.push(i) : even.push(i);
  i++;
}

console.log(even.toString()); // 2,4,6,8,10
console.log(odd.toString()); // 1,3,5,7,9
```

#### "do, while" Loop

```js
// TODO: Compute Even & Odd Numbers
const even = [];
const odd = [];

let i = 1;
do {
  i % 2 ? odd.push(i) : even.push(i);
  i++;
} while (i <= 10);

console.log(even.toString()); // 2,4,6,8,10
console.log(odd.toString()); // 1,3,5,7,9
```

## Section 1 > JavaScript Fundamentals > 1.5 Functions

#### Example 1

```js
// TODO: Format Date
function formatDate(dateParam) {
  const dateObj = dateParam ? new Date(dateParam) : new Date();
  const dayOfWeekIndex = dateObj.getDay(); // 0-6 >> Sun-Sat
  const dayOfMonth = dateObj.getDate(); // 1-31
  const monthIndex = dateObj.getMonth(); // 0-11  >> Jan-Dec
  const year = dateObj.getFullYear(); // YYYY

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

  return `${days[dayOfWeekIndex]}, ${dayOfMonth} ${months[monthIndex]} ${year}`;
}

const today = formatDate(); // Wed, 8 Jul 2026
const endSars = formatDate("2020-10-20"); // Tue, 20 Oct 2020
console.log(today, endSars);
```

#### Example 2

```js
// TODO: Format Time
function formatTime(timeParam) {
  const dateObj = timeParam ? new Date(timeParam) : new Date();
  const hourIndex = dateObj.getHours(); // 0-23
  const minuteIndex = dateObj.getMinutes(); // 0-59

  const meridiem = hourIndex < 12 ? "AM" : "PM";
  const hoursText = hourIndex % 12 || 12; // 1-12
  const minutesText = minuteIndex.toString().padStart(2, "0"); // 00-59

  return `${hoursText}:${minutesText} ${meridiem}`;
}

const systemTime = formatTime(); // 10:00 AM
const userTime = formatTime("1992-09-15 15:09:00"); // 3:09 PM
console.log(systemTime, userTime);
```

#### Example 3

```js
// TODO: Format Number
function formatNumber(val = 0, as = "default") {
  var output = "";

  switch (as) {
    case "currency":
      var locales = "en-NG";
      var options = {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
      };
      output = Intl.NumberFormat(locales, options).format(val);
      break;
    case "social":
      var locales = "en";
      var options = {
        notation: "compact",
      };
      output = Intl.NumberFormat(locales, options).format(val);
      break;
    default:
      output = val.toLocaleString();
  }

  return output;
}

console.log(formatNumber(1759)); // 1,759
console.log(formatNumber(1759, "currency")); // ₦1,759.00
console.log(formatNumber(1759, "social")); // 1.8k
```

## Section 1 > JavaScript Fundamentals > 1.6 Classes (OOP)

#### Example 1

```js
// TODO: Model Person Entity
class Student {
  constructor(record) {
    this.surname = record?.surname || "";
    this.otherNames = record?.otherNames || "";
    this.gender = record?.gender || "";
    this.matricNumber = record?.matricNumber || "";
  }

  get fullName() {
    return `${this.surname}, ${this.otherNames}`;
  }

  registerCourse(courseCode) {}
  checkResult(courseCode) {}
}

const record = {
  surname: "Akinyuwa",
  otherNames: "Susan Busola",
  gender: "Female",
  matricNumber: "IPH/2018/001",
};

const student = new Student(record);
console.log(student.fullName);
// Akinyuwa, Susan Busola
```

#### Example 2

```js
// TODO: Model Animal Entity
class Fish {
  constructor(records = []) {
    this.collection = records;
  }

  get report() {
    var totalOrders = this.collection.length;
    totalOrders = `Orders Fulfilled: ${totalOrders}`;

    const fn = (tot, val) => tot + val.price * val.qty;
    var totalSales = this.collection.reduce(fn, 0);
    totalSales = totalSales.toLocaleString();

    return `${totalOrders} | Total Sales: N${totalSales}`;
  }

  add(type, price, qty = 1) {
    this.collection.push({ type, price, qty });
  }

  remove(fishId) {
    const index = fishId - 1;
    this.collection.splice(index, 1);
  }
}

const fish = new Fish();
fish.add("Titus/Mackerel", 4500);
fish.add("Catfish", 3000);
fish.add("Stockfish/Okporoko", 250, 4); // 1k
fish.add("Dried Asa Fish", 3000);
fish.add("Smoked Catfish", 5000);
fish.remove(3);

console.log(fish.report);
// Orders Fulfilled: 4 | Total Sales: N15,500
```

#### Example 3

```js
// TODO: Model Place Entity
class Hotel {
  constructor(record) {
    this.name = record?.name || "";
    this.address = record?.address || "";
    this.contactInfo = record?.contactInfo || "";
    this.priceList = record?.priceList || [];
  }

  get priceRange() {
    const minPrice = Math.min(...this.priceList); // 50000
    const maxPrice = Math.max(...this.priceList);
    const minPriceText = minPrice.toLocaleString(); // 50,000
    const maxPriceText = maxPrice.toLocaleString();

    return `Between N${minPriceText} - N${maxPriceText}`;
  }

  registerGuest(guestInfo) {}
  checkIn(guestId, roomNumber) {}
  checkOut(guestId) {}
  placeOrder(guestId, orderInfo) {}
}

const record = {
  name: "Wesley Hotel",
  address: "GRA, Benin",
  contactInfo: "+2348169960927",
  priceList: [50000, 100000, 150000, 200000, 250000],
};

const hotel = new Hotel(record);
console.log(hotel.priceRange);
// Between N50,000 - N250,000
```

#### Example 4

```js
// TODO: Model Thing Entity
class POS {
  constructor(record) {
    this.cardNumber = record?.cardNumber || ""; // 16-digit
    this.expiryDate = record?.expiryDate || ""; // MM/YY
    this.cvv = record?.cvv || ""; // ***
  }

  get isValidCard() {
    const [MM, YY] = this.expiryDate.split("/");
    const expiryDateObj = new Date(`20${YY}-${MM}-01`);
    const expiryDateOK = expiryDateObj.getTime() > Date.now();
    const cardNumberOK = this.cardNumber.length === 3;
    const cvvOK = this.cvv.length === 3;

    return cardNumberOK && expiryDateOK && cvvOK;
  }

  checkBalance() {}
  transfer(accountNo, bankName, amount) {}
  withdraw(amount) {}
  confirmTransaction(pin) {}
}

const record = {
  cardNumber: "0002 3481 6996 0927",
  expiryDate: "09/26",
  cvv: "015", // Card Verification Value
};

const pos = new POS(record);
console.log(pos.isValidCard);
// true
```

#### Example 5

```js
// TODO: Format Number
class MoneyFormat {
  constructor(val = 0) {
    this.val = val;
  }

  get standard() {
    return this.val.toLocaleString();
  }

  get currency() {
    const locales = "en-NG";
    const options = {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    };
    return Intl.NumberFormat(locales, options).format(this.val);
  }

  get social() {
    const locales = "en";
    const options = {
      notation: "compact",
    };
    return Intl.NumberFormat(locales, options).format(this.val);
  }
}

const mf = new MoneyFormat(1759);
console.log(
  mf.standard, // 1,759
  mf.currency, // ₦1,759.00
  mf.social // 1.8k
);
```
