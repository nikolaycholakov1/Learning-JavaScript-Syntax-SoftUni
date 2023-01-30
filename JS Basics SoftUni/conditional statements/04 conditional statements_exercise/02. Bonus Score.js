function bonusPoints(input) {
  let number = Number(input[0]);

  let bonus = 0.0;

  if (number <= 100) {
    bonus = 5;
  } else if (number < 1000) {
    bonus = number * 0.2;
  } else {
    bonus = number * 0.1;
  }

  if (number % 2 == 0) {
    bonus += 1;
  } else if (number[-1] == 5) {
    bonus += 2;
  }

  console.log(bonus);
  console.log(number + bonus);
}

bonusPoints(["20"]);
bonusPoints(["175"]);
bonusPoints(["2703"]);
bonusPoints(["15875"]);