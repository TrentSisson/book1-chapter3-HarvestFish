export const FishList = () => {



const contentElement = document.querySelector(".contentContainer__left")
contentElement.innerHTML += `
    <section class="fishlist">
    <h3>FISH</h3>
    <div class="fishContainer">
    Placeholder for list of fishes
    </div>
    </section>
`
}