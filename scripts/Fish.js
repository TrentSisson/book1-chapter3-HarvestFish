export const Fish = (fishObj) => {
    return `
<div class="fish">
    <p><u>*NAME*</u></p>
    <p class="fish__name">${fishObj.NAME}</p>
    <img class="fish__image"src="${fishObj.IMAGE}">
    <p><u>*SPECIES*</u></p>
    <p class="fish__species">${fishObj.SPECIES}</p>
    <p><u>*LENGTH*</u></p>
    <p class="fish__length">${fishObj.LENGTH}</p>
    <p><u>*HARVEST LOCATION*</u></p>
    <p class="fish__location">${fishObj.LOCATION}</p>
    <p><u>*DIET*</u></p>
    <p class="fish__diet>">${fishObj.FOOD}</p>
</div>
    `
}