import { getBefore } from './getBefore/main.js';

function isRunningLocally() {
    // Checks if running on localhost or file://
    return (
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.protocol === "file:"
    );
}

async function main() {
    try {
        const navigationButtons = document.getElementsByName('buttonNavigation');
        const runningLocal = isRunningLocally();

        for (let i = 0; i < navigationButtons.length; i++) {
            let originalHref = navigationButtons[i].getAttribute('href');
            let newHref = originalHref;

            if (runningLocal) {
                // Ajuste para refletir a estrutura de pastas local
                newHref = originalHref
                    .replace(/\/?Games-disc/, '/docs')
                    .replace(/\/?frontend/, '/docs/pages');
            }

            navigationButtons[i].setAttribute('href', newHref);
            console.log(`New href for button ${i}: ${navigationButtons[i].href}`);
        }

        const beforeData = await getBefore();

        if (beforeData.status) {
            console.log(beforeData.status)
            console.log(`Year obtained successfully, we are in ${beforeData.year_obtained}.`)
        }

    } catch (error) {
        console.error("Error running main:", error);
    }
}

main()
