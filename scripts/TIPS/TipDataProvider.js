const tipsCollection = [
    {
    topic:"Aquarium Conditions",
    text: "salt water",
    temperature:" 72-78° F "
    }
]

export const usetips = () => {
    return tipsCollection.slice()
}
export const addTips = (tipsObject) => {
    tipsCollection.push(tipsObject)
}