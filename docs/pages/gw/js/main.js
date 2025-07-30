// API Keys de exemplo (comentadas por segurança)
//const apiKey = "B51EE6E4-62A0-AE4B-8327-5BE9DD07EC150B3ED45E-4C1F-4D9B-B5E7-704DC142424E"
//564F181A-F0FC-114A-A55D-3C1DCD45F3767AF3848F-AB29-4EBF-9594-F91E6A75E015

// ===== INICIALIZAÇÃO DA PÁGINA =====
// Buscar o container onde as informações serão exibidas
const informacoesContainer = document.querySelector(".informacoes");

// Criar e adicionar a mensagem inicial para o usuário
const mensagemInicial = document.createElement("p");
mensagemInicial.id = "digiteApi";
mensagemInicial.textContent = "Digite sua API KEY para buscar informações sobre seus personagens.";

// Adicionar a mensagem ao container
informacoesContainer.appendChild(mensagemInicial);

// ===== EVENTO DE CLIQUE NO BOTÃO =====
botaoApi.addEventListener("click", () => {
    // Remover a mensagem inicial quando o usuário clicar no botão
    const mensagemExistente = document.getElementById("digiteApi");
    if (mensagemExistente) {
        mensagemExistente.remove();
    }

    // Limpar lista anterior (se existir) para evitar duplicação
    const listaAntiga = document.getElementById("listaPersonagens");
    if (listaAntiga) {
        listaAntiga.remove();
    }

    // Criar nova lista para exibir os personagens
    const ul = document.createElement("ul");
    ul.id = "listaPersonagens";
    informacoesContainer.appendChild(ul);
    
    // Obter referência da lista criada
    const listaPersonagens = document.getElementById("listaPersonagens");

    // Pegar a API KEY digitada pelo usuário
    const apiKey = document.getElementById("pegarApi").value;
    
    // Mostrar ícone de loading enquanto carrega os dados
    listaPersonagens.innerHTML = '<img src="../../assets/Loading_icon.gif" alt="Carregando...">';
    
    // ===== REQUISIÇÃO PARA A API DO GUILD WARS 2 =====
    fetch(`https://api.guildwars2.com/v2/characters?page=0&page_size=200&v=latest&access_token=${apiKey}&lang=en`)
        .then(response => response.json()) // Converter resposta para JSON
        .then(data => {
            // Limpar o loading
            listaPersonagens.innerHTML = "";
            
            // Criar um item da lista para cada personagem encontrado
            data.forEach(personagem => {
                const li = document.createElement("li");
                li.textContent = `${personagem.name} - ${personagem.race}`;
                listaPersonagens.appendChild(li);
            });
        });
});

// ===== EVENTO DE TECLA ENTER =====
// Permitir que o usuário pressione Enter para buscar (além do clique no botão)
pegarApi.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevenir comportamento padrão do Enter
        botaoApi.click(); // Simular o clique no botão de busca
    }
});


