function isRunningLocally() {
    return (
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.protocol === "file:"
    );
}

function ajustarNavegacao() {
    const navigationButtons = document.querySelectorAll('nav a');
    const runningLocal = isRunningLocally();

    for (let i = 0; i < navigationButtons.length; i++) {
        let originalHref = navigationButtons[i].getAttribute('href');
        let newHref = originalHref;

        if (runningLocal) {
            // Ajuste para refletir a estrutura de pastas local
            newHref = originalHref
                .replace(/\/?Games-disc/, '');
        }

        navigationButtons[i].setAttribute('href', newHref);
        // console.log(`Novo href para o botão ${i}: ${navigationButtons[i].href}`);
    }
}

document.addEventListener('DOMContentLoaded', ajustarNavegacao); 