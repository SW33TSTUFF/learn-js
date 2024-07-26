// we can use the map func to square print without changing
// the oriignal array

const natNum = [1, 2, 3, 4, 5, 6, 7]

function printSquare(num) {
    const squareArray = num.map(num => num * num)
    squareArray.forEach(num => console.log(num))
}


printSquare(natNum)
