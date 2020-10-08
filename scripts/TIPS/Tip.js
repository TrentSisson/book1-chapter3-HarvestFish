export const Tips = (tipsObj) => {
    return `
            <aside class="tipsList_contentContainer__right">
                <div class="tip">
                    <h3>CARE TIPS</h3>
                    <p><u>*TOPICS*</u></p>
                    <p class="tip__topic">${tipsObj.topic}</p>
                    <p class="tip__text">${tipsObj.text}</p>
                    <p>TEMPERATURE</P>
                    <p class="tip__text">${tipsObj.temperature}</p

                </div>
            </aside>`
             
}
