let numberOfSpheres = 120;
let spheresArray = [];
let isPaused = false;
const body = document.getElementById("body");

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    isPaused = !isPaused;
  }
};
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
  let rotationY = (numberOfSpheres * y) / 10;
  let velocity = vel + numberOfSpheres / 2;

  i = 10000;

  setInterval(() => {
    if (!isPaused) {
      i = Math.round(i + 0.5);

      midX = body.clientWidth / 3;
      midY = body.clientHeight;

      sphere.style.top =
        -Math.tan(i / rotationY + velocity) * velocity + midX + "px";

      sphere.style.left =
        Math.sin(i / rotationX + velocity) * velocity + midY + "px";

      // Hue and lightness based on velocity (ember effect)
      sphere.style.backgroundColor = `hsl(${(vel - 150) / 6 - 10}, 100%, ${
        vel / 7
      }%)`;
    }

    if (i == 400000) {
      i = 10000;
    }
  }, 22);
}

function generateSphere(i) {
  const newSphere = document.createElement("div");

  sphereSize = Math.floor(Math.random() * 8 + 3);
  newSphere.classList.add("ball", `index${i}`);
  newSphere.style.width = `${sphereSize}px`;
  newSphere.style.height = `${sphereSize}px`;
  newSphere.style.opacity = Math.random() + 0.9;

  return newSphere;
}

function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 150) + 200}, 60%, 45%)`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 200) + 300;
}

function getRandomVelocity() {
  return Math.floor(Math.random() * 550) + 10;
}

spheresArray.forEach((sphere) => {
  calculateMovement(
    sphere,
    getRandomNumber(),
    getRandomNumber(),
    getRandomVelocity()
  );
});
