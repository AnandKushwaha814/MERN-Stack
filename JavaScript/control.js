let a=100;
// if (a<10) {
//     console.log("A is less than 10");
    
// }else{
//     console.log("A is greater than 10");
    
// }

// let date= new Date()
// switch (date.getMonth()) {
//     case 0:
//         console.log("Januaray");
//         break;
//     case 1:
//         console.log("Fabuary");
//         break;
//     case 2:
//         console.log("March");
//         break;
//     case 3:
//         console.log("April");
//         break;
//     case 4:
//         console.log("May");
//         break;
//     case 5:
//         console.log("June");
//         break;
//     case 6:
//         console.log("July");
//         break;
//     case 7:
//         console.log("Auguest");
//         break;
//     case 8:
//         console.log("September");
//         break;
//     case 9:
//         console.log("October");
//         break;
//     case 10:
//         console.log("November");
//         break;
//     case 11:
//         console.log("December");
//         break;
//     default:
//         break;
// }




// MAP & forof

// const map=new Map()
// map.set('In','India')
// map.set('USA','Americs')
// map.set('Fr','France')
// map.set('PAK','Pakistan')
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key ,':-', value);
    
// }


// forin

// const myObj={
//     js: 'JavaScript',
//     cpp:'C++',
//     css:'CaseCading Style Sheet',
//     html:'Hypertext markup Language',
//     db:'Database'
// }
// for (const key in myObj) {
//     console.log(key);
//     console.log(myObj[key]);
//     console.log(`${key} sortcut is for ${myObj[key]}`);
// }


// ForEach

// const myCoding=[
//     {
//         languageName:"JavaScript",
//         languageFileName:"js",
//     },
//     {
//         languageName:"Python",
//         languageFileName:"py",
//     },
//     {
//         languageName:"React",
//         languageFileName:"jsx",
//     },
//     {
//         languageName:"opps",
//         languageFileName:"c++"
//     }
// ]
// myCoding.forEach((item)=>{
//     console.log(item.languageName);
    
// })


const Books=[
    {
        "isbn":"9781593279509",
        "title":"Eloquent JavaScript, Third Edition",
        "subtitle":"A Modern Introduction to Programming",
        "author":"Marijn Haverbeke",
        "published":"2018-12-04T00:00:00.000Z",
        "publisher":"No Starch Press",
        "pages":472,
        "description":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
       
    },
    {
        "isbn":"9781491943533",
        "title":"Practical Modern JavaScript",
        "subtitle":"Dive into ES6 and the Future of JavaScript",
        "author":"Nicolás Bevacqua",
        "published":"2017-07-16T00:00:00.000Z",
        "publisher":"O'Reilly Media",
        "pages":334,
        "description":"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
        
    },
    {
        "isbn":"9781593277574",
        "title":"Understanding ECMAScript 6",
        "subtitle":"The Definitive Guide for JavaScript Developers",
        "author":"Nicholas C. Zakas",
        "published":"2016-09-03T00:00:00.000Z",
        "publisher":"No Starch Press",
        "pages":352,
        "description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        
    },
    {
        "isbn":"9781449365035",
        "title":"Speaking JavaScript",
        "subtitle":"An In-Depth Guide for Programmers",
        "author":"Axel Rauschmayer",
        "published":"2014-04-08T00:00:00.000Z",
        "publisher":"O'Reilly Media",
        "pages":460,
        "description":"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
       
    },
    {
        "isbn":"9781449331818",
        "title":"Learning JavaScript Design Patterns",
        "subtitle":"A JavaScript and jQuery Developer's Guide",
        "author":"Addy Osmani",
        "published":"2012-08-30T00:00:00.000Z",
        "publisher":"O'Reilly Media",
        "pages":254,
        "description":"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
       
    },
    {
        "isbn":"9798602477429",
        "title":"You Don't Know JS Yet",
        "subtitle":"Get Started",
        "author":"Kyle Simpson",
        "published":"2020-01-28T00:00:00.000Z",
        "publisher":"Independently published",
        "pages":143,
        "description":"The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
        
    },
    {
        "isbn":"9781484200766",
        "title":"Pro Git",
        "subtitle":"Everything you neeed to know about Git",
        "author":"Scott Chacon and Ben Straub",
        "published":"2014-11-18T00:00:00.000Z",
        "publisher":"Apress; 2nd edition",
        "pages":458,
        "description":"Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
       
    },
    {
        "isbn":"9781484242216",
        "title":"Rethinking Productivity in Software Engineering",
        "subtitle":"",
        "author":"Caitlin Sadowski, Thomas Zimmermann",
        "published":"2019-05-11T00:00:00.000Z",
        "publisher":"Apress",
        "pages":310,
        "description":"Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
    }
];
