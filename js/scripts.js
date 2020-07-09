//Data 
const food = {
    orange: ["45", "0", "0", "11", "10", "51", "38", "0"],
    apple: ["49", "0", "0", "13", "2", "4", "5", "0"],
    plum: ["24", "0", "0", "7", "7", "6", "0", "0"],
    kiwi: ["45", "1", "0", "11", "1", "115", "3", "1"],
    grape: ["50", "0", "0", "13", "0", "0", "0", "0"],
    lemon: ["17", "0", "0", "5", "0", "51", "1", "1"],
    watermelon: ["30", "0", "0", "7", "28", "8", "7", "0"],
    pear: ["57", "0", "0", "15", "1", "4", "9", "0"],
    apricot: ["15", "0", "0", "4", "13", "1", "6", "0"],
    banana: ["89", "1", "0", "22", "3", "8", "5", "0"]
}

//Close modal
document.getElementById("food-modal").style.display = "none" //Default

function closeModal() {
    document.getElementById("food-modal").style.display = "none"
  }

const items = document.getElementsByClassName("card-button")
console.log(items);


for(const item of items) {
    item.addEventListener("click", function openModal() {
        console.log(this.innerHTML)
        itemTitle = this.children[1].innerText
        
        document.getElementById("food-modal").style.display = "block"
        //Set data of the modal
        document.getElementById("f-title").innerHTML = itemTitle
        document.getElementById("f-cal").innerHTML = `${food[String(itemTitle).toLowerCase()][0]}`
        document.getElementById("f-prot").innerHTML = `${food[String(itemTitle).toLowerCase()][1]}g`
        document.getElementById("f-fat").innerHTML = `${food[String(itemTitle).toLowerCase()][2]}g`
        document.getElementById("f-carbs").innerHTML = `${food[String(itemTitle).toLowerCase()][3]}g`
        document.getElementById("f-vita").innerHTML = `${food[String(itemTitle).toLowerCase()][4]}%`
        document.getElementById("f-vitb").innerHTML = `${food[String(itemTitle).toLowerCase()][5]}%`
        document.getElementById("f-calc").innerHTML = `${food[String(itemTitle).toLowerCase()][6]}%`
        document.getElementById("f-iron").innerHTML = `${food[String(itemTitle).toLowerCase()][7]}%`
        console.log(food[String(itemTitle).toLowerCase()])
        
    })
}