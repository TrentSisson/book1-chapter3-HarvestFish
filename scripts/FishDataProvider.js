const fishCollection = [
    {
        NAME: "Forest Gump",
        FOOD: "Mesoplankton",
        SPECIES: "Gobiodon okinawae",
        LENGTH: "3.5cm",
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREL7Cdb-6okSwlFQ-Acxqicon_YV0Po5ZbcQ&usqp=CAU"
    },
    {
        NAME: "Bobba Fette",
        FOOD: "live brine, shrimp or mysis shrimp",
        SPECIES: "Sphaeramia nematoptera",
        LENGTH: "8.5 cm",
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://cdn-16483.kxcdn.com/pictures-jj/saltwaterfish/pajamacardinalfish/sphaeramia-nematoptera-5.jpg"
    },
    {
        NAME: "Prison Mike",
        FOOD: "ocellaris feed on plankton and algae",
        SPECIES: "Amphiprion ocellaris",
        LENGTH: "11 cm",
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://vistapointe.net/images/clownfish-2.jpg"
    },
    {
        NAME: "Deku",
        FOOD: "daphnia, live brine shrimp, blood worms, and Cyclops",
        SPECIES: "Exyrias akihito",
        LENGTH: "11.1 cm",
        LOCATION: "Nagasaki Japan",
        IMAGE:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREL7Cdb-6okSwlFQ-Acxqicon_YV0Po5ZbcQ&usqp=CAU"
    },

]

export const useFish = () => {
    return fishCollection.slice()
}

export const addFish = (fishObject) => {
    fishCollection.push(fishObject)
}