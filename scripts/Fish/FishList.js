

import { Fish } from "./Fish.js"

import { useFish } from "./FishDataProvider.js"

export const FishList = () => {



const contentElement = document.querySelector(".contentContainer__left")

const fishes = useFish()

let fishHTMLRepresentations =""
for (const fish of fishes){
    fishHTMLRepresentations += Fish(fish)
}

contentElement.innerHTML += `
    <section class="fishlist">
    <h3>FISH</h3>
    <div class="fish__container">
    ${fishHTMLRepresentations}
    </div>
    </section>
`
}