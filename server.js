// 1. npm init -y: initializes my application as a node application

// 2. npm install express ejs

// 3. const express = require("express")

// 4. const app = express()

// 5. app.listen(3000,()=>{
// console.log("Listening on port 3000")
// })

//6. app.use(express.static('public'));


const express = require("express")
const app = express()

app.use(express.static('public'));


const CAFE = {
name: 'Digital Delights Diner',
isOpen: true,
address: '123 Tech Street, Codeville, CS 12345',
phone: '555-987-6543',
menu: [
    { 
    id: 1,
    name: 'Algorithm Avocado Toast',
    price: 12.50,
    rating: 4,
    category: 'mains',
    details: 'A delicious avocado toast with a perfectly balanced algorithm of flavors.'
    },
    { 
    id: 2,
    name: 'Syntax Sugar Cookie',
    price: 8.99,
    rating: 3,
    category: 'desserts',
    details: 'A sweet cookie decorated with syntax patterns. Every bite is perfectly structured.'
    },
    { 
    id: 3,
    name: 'Loop Linguine',
    price: 16.75,
    rating: 5,
    category: 'mains',
    details: 'Classic linguine pasta with a rich sauce that keeps you coming back for more.'
    },
    { 
    id: 4,
    name: 'Variable Vanilla Ice Cream',
    price: 4.50,
    rating: 5,
    category: 'desserts',
    details: 'Creamy vanilla ice cream that changes your mood with every scoop.'
    },
    { 
    id: 5,
    name: 'Array Asparagus Fries',
    price: 9.99,
    rating: 5,
    category: 'sides',
    details: 'Crispy asparagus fries arranged in a perfect array pattern.'
    }
]
}

app.get ('/', (req,res) => {
    res.render('home.ejs', {CAFE: CAFE})
})

app.get ('/menu', (req,res) => {
    res.render('menu.ejs', {menu:CAFE.menu })
})

app.get ('/menu/:category', (req,res) => {
    filteredItems = []
    const categoryMenu = CAFE.menu.filter((item)=>{
        return item.category == req.params.category
    })
    res.render('category.ejs', {filteredItems: categoryMenu })
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
