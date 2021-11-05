let att = document.querySelector(".container .desc");
console.log(att.textContent);
if (!att.hasAttribute("alt")) {
  att.setAttribute("alt", "ZEBY")
  console.log(`Yes`);

}
else{
  console.log(`Nah Nah`)
}
