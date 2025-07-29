//const apiKey = "B51EE6E4-62A0-AE4B-8327-5BE9DD07EC150B3ED45E-4C1F-4D9B-B5E7-704DC142424E"

const listaPersonagens = document.getElementById("listaPersonagens");
const result = document.getElementsByClassName("informacoes");

botaoApi.addEventListener("click", () => {
    const apiKey = document.getElementById("pegarApi").value;
    fetch(`https://api.guildwars2.com/v2/characters?page=0&page_size=200&v=latest&access_token=${apiKey}&lang=en`)
        .then(response => response.json())
        .then(data => {
            listaPersonagens.innerHTML = "";
            data.forEach(personagem => {
                const li = document.createElement("li");
                li.textContent = `${personagem.name} - ${personagem.race}`;
                listaPersonagens.appendChild(li);
            });
        });
});