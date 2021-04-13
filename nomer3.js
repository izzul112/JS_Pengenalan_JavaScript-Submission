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

let nilai = scoreChecker(85);
  let hasil
if (nilai >= 90) {
    result = "'Selamat! Anda mendapatkan nilai A.'";
    console.log(result);
} else if (nilai >= 80 && nilai <= 89) {
    result = "'Anda mendapatkan nilai B.'";
    console.log(result);
} else if (nilai >= 70 && nilai <= 79) {
    result = "'Anda mendapatkan nilai C.'";
    console.log(result);
 } else if (nilai >= 60 && nilai <= 69) {
    result = "'Anda mendapatkan nilai D.'";
    console.log(result);
} else {
    result = "'Anda mendapatkan nilai E.'";
    console.log(result);
}
