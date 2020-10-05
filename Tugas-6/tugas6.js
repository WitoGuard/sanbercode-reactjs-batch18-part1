//soal 1
const luasLingkaran = (a) => {
    return 3.14 * (a * a)
    
  } 
    let r = 14
console.log(luasLingkaran(r))
    const kelilingLingkaran= (a) => {
        return 2 * a * 3.14
        
      } 
        
console.log(kelilingLingkaran(r))

//soal 2
let kalimat = ""
const tambahKata = (kata)=> {
  let hasil = kalimat += kata;
  return hasil
}
tambahKata('saya ')
tambahKata('adalah ')
tambahKata('seorang ')
tambahKata('frontend ')
tambahKata('developer')
console.log(kalimat)

//soal 3
const newFunction = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`)
      return 
    }
  }
}
 
//Driver Code 
newFunction("William", "Imoh").fullName() 

//soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation} = newObject

console.log(firstName, lastName, destination, occupation)

//soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east];
//Driver Code
console.log(combined)