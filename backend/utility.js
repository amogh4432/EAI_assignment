function getRandomInt(count = 5) {
    return Math.floor(Math.random() * count) + 1;
}

function getRandomExtremes() {
    const temp = getRandomInt(2)
    if (temp === 1) {
        return -5
    }
    return 5
}

module.exports = {getRandomExtremes,getRandomInt}