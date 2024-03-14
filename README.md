# Igor's Space

Este é um projeto simples
## Conteúdo

- [Visão Geral](#visão-geral)
- [Instruções de Uso](#instruções-de-uso)
- [Exemplo de Código](#exemplo-de-código)
- [Autor](#autor)

## Visão Geral

O projeto consiste em uma página web básica com informações sobre mim, um entusiasta de programação. Ele apresenta uma breve biografia, junto com a opção de reproduzir uma música.

## Instruções de Uso

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em seu navegador da web.
3. Clique no botão "Reproduzir música" para iniciar ou pausar a reprodução da música.

## Exemplo de Código

Aqui está o código JavaScript usado para controlar a reprodução da música:

```javascript
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

```
## Autor

Este projeto foi desenvolvido por [Igor](https://github.com/igooram).





