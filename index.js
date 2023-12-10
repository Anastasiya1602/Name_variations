let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let answer3 = document.querySelector("#answer3")

let name = document.querySelector("#your-name")
function getNumberOfChars(name) {
  console.log(name.length)
  return name.length
}
function getLower(name) {
  console.log(name.toLowerCase())
  return name.toLowerCase()
}
function getUpper(name) {
  console.log(name.toUpperCase())
return name.toUpperCase()

}
name.addEventListener("keyup", () => {
    answer1.textContent = getNumberOfChars(name.value)
    answer2.textContent = getLower(name.value)
    answer3.textContent = getUpper(name.value)
});