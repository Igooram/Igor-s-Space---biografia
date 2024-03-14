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


  // Adicionando evento de clique ao botão de música
  document.getElementById('music-btn').addEventListener('click', function() {
    // Obtendo o elemento de áudio
    let audioPlayer = document.getElementById('music-player');
    // Tocando ou pausando a música com base no estado atual
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

