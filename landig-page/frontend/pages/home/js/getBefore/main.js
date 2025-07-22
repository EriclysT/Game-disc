
async function getBefore() {
    console.log("Running getBefore");

    try {

        const yearComponent = document.getElementById('year');

        const year_obtained = yearComponent.textContent == false ? yearComponent.textContent : '';


        if (yearComponent) {
            yearComponent.textContent = new Date().getFullYear();
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