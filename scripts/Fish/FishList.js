

import { Fish } from "./Fish.js"

import { mostHolyFish, soldierFish, regularFish } from "./FishDataProvider.js"


const buildFishContainerHTML = (arrayOfFish) => {
    let fishHTMLRepresentations =""
    for(const fish of arrayOfFish) {
        fishHTMLRepresentations += Fish(fish)
    }
    return fishHTMLRepresentations
}
export const FishList = () => {
const contentElement = document.querySelector(".contentContainer__left")

const holyFish = mostHolyFish()
const holyFishHTML = buildFishContainerHTML(holyFish)

const SoldierFish = soldierFish()
const soldierFishHTML = buildFishContainerHTML(SoldierFish)

const RegularFish = regularFish()
const regularFishHTML = buildFishContainerHTML(RegularFish)




contentElement.innerHTML += `
    <section class="fishlist">
    <h3>FISH</h3>
    <div class="fish__container">
    ${holyFishHTML}
    ${soldierFishHTML}
    ${regularFishHTML}
    </div>
    </section>
`
}