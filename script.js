document.addEventListener('DOMContentLoaded', () => {
    const gradientBg = document.getElementById('gradient-bg');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        gradientBg.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)`;
    });
});