// Is Adult
const age = 30;
function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log(isAdult(age));

// Student Score
const student1Score = 88;
function didStudentPass(score) {
  if (score > 70) {
    return true;
  } else {
    return false;
  }
}
console.log(didStudentPass(student1Score));

// Grade Calculator
const student2Score = 35;
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

// Season
const season = 'winter';
function seasonMessenger(season) {
  if (season === 'summer') {
    return 'its hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'its cold today';
  } else {
    return 'please enter a valid season';
  }
}
console.log(seasonMessenger(season));

// Days of the Week
const daysOfTheWeek = 'Friday';
function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend!';
  } else {
    return 'Its a weekday';
  }
}
console.log(dayDetector(daysOfTheWeek));
