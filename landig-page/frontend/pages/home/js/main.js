import { getBefore } from './getBefore/main.js';

async function main () {
    try {

        const beforeData = await getBefore();
        

        if (beforeData.status) {
            console.log(beforeData.status)
            console.log(`Ano obtido com sucesso, estamos em ${beforeData.year_obtained}.`)
        }

    } catch (error) {

        console.error("Erro ao executar main:", error);

    }
}

main()
