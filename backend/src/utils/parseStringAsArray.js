module.exports = function parceStringAsArray (arrayAsStirng) {
    return arrayAsStirng.split(',').map(arrayItem => arrayItem.trim())
}