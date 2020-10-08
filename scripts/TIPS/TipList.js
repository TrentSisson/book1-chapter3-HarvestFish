import { Tips } from "./Tip.js"

import { usetips,} from "./TipDataProvider.js"

export const TipList = () => {



const contentElement = document.querySelector(".tipsList_contentContainer__right")

const tips = usetips()

let tipsHTMLRepresentations =""
for (const tip of tips){
    tipsHTMLRepresentations += Tips(tip)
}


contentElement.innerHTML += `
        <aside class="tipsList_contentContainer__right">
        <div class="tip">
        ${tipsHTMLRepresentations}
        </div>
        </aside>

`
}