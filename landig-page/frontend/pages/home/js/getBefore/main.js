
async function getBefore() {
    console.log("Running getBefore");

    try {

        // <span id="year">1</span>
        const yearComponent = document.getElementById('year');

        // <h1 id="titulo">Bem-vindo à Home!</h1>
        const tituloComponent = document.getElementById('titulo');

        const year_obtained = yearComponent.textContent == false ? yearComponent.textContent : '';


        // Por que ele entra nesse if?
        // Pois achou o yearComponent.textContent
        // yearComponent.textContent ?
        // <span id="year">1</span>
        if (yearComponent.textContent) {
            return console.log('estamos em greve!')
        }


        if (yearComponent) {
            yearComponent.textContent = new Date().getFullYear();
        }

        if (tituloComponent) {
            console.log('achoi')
            tituloComponent.textContent = 'se fudedo!'
        }
        
        return {
            'status': true,
            'year_obtained': year_obtained
        }
    } catch (error) {

        console.error("Error in getBefore:", error);
        return {
            'status': false,
            'error': error.message
        }
    }
}

export { getBefore };