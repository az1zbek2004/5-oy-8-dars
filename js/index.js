// 1-topshiriq
const price = [10.99, 5.45, 23.00, 7.86];

// // first and last
// [a,,,b] = price;
// console.log(a, b);

// 2
// [a, b, c, d] = price;
// let data = [];
// data.push(b);
// data.push(a);
// data.push(c);
// data.push(d);
// console.log(data);

// 3
// let data = [];
// [a, b, c, d] = price;
// b*=2;
// c*=2;
// data.push(b);
// data.push(c);
// console.log(data);

// 2-misol

const movie1 = {
    title:"The Matrix",
    director:"The Wachowskis",
    year:1999,
};

const movie2 = {
    genre:"Science fiction",
    cast:["Keanu Reeves", "Laurence Fishburne", "Carri-Anne Moss"],
};

// 1
// let {title, director, year} = movie1;
// let {genre, cast} = movie2;

// let movie = {};
// movie.title = title;
// movie.director = director;
// movie.year = year;
// movie.genre = genre;
// movie.cast = cast;

// console.log(movie);

// 2
// let movie = {
//     title: 'The Matrix',
//     director: 'The Wachowskis',
//     year: 1999,
//     genre: 'Science fiction',
//     cast: [ 'Keanu Reeves', 'Laurence Fishburne', 'Carri-Anne Moss' ]
//   };



//   let {title, director, year, genre, cast} = movie;
//   let movie1 = {
//     title:movie.title,
//     director:movie.director,
//     year:movie.year,
//   };
//   let movie2 = {
//     genre:movie.genre,
//     cast:movie.cast,
//   };

//   console.log(movie1);
//   console.log(movie2);

// 3
// function Destructring(arg1, arg2) {
// let {title, director, year} = arg1;
// let {genre, cast} = arg2;

// let movie = {};
// movie.title = title;
// movie.director = director;
// movie.year = year;
// movie.genre = genre;
// movie.cast = cast;

// return movie;
// };
// console.log(Destructring(movie1, movie2));


// 2-topshiriq
// 1
// let retcept = ["sole", "potato", "tomato"];

// [...res] = retcept;
// res.push("rice");
// res.push("carrot");
// let newRetcept = res;
// console.log(newRetcept);

// 2
// let user1 = {
//     Name:"Abbos",
//     age:24,
//     country:"UZB"
// };

// let {...res} = user1;
// let user2 = res;

// console.log(user2);

// 3
// let userData1 = {
//     image:"picture",
//     firstName:"Shavkatjon",
//     lastName:"Isroilov",
// };

// let userData2 = {
//     userName:"shavkat1995",
//     phoneNumber:"+998881234567",
// };

// function user(...arg){
//   return arg;
// };

// let {...res} = userData2;

// let arr = user(userData1);
// arr.push(res);
// console.log(arr);

// 4
// let mass = [1, 3, 5, 2, 9, 4];

// [...res] = mass;

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }

//     return arr;
// }

// console.log(insertionSort(res));

// 5
// Savollar ingliz tilida bo'lganligi tufayli translate o'zbekchaga juda xunuk tarjima qilyapti

// CLASS

// MAP AND SET
MAP
let shoppingCartPrice = new Map();
shoppingCartPrice.set("1", 15000);
shoppingCartPrice.set("2", 13000);
shoppingCartPrice.set("3", 20000);
shoppingCartPrice.set("4", 17000);
shoppingCartPrice.set("5", 8000);
shoppingCartPrice.set("6", 33000);

let shoppingCartCount = new Map();
shoppingCartCount.set("1", 20);
shoppingCartCount.set("2", 10);
shoppingCartCount.set("3", 5);
shoppingCartCount.set("4", 10);
shoppingCartCount.set("5", 6);
shoppingCartCount.set("6", 7);

shoppingCartPrice.delete("4");
shoppingCartCount.delete("4");
let generalPrice = shoppingCartPrice.get("1")*shoppingCartCount.get("1")+shoppingCartPrice.get("2")*shoppingCartCount.get("2")+shoppingCartPrice.get("3")*shoppingCartCount.get("3")+shoppingCartPrice.get("5")*shoppingCartCount.get("5")+shoppingCartPrice.get("6")*shoppingCartCount.get("6");


console.log(generalPrice);

