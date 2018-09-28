(function(window) {
  const images = [
    "https://unsplash.it/700/800?image=1",
    "https://unsplash.it/700/600?image=2",
    "https://unsplash.it/700/400?image=3",
    "https://unsplash.it/700/500?image=4",
    "https://unsplash.it/700/700?image=5",
    "https://unsplash.it/700/300?image=6",
    "https://unsplash.it/700/500?image=7",
    "https://unsplash.it/700/650?image=8",
    "https://unsplash.it/700/350?image=9",
    "https://unsplash.it/700/420?image=10",
    "https://unsplash.it/700/300?image=11",
    "https://unsplash.it/700/500?image=12",
    "https://unsplash.it/700/550?image=13",
    "https://unsplash.it/700/900?image=14",
    "https://unsplash.it/700/800?image=15",
    "https://unsplash.it/700/400?image=16",
    "https://unsplash.it/700/500?image=17",
    "https://unsplash.it/700/650?image=18",
    "https://unsplash.it/700/550?image=19",
    "https://unsplash.it/700/440?image=20",
    "https://unsplash.it/700/480?image=21",
    "https://unsplash.it/700/680?image=22",
    "https://unsplash.it/700/920?image=23",
    "https://unsplash.it/700/650?image=24",
    "https://unsplash.it/700/350?image=25",
    "https://unsplash.it/700/425?image=26",
    "https://unsplash.it/700/500?image=27",
    "https://unsplash.it/700/450?image=28",
    "https://unsplash.it/700/350?image=29",
    "https://unsplash.it/700/900?image=30",
    "https://unsplash.it/700/520?image=31",
    "https://unsplash.it/700/650?image=32",
    "https://unsplash.it/700/750?image=33",
    "https://unsplash.it/700/800?image=34",
    "https://unsplash.it/700/900?image=35",
    "https://unsplash.it/700/420?image=36",
    "https://unsplash.it/700/350?image=37",
    "https://unsplash.it/700/600?image=38",
    "https://unsplash.it/700/480?image=39",
    "https://unsplash.it/700/640?image=40",
    "https://unsplash.it/700/350?image=41",
    "https://unsplash.it/700/380?image=42",
    "https://unsplash.it/700/420?image=43",
    "https://unsplash.it/700/500?image=44",
    "https://unsplash.it/700/640?image=45",
    "https://unsplash.it/700/680?image=46",
    "https://unsplash.it/700/700?image=47",
    "https://unsplash.it/700/350?image=48",
    "https://unsplash.it/700/400?image=49",
    "https://unsplash.it/700/800?image=50"
  ];

  const masonry = document.querySelector(".masonry");
  const nColumns = 3;
  const columnPositions = [0, 0, 0];
  let columnIndex = 0;

  function addImage(url) {
    const currentPosition = columnPositions[columnIndex];
    const brick = document.createElement("figure");
    const height = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    brick.classList.add("masonry-brick");
    brick.innerHTML = `
      <img src="${url}" class="masonry-img">
    `;
    brick.style.top = currentPosition + "px";
    brick.style.left = columnIndex * 200 + "px";
    brick.style.width = 200 + "px";
    brick.style.height = height + "px";
    masonry.appendChild(brick);
    columnPositions[columnIndex] += height;
    columnIndex = (columnIndex + 1) % nColumns;
  }

  images.forEach(function(url) {
    addImage(url);
  });
})(window);
