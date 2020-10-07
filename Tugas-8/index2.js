//soal 2
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

readBooksPromise(10000,books[0]).then(
    item1 =>{
      readBooksPromise(item1,books[1]).then(
        item2 => {
          readBooksPromise(item2,books[2]).then(
            item3 => {
              readBooksPromise(item3,books[3]).then(item4 =>{
              console.log(item4);
            }
            )
          }
        )
      }
    )
  })
