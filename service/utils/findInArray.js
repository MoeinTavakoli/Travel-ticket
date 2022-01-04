function isInArray(array, item) {

    const found = array.find(element => element == item);
    if (found == undefined) { // || found == false
        return false
    }
    else {
        return true
    }

}


module.exports = isInArray 