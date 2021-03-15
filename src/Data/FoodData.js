export function formatPrice(price){
    return price.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'

    })
}
export const foodItems = [

    {
        name: "Samosa",
        img: "/img/samosa.jpeg",
        section: "Starters",
        price: 1
    },
    {
        name: "Paneer-Tikka",
        img: "/img/paneertikka.jpeg",
        section:"Starters",
        price: 2
    },
    {
        name: "Chole",
        img: "/img/chole.jpeg",
        section: "Main Course",
        price: 3
    }, 
    {
        name: "Sarso Da Saag",
        img: "/img/sarsodasaag.jpeg",
        section: "Main Course",
        price: 4
    }, 
    {
        name: "Paneer Jalfrazi",
        img: "/img/paneer-jalfrazi.jpeg",
        section: "Main Course",
        price: 5
    } ,
    {
        name: "Chicken Curry",
        img: "/img/chicken-curry.jpeg",
        section: "Main Course",
        price: 6
    },
    {
        name: "Puri",
        img: "/img/purii.jpeg",
        section: "Main Course",
        price: 7
        
    }, 
    {
        name: "Naan",
        img: "/img/naan.jpeg",
        section: "Main Course",
        price: 8
    }, 
    {
        name: "Veg Pulao",
        img: "/img/veg-pulao.jpeg",
        section: "Main Course",
        price: 9
    } ,
    {
        name: "Chicken Biryani",
        img: "/img/chickenbiryani.jpeg",
        section: "Main Course",
        price: 10
    }, 
    {
        name: "Gulab Jamun",
        img: "/img/gulab-jamun.jpeg",
        section: "Desserts",
        price: 11
    }, 
    {
        name: "Decadent Chocolate Pastry",
        img: "/img/pastry.jpeg",
        section: "Desserts",
        price: 12
    }, 
    {
        name: "Choco-Chip Butterscotch Ice-Cream",
        img: "/img/butterscotch.jpeg", 
        section: "Desserts",
        price: 13
    }, 
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
     res[food.section].push(food);
     return res;
     
}, {});