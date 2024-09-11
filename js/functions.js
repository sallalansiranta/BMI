'use strict'

const calculateBMI = () => {
  const heightInCm = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;

  if (heightInCm && weight) {
    const heightInMeters = heightInCm / 100;  // Muutetaan senttimetrit metreiksi
    const bmi = weight / (heightInMeters * heightInMeters);
    document.querySelector('#bmi').innerHTML = bmi.toFixed(2);
  } else {
    document.querySelector('#bmi').innerHTML = 'Please enter valid height and weight';
  }
};

document.querySelector('#calculate-btn').addEventListener('click', calculateBMI);
