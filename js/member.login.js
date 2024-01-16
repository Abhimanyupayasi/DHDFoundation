document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".inp input");
  
    inputs.forEach(input => {
      input.addEventListener("input", function() {
        const label = this.nextElementSibling;
        label.classList.toggle("up", this.value.trim() !== "");
      });
    });
  });
  
  function focusinp(inp) {
    if (inp == 'usr') {
      document.getElementById("username").focus();
    } else if (inp == 'pass') {
      document.getElementById("password").focus();
    } else {
      document.getElementById("username").focus();
    }
  }



  document.getElementById("loginButton").addEventListener("click", function () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the provided username and password match the specified conditions
    if ((username === "abhimanyupayasi" && password === "abhi@2004") ||
        (username === "shanpandey" && password === "shan@1234") ||
        (username === "dream-hope" && password === "dream@hope")) {
        // Redirect to the next page if the conditions are met
        window.location.href = "../some/?username=" + encodeURIComponent(username);
    } else {
        // Display an error message if the conditions are not met
        alert("Invalid username or password. Please try again.");
    }
});