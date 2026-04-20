class ArxitektorDasturchi {
  constructor() {
    this.tajriba = {
      Google: true,
      Meta: true
    };
  }

  isTajriba(tajriba) {
    return this.tajriba[tajriba];
  }
}

class Arxitektor {
  constructor() {
    this.shartlar = [
      {
        Google: true,
        Meta: true
      }
    ];
  }

  isShartlar(shartlar) {
    return this.shartlar[0] === shartlar;
  }
}

class Kod {
  constructor() {
    this.til = "javascript";
    this.mavzu = "masala";
    this.daraja = "easy";
  }

  isTil(til) {
    return this.til === til;
  }

  isMavzu(mavzu) {
    return this.mavzu === mavzu;
  }

  isDaraja(daraja) {
    return this.daraja === daraja;
  }
}

class Masala {
  constructor() {
    this.shartlar = [
      {
        Google: true,
        Meta: true
      }
    ];
    this.til = "javascript";
    this.mavzu = "masala";
    this.daraja = "easy";
  }

  isShartlar(shartlar) {
    return this.shartlar[0] === shartlar;
  }

  isTil(til) {
    return this.til === til;
  }

  isMavzu(mavzu) {
    return this.mavzu === mavzu;
  }

  isDaraja(daraja) {
    return this.daraja === daraja;
  }
}

class Ro'yxat {
  constructor() {
    this.masalalar = [
      {
        shartlar: {
          Google: true,
          Meta: true
        },
        til: "javascript",
        mavzu: "masala",
        daraja: "easy"
      }
    ];
  }

  addMasala(masala) {
    this.masalalar.push(masala);
  }

  getMasalalar() {
    return this.masalalar;
  }
}

class YonaltirilganRo'yxat {
  constructor() {
    this.masalalar = [
      {
        shartlar: {
          Google: true,
          Meta: true
        },
        til: "javascript",
        mavzu: "masala",
        daraja: "easy"
      }
    ];
  }

  addMasala(masala) {
    this.masalalar.push(masala);
  }

  getMasalalar() {
    return this.masalalar;
  }

  getMavzuMavzulari(mavzu) {
    return this.masalalar.filter(masala => masala.mavzu === mavzu);
  }

  getDarajaMavzulari(daraja) {
    return this.masalalar.filter(masala => masala.daraja === daraja);
  }
}

const arxitektorDasturchi = new ArxitektorDasturchi();
const arxitektor = new Arxitektor();
const kod = new Kod();
const masala = new Masala();
const ro'yxat = new Ro'yxat();
const yonaltirilganRo'yxat = new YonaltirilganRo'yxat();

console.log(arxitektorDasturchi.isTajriba("Google")); // true
console.log(arxitektorDasturchi.isTajriba("Meta")); // true

console.log(arxitektor.isShartlar({ Google: true, Meta: true })); // true

console.log(kod.isTil("javascript")); // true
console.log(kod.isMavzu("masala")); // true
console.log(kod.isDaraja("easy")); // true

console.log(masala.isShartlar({ Google: true, Meta: true })); // true
console.log(masala.isTil("javascript")); // true
console.log(masala.isMavzu("masala")); // true
console.log(masala.isDaraja("easy")); // true

ro'yxat.addMasala({
  shartlar: {
    Google: true,
    Meta: true
  },
  til: "javascript",
  mavzu: "masala",
  daraja: "easy"
});

console.log(ro'yxat.getMasalalar()); // [{...}]

yonaltirilganRo'yxat.addMasala({
  shartlar: {
    Google: true,
    Meta: true
  },
  til: "javascript",
  mavzu: "masala",
  daraja: "easy"
});

console.log(yonaltirilganRo'yxat.getMasalalar()); // [{...}]
console.log(yonaltirilganRo'yxat.getMavzuMavzulari("masala")); // [{...}]
console.log(yonaltirilganRo'yxat.getDarajaMavzulari("easy")); // [{...}]
