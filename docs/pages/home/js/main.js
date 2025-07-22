import { getBefore } from './getBefore/main.js';

async function main() {
    try {
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
