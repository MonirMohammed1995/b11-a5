const colors = ["bg-red-300", "bg-green-300", "bg-blue-300", "bg-yellow-200", "bg-purple-300"];
let currentIndex = 0; 
document.getElementById("changeColor").addEventListener("click", function() {
document.getElementById("bg").className = "h-screen transition-colors duration-500 " + colors[currentIndex];
currentIndex = (currentIndex + 1) % colors.length;
});