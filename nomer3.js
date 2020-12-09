BMI = (beratBadan, tinggiBadan) => {
    return beratBadan / (tinggiBadan ** 2)
}

let total = BMI(90, 1.7);

var hasil
if (total < 18.5) {
    console.log("Kekurangan berat badan");
} else if (total >= 18.5 && total <= 24.9) {
    console.log("Normal (Ideal)");
} else if (total >= 25 && total <= 29.9) {
    console.log("Kelebihan berat badan");
} else {
    console.log("Kegemukan Obesitas");
}