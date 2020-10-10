
const fishCollection = [
    {
        NAME: "Forest Gump",
        FOOD: "Mesoplankton",
        SPECIES: "Gobiodon okinawae",
        LENGTH: 3,
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREL7Cdb-6okSwlFQ-Acxqicon_YV0Po5ZbcQ&usqp=CAU"
    },
    {
        NAME: "Bobba Fette",
        FOOD: "live brine, shrimp or mysis shrimp",
        SPECIES: "Sphaeramia nematoptera",
        LENGTH: 8,
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://cdn-16483.kxcdn.com/pictures-jj/saltwaterfish/pajamacardinalfish/sphaeramia-nematoptera-5.jpg"
    },
    {
        NAME: "Prison Mike",
        FOOD: "ocellaris feed on plankton and algae",
        SPECIES: "Amphiprion ocellaris",
        LENGTH: 10,
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://vistapointe.net/images/clownfish-2.jpg"
    },
    {
        NAME: "Deku",
        FOOD: "daphnia, live brine shrimp, blood worms, and Cyclops",
        SPECIES: "Exyrias akihito",
        LENGTH: 11,
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp8Q2c0BGDzlYTLwVi2QycBvEfd-Zp7OpqOg&usqp=CAU"
    },
    {

        NAME: "Vegeta",
        FOOD: "ocellaris feed on plankton and algae",
        SPECIES: "Amphiprion ocellaris",
        LENGTH: 10,
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://vistapointe.net/images/clownfish-2.jpg"
    },
    {
    
        NAME: "Goku",
        FOOD: "daphnia, live brine shrimp, blood worms, and Cyclops",
        SPECIES: "Exyrias akihito",
        LENGTH: 11.1,
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp8Q2c0BGDzlYTLwVi2QycBvEfd-Zp7OpqOg&usqp=CAU"
    }

]

export const useFish = () => {
    return fishCollection.slice()
}

export const addFish = (fishObject) => {
    fishCollection.push(fishObject)
}





export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []


    for (const fish of fishCollection) {
        if(fish.LENGTH % 3 === 0)
        holyFish.push(fish)

    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const  SoldierFish =[]
   

    for (const fish of fishCollection){
    if(fish.LENGTH % 5 ===0 && fish.LENGTH % 3 !== 0)
    SoldierFish.push(fish)
    
    }
    return SoldierFish
}

export const regularFish = () => {
    const RegularFish = []
     // Any fish not a multiple of 3 or 5
    for(const fish of fishCollection){
    if(fish.LENGTH % 3 !== 0 && fish.LENGTH % 5!==0)
    RegularFish.push(fish)
    }
    return RegularFish
}