class Lingkaran {
    constructor(r) {
        this.jari_jari = r
    }

    luas = () => {
        return 3.14 * this.jari_jari * this.jari_jari
    }

    keliling = () => {
        return 3.14 * 2 * this.jari_jari
    }
}

class Bola extends Lingkaran {
    constructor(r) {
        super(r)
    }

    volume = () => {
        return 3/4 * 3.14 * this.jari_jari * this.jari_jari * this.jari_jari
    }

    luasPermukaan = () => {
        return 4 * 3.14 * this.jari_jari * this.jari_jari
    }

}

class Kerucut extends Lingkaran {
    constructor(r, t, s) {
        super(r)
        this.tinggi = t
        this.sisiMiring = s
    }

    volume = () => {
        return 1/3 * 3.14 * this.jari_jari * this.jari_jari * this.tinggi
    }

    luasPermukaan = () => {
        return 3.14 * this.jari_jari * (this.jari_jari + this.sisiMiring)
    }

    luasSelimut = () => {
        return 3.14 * this.jari_jari * this.sisiMiring
    }
}

class Tabung extends Lingkaran {
    constructor(r, t) {
        super(r)
        this.tinggi = t
    }

    volume = () => {
        return 3.14 * this.jari_jari * this.jari_jari * this.tinggi
    }

    luasPermukaan = () => {
        return 2 * 3.14 * this.jari_jari * (this.jari_jari + this.tinggi)
    }

    luasSelimut = () => {
        return 2 * 3.14 * this.jari_jari * this.tinggi
    }
    
}