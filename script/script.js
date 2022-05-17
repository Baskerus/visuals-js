let numberOfSpheres = 120;
let spheresArray = [];
const body = document.getElementById("body");

function createSpheres() {
  for (i = 0; i < numberOfSpheres; i++) {
    spheresArray.push(generateSphere(i));
  }

  spheresArray.forEach((sphere) => {
    sphereContainer.appendChild(sphere);
  });
}

newSphere = createSpheres();

function calculateMovement(sphere, x, y, vel) {
  let rotationX = (numberOfSpheres * x) / 6;
  let rotationY = (numberOfSpheres * y) / 6;
  let velocity = vel + numberOfSpheres / 2;

  i= 10000;

  setInterval(() => {
    i = i + .5;

    midX = body.clientWidth / 4;
    midY = body.clientHeight;

    sphere.style.top =
      -Math.tan(i / rotationY + velocity) * velocity + midX + "px";
    sphere.style.left =
      Math.sin(i / rotationX + velocity) * velocity + midY + "px";

    // Changes hue at certain speed
    // Hue and lightness based on velocity (ember effect)
    sphere.style.backgroundColor = `hsl(${vel / 6.5 - 5}, 100%, ${
      vel / 7 + 18
    }%)`;

   

  }, 14);



 
}

function generateSphere(i) {
  const newSphere = document.createElement("div");
  color = getRandomColor();

  newSphere.classList.add("ball", `index${i}`);
  newSphere.style.backgroundColor = color;
  /*   newBall.style.boxShadow = `0px 0px 10px orange`; */

  return newSphere;
}

function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 150) + 200}, 60%, 45%)`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 200) + 300;
}

function getRandomVelocity() {
  return Math.floor(Math.random() * 350) + 10;
}

spheresArray.forEach((sphere) => {
  calculateMovement(
    sphere,
    getRandomNumber(),
    getRandomNumber(),
    getRandomVelocity()
  );
});
