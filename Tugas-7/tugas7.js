//soal 1
//release 0
class Animal {
    constructor (name,legs, cold_blooded) {
      this._name = name
      this._legs = 4
      this._cold_blooded = false
    }
    get name () {
    return this._name;
  }
    set nama (x) {
    return this._name = x;
  }
    get legs () {
    return this._legs;
  }
    set legs (x) {
    return this._legs = x;
  }
    get cold_blooded () {
    return this._cold_blooded;
  }
    set cold_blooded (x) {
    return this._cold_blooded = x;
  }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//release 1
class Ape extends Animal {
    constructor (name,legs,_cold_blooded) {
      super(name,legs,_cold_blooded)
      this._legs = 2
    }
    yell() {
    return "Auooo";
  } 
  }
  
  var sungokong = new Ape("kera sakti")
  console.log(sungokong.name)
  console.log(sungokong.legs)
  console.log(sungokong._cold_blooded)
  console.log(sungokong.yell());
  
  class Frog extends Animal {
    constructor (name,legs,_cold_blooded) {
      super(name,legs,_cold_blooded)
      this._cold_blooded = true
    }
    jump() {
    return "hop hop";
  } 
  } 
  var kodok = new Frog("buduk")
  console.log(kodok.name)
  console.log(kodok.legs)
  console.log(kodok._cold_blooded)
  console.log(kodok.jump())

  //Soal 2
  class Clock{
    constructor({ template }) {
    this._template = template
    this.timer
    }
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this._template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(timer);
    };
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    };
  
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();