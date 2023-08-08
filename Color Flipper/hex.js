const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let colorButton = document.getElementById('btn');
colorButton.click(()=>{
    let colorText = document.querySelector('.color');
    console.log(colorText);
})
// colorButton.onclick(() => {
//     let colorText = document.getElementById('.color');
//     console.log(colorText);
// })
console.log(colorButton);