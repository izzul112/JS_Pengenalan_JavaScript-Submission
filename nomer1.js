
luasTanah = (p, l) => {
    return (p * l)
}
console.log("luas tanah " +luasTanah(30, 20.5));

hargaTanah = (luasTanah, harga) => {
    return (luasTanah * harga)
}
console.log("harga awal "+hargaTanah(615, 1500000));

ppn = (hargaTanah, n) => {
    return (hargaTanah / n) + hargaTanah
}
console.log("Harga tanah setelah kena pajak " +ppn(922500000, 15));


