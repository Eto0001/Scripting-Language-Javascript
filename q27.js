const firstPara = document.querySelector("p");
console.log("First paragraph:", firstPara.textContent);

const paragraphs = document.querySelectorAll("p");
paragraphs[0].id = "para1";
paragraphs[1].id = "para2";
paragraphs[2].id = "para3";
paragraphs[3].id = "para4";

console.log("By ID:");
console.log(document.querySelector("#para1").textContent);
console.log(document.querySelector("#para2").textContent);
console.log(document.querySelector("#para3").textContent);
console.log(document.querySelector("#para4").textContent);

const allParas = document.querySelectorAll("p");

console.log("All paragraph texts:");
allParas.forEach((para, index) => {
  console.log(`Paragraph ${index + 1}:`, para.textContent);
});

allParas[3].textContent = "Fourth Paragraph";

allParas.forEach((para, index) => {
  para.setAttribute("id", `p${index + 1}`);
  para.className = `paragraph paragraph-${index + 1}`;
});

allParas.forEach((para, index) => {
  para.style.border = "1px solid #333";
  para.style.padding = "10px";
  para.style.margin = "5px";
  para.style.fontSize = "16px";
  para.style.fontFamily = "Arial, sans-serif";
  para.style.backgroundColor = "#f0f0f0";
});

allParas.forEach((para, index) => {
  if (index === 0 || index === 2) {
    para.style.color = "green";
  } else {
    para.style.color = "red";
  }
});

allParas.forEach((para, index) => {
  para.textContent = `This is paragraph ${index + 1}`;
  para.id = `customPara${index + 1}`;
  para.classList.add("custom-style");
});