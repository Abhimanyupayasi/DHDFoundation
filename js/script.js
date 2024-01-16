var tab = 1;

document.querySelector(".bar").addEventListener("click", (eve) => {
    if (tab == 1) {
        document.querySelector(".mob-nav").style.display = "block";
        eve.preventDefault();
        tab = 0;
    } else if (tab == 0) {
        document.querySelector(".mob-nav").style.display = "none";
        eve.preventDefault();
        tab = 1;
    }
});

document.querySelector(".notice-1 dir span i").addEventListener("click", (eve) => {
    document.querySelector(".notice-board").style.display = "none";
        eve.preventDefault();

  });   
  const divs = document.querySelectorAll('.full-screen-div');
  let activeIndex = 0;
  
  setInterval(() => {
    divs[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % divs.length;
    divs[activeIndex].classList.add('active');
  }, 1500);



  document.addEventListener("DOMContentLoaded", function () {
    var numberElement = document.querySelector('.run1');
    var startNumber = 0;
    var endNumber = 30;
    var duration = 2000; // 5 seconds
    var interval = 100; // Update every 100 milliseconds
    var steps = (endNumber - startNumber) / (duration / interval);
    var currentNumber = startNumber;

    var updateNumber = function () {
        numberElement.textContent = Math.round(currentNumber);
        currentNumber += steps;

        if (currentNumber <= endNumber) {
            setTimeout(updateNumber, interval);
        } else {
            // Reset variables for the next loop
            currentNumber = startNumber;
            setTimeout(updateNumber, 1000); // Delay before restarting (10 seconds)
        }
    };

    // Start the initial animation
    updateNumber();
});

document.addEventListener("DOMContentLoaded", function () {
    var numberElement = document.querySelector('.run2');
    var startNumber = 0;
    var endNumber = 50;
    var duration = 2000; // 5 seconds
    var interval = 100; // Update every 100 milliseconds
    var steps = (endNumber - startNumber) / (duration / interval);
    var currentNumber = startNumber;

    var updateNumber = function () {
        numberElement.textContent = Math.round(currentNumber);
        currentNumber += steps;

        if (currentNumber <= endNumber) {
            setTimeout(updateNumber, interval);
        } else {
            // Reset variables for the next loop
            currentNumber = startNumber;
            setTimeout(updateNumber, 1000); // Delay before restarting (10 seconds)
        }
    };

    // Start the initial animation
    updateNumber();
});

document.addEventListener("DOMContentLoaded", function () {
    var numberElement = document.querySelector('.run3');
    var startNumber = 0;
    var endNumber = 80;
    var duration = 2000; // 5 seconds
    var interval = 100; // Update every 100 milliseconds
    var steps = (endNumber - startNumber) / (duration / interval);
    var currentNumber = startNumber;

    var updateNumber = function () {
        numberElement.textContent = Math.round(currentNumber);
        currentNumber += steps;

        if (currentNumber <= endNumber) {
            setTimeout(updateNumber, interval);
        } else {
            // Reset variables for the next loop
            currentNumber = startNumber;
            setTimeout(updateNumber, 1000); // Delay before restarting (10 seconds)
        }
    };

    // Start the initial animation
    updateNumber();
});


document.addEventListener("DOMContentLoaded", function () {
    var mainElement = document.querySelector('.main');

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        var elementPosition = mainElement.offsetTop;

        if (scrollPosition > elementPosition - window.innerHeight / 2) {
            mainElement.style.opacity = 1;
        }
    });
});