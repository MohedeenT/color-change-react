const colors = generateRandomColorsArray(10);

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateRandomColorsArray(length) {
  const colors = [];
  for (let i = 0; i < length; i++) {
    const randomColor = generateRandomColor();
    colors.push(randomColor);
  }
  return colors;
}

export default colors;
