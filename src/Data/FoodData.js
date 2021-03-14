export const foodItems = [

    {
        name: "Samosa",
        img: "/img/samosa.jpeg",
        section: "Starters"
    },
    {
        name: "Paneer-Tikka",
        img: "/img/paneertikka.jpeg",
        section:"Starters"
    },
    {
        name: "Chole",
        img: "/img/chole.jpeg",
        section: "Main Course"
    }, 
    {
        name: "Sarso Da Saag",
        img: "/img/sarsodasaag.jpeg",
        section: "Main Course"
    }, 
    {
        name: "Paneer Jalfrazi",
        img: "/img/paneer-jalfrazi.jpeg",
        section: "Main Course"
    } ,
    {
        name: "Chicken Curry",
        img: "/img/chicken-curry.jpeg",
        section: "Main Course"
    },
    {
        name: "Puri",
        img: "/img/purii.jpeg",
        section: "Main Course"
        
    }, 
    {
        name: "Naan",
        img: "/img/naan.jpeg",
        section: "Main Course"
    }, 
    {
        name: "Veg Pulao",
        img: "/img/veg-pulao.jpeg",
        section: "Main Course"
    } ,
    {
        name: "Chicken Biryani",
        img: "/img/chickenbiryani.jpeg",
        section: "Main Course"
    }, 
    {
        name: "Gulab Jamun",
        img: "/img/gulab-jamun.jpeg",
        section: "Desserts"
    }, 
    {
        name: "Decadent Chocolate Pastry",
        img: "/img/pastry.jpeg",
        section: "Desserts"
    }, 
    {
        name: "Choco-Chip Butterscotch Ice-Cream",
        img: "/img/butterscotch.jpeg", 
        section: "Desserts"
    }, 
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
     res[food.section].push(food);
     return res;
     
}, {});