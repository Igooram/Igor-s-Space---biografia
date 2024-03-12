document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('about-btn');
    const aboutMeDiv = document.getElementById('about-me');

    aboutBtn.addEventListener('click', function() {
        if (aboutMeDiv.style.display === 'none') {
            aboutMeDiv.style.display = 'block';
        } else {
            aboutMeDiv.style.display = 'none';
        }
    });
});

let botaoSmiling = document.querySelector(".smiling");

botaoSmiling.addEventListener("click", function() {
    alert("Que o seu dia seja cheio de luz e que a felicidade transborde em cada momento. Bom Dia, Boa tarde ou Boa noite!");

});
