document.addEventListener("DOMContentLoaded", () => {
    const text = "우리 결혼합니다";
    const header = document.querySelector("header h1");
    header.innerHTML = "";
    
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = 0;
        span.style.position = "relative";
        span.style.display = "inline-block";
        span.style.transform = `translateY(${Math.random() * 50 - 25}px) rotate(${Math.random() * 20 - 10}deg)`;
        header.appendChild(span);
        
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = "translateY(0) rotate(0)";
            span.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
        }, index * 300);
    });
});