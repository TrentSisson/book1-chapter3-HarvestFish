export const Location = (locationObj) => {
    return `
          <div class="quote"></div>
          <p class="quote-text">${locationObj.quote}</p>
          <P class="author">${locationObj.author}</p>
          <img class="LocationImage"src="${locationObj.LocationImage}">
          <p class="authorLocation">${locationObj.quoteLocation}
          `
}
