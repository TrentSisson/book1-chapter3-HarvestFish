import {Location} from "./Location.js"

import {locationInfo} from "./LocationDataProvider.js"

export const LocationList = () => {



const contentElement = document.querySelector(".contentContainer__left")

const locations = locationInfo()

let locationHTMLRepresentations =""
for (const location of locations){
    locationHTMLRepresentations += Location(location)
}


contentElement.innerHTML += `
<section class="travel__locations">
<h3>QUOTE</h3>
<div class="location">
    ${locationHTMLRepresentations}
</div>
</section>
`
}