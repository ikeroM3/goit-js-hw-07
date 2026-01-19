const list = document.querySelectorAll(".item");

console.log("Number of categories:", list.length);

list.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
