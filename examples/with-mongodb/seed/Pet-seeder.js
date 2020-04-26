var Pet = require('../models/Pet');

var pets = [
    new Pet({
        name: "Fishy",
        owner_name: "Liulan",
        species: "Guinea Pig",
        age: 1,
        poddy_trained: false,
        diet: ["fresh vegetables", "fresh fruit", "hay", "pellets"],
        image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Guinea-Pig.png.jpg",
        likes: ["sleeping", "eating", "running around"],
        dislikes: ["loud noise", "being hungry", "being held"]
    }),
    new Pet({
        name: "Havana",
        owner_name: "Tina", 
        species: "Rooster",
        age: 3,
        poddy_trained: false,
        diet: [ "fresh corn", "cooked rice", "cheese", "noodles" ],
        image_url: "https://upload.wikimedia.org/wikipedia/commons/9/92/A_95_year_old_woman_with_her_pet_rooster%2C_Havana%2C_Cuba.jpg",
        likes: ["crowing", "eating", "running around"],
        dislikes: ["loud noise", "oven", "knife"]
    }),
    new Pet({
        name: "Charle",
        owner_name: "Diti", 
        species: "Cat",
        age: 20,
        poddy_trained: false,
        diet: ["Fresh food", "", "Salmon", "Trout", "Tuna", "Cat food"],
        image_url: "https://upload.wikimedia.org/wikipedia/commons/3/32/Tired_20-year-old_cat.jpg",
        likes: ["Taking naps", "being clean","clawing","scratching"],
        dislikes: ["soap", "getting wet", "low temperature", "nail cutting"]
    }),
    new Pet({
        name: "Charle",
        owner_name: "Michelle", 
        species: "",
        age: 0,
        poddy_trained: false,
        diet: [""],
        image_url: "",
        likes: [""],
        dislikes: [""]
    }),
    
];

/* MISSING: Storing all the data in the database*/
