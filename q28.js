const yearSpan = document.getElementById("year");
setInterval(() => {
  yearSpan.style.color = getRandomColor();
}, 1000);

const datetime = document.getElementById("datetime");
setInterval(() => {
  const now = new Date();
  datetime.textContent = now.toLocaleString();
  datetime.style.backgroundColor = getRandomColor();
  datetime.style.padding = "10px";
  datetime.style.display = "inline-block";
}, 1000);

const listItems = document.querySelectorAll("ul li");
listItems.forEach(li => {
  const text = li.textContent.toLowerCase();
  if (text.includes("done")) {
    li.style.backgroundColor = "green";
  } else if (text.includes("ongoing")) {
    li.style.backgroundColor = "yellow";
  } else if (text.includes("coming")) {
    li.style.backgroundColor = "red";
  }
  li.style.padding = "8px";
  li.style.margin = "4px 0";
  li.style.listStyle = "none";
});

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}