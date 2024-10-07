let wrapper = document.querySelector('.wrapper');
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let img = document.querySelector(".qr-code-img");



const generateQR = async () => {
  try {
    if (input.value.trim() === '') {
      alert("Enter name or url");
    } else {
      const encodedValue = encodeURIComponent(input.value);
      img.src = "https://quickchart.io/qr?text=" + encodedValue;
      img.style.display = "block";
      input.value = ''; // Clear the input after setting the image source
    }
  } catch (err) {
    alert("Data not found");
  }
  
};


// button effect
const refresh = () => {
  setTimeout(() => {
    btn.classList.add("change-btn-style");

    setTimeout(() => {
      btn.classList.remove("change-btn-style");
    }, 1000);
  }, 1000);
};

btn.addEventListener("click", () => {
    
  btn.classList.add("btn-middle-style");

  setTimeout(() => {
    btn.classList.remove("btn-middle-style");
  }, 100);

  refresh();
  generateQR();
  changeBackground();
});


img.addEventListener('mouseover', () => {
  wrapper.style.backgroundColor = "black";
  wrapper.classList.add('wrapper-animation');
});

img.addEventListener('mouseout', () => {
  wrapper.style.backgroundColor = "hsl(163, 57%, 41%)";
  wrapper.classList.add('wrapper-animation');
});