const data = {
  item1: {
    title: "Orange Dress",
    timestamp: "00:03:50",
    duration: "3s",
    position: ["60%", "18%"],
    link: "https://fashionnova.com"
  }
};

const video = document.getElementById("video");
const product = document.getElementById("product");

// Convert HH:MM:SS to seconds
function timeToSeconds(time) {
  const parts = time.split(":").map(Number);
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

const startTime = timeToSeconds(data.item1.timestamp);
const duration = parseInt(data.item1.duration); // in seconds
let timeoutId = null;

video.addEventListener("timeupdate", () => {
  const t = video.currentTime;

  // Check if we reached the start time
  if (t >= startTime && t < startTime + 0.25 && !timeoutId) {
    // Show product
    product.style.left = data.item1.position[0];
    product.style.top = data.item1.position[1];
    product.innerHTML = `<a href="${data.item1.link}" target="_blank">
      ${data.item1.title}
    </a>`;
    product.style.display = "block";

/*
    // Hide product after duration seconds
    timeoutId = setTimeout(() => {
      product.style.display = "none";
      timeoutId = null; // reset for next appearance
    }, duration * 1000);
	*/
  }
});
