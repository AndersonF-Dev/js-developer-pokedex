

// const modalContent = document.getElementById('modalContent')


// const maxRecords = 151
// const limit = 1
// let offset = 0;

// // Função para converter um Pokémon em HTML de lista
// function convertPokemonToLi(pokemon) {
//     return `
//         <li class="pokemon ${pokemon.type}">
//             <span class="number">#${pokemon.number}</span>
//             <span class="name">${pokemon.name}</span>

//             <div class="detail">
//                 <ol class="types">
//                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                 </ol>

//                 <img src="${pokemon.photo}"
//                      alt="${pokemon.name}">
//             </div>
//         </li>
//     `
// }

// function carregarPokemonNoModal(pokemon){
//     return `
//         <li class="pokemonModal ${pokemon.type}">
//                     <span class="nome-pokemonModal">${pokemon.name}</span>
//                     <span class="numeroModal">#${pokemon.number}</span>
//                     <div class="typeModalList">
//                         <img src="${pokemon.photo}" alt="${pokemon.name}">
//                     </div>
//                 </li>
//     `;
//     console.log('carregarPokemonNoModal')
    

// }

// pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
//              const newHtm2 = pokemons.map(carregarPokemonNoModal).join('')
//              modalContent.innerHTML = newHtm2
//              console.log('newHtm2')
//         })










// const modalPokemonList = document.getElementById('modalPokemon'); // Local onde o Pokémon será exibido no modal

// // Limites para carregar Pokémon (se necessário)
// let limit = 1;
// let offset = 0;

// // Função para gerar o conteúdo do modal com os dados do Pokémon
// function ConvertPokemonToLi(pokemon) {
//     return `
//         <li class="modalPokemon ${pokemon.type}">
//             <span class="nome-pokemonModal">${pokemon.name}</span>
//             <span class="numeroModal">#${pokemon.number}</span>
            
//             <div class="modalInformacao">
//                 <img src="${pokemon.photo}" alt="${pokemon.name}">
//             </div>
//         </li>
//         <div class="modalDetalhis">
//             <ol class="typesModal typesModalPosition">
//                 <li class="EvolutionModal">Evolution</li>
//                 <ol class="typeModal">Types
//                     <div class="typeModalList">
//                         ${pokemon.types.map((type) => `
//                             <li class="type ${type}">${type}</li>
//                         `).join('')}
//                     </div>
//                 </ol>
//             </ol>
//         </div>
//     `;
// }

// // Função para converter os detalhes do Pokémon da PokeAPI para o formato desejado
// function convertPokeApiDetailToPokemon(pokeDetail) {
//     const pokemon = new Pokemon(); // Aqui, o construtor Pokemon pode ser uma função ou classe
//     pokemon.number = pokeDetail.id;
//     pokemon.name = pokeDetail.name;

//     const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
//     const [type] = types; // Pegando o primeiro tipo

//     pokemon.types = types;
//     pokemon.type = type;
//     pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

//     return pokemon;
// }

// // Função para obter os detalhes completos do Pokémon e exibir no modal
// function carregarPokemonNoModal(pokemonId) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

//     fetch(url)
//         .then((response) => {
//             if (!response.ok) throw new Error(`Erro ao buscar Pokémon: ${response.status}`);
//             return response.json();
//         })
//         .then((pokeDetail) => {
//             const pokemon = convertPokeApiDetailToPokemon(pokeDetail); // Converte os dados para o formato esperado
//             const pokemonHtml = ConvertPokemonToLi(pokemon); // Gera o HTML do Pokémon

//             modalPokemonList.innerHTML = pokemonHtml; // Atualiza o modal com o Pokémon clicado
//         })
//         .catch((error) => {
//             console.error(error);
//             modalPokemonList.innerHTML = '<li>Erro ao carregar Pokémon. Tente novamente.</li>';
//         });
// }

// // Função para abrir o modal
// function abrirModal() {
//     const modal = document.getElementById('janela-modal');
//     modal.classList.add('abrir');

//     // Fecha o modal ao clicar fora dele ou no botão de fechar
//     modal.addEventListener('click', (event) => {
//         if (event.target.id === 'fechar' || event.target.id === 'janela-modal') {
//             modal.classList.remove('abrir');
//         }
//     });
// }




















// // const modalPokemonList = document.getElementById('modalPokemon')
// // limit = 1;
// // offset = 0;

// // // Função para gerar o item de lista do Pokémon no modal
// // function ConvertPokemonToLi(pokemon) {
// //     return  `
// //     <li id="modalPokemon" class="modalPokemon">
// //                 <span class="nome-pokemonModal">${pokemon.name}</span>
// //                 <span class="numeroModal">${pokemon.number}</span>
                
// //                 <img src="${pokemon.photo}" alt="${pokemon.name}">
                
        
// //             </li>
// //             <div class="modalDetalhis">
// //                     <ol class="typesModal typesModalPosition">
// //                         <li class="EvolutionModal">Evolution</li>
// //                         <ol class="typeModal">Types
// //                             <div class="typeModalList">${pokemon.types.map((type) => `
// //                                 <li class="type ${type}">${type}</li>
// //                                 `).join('')}
// //                             </div>
// //                         </ol>
                        
// //                     </ol>
// //             </div>
// //     `;

   
// // }

// // // Função para converter os detalhes do Pokémon da PokeAPI para o formato desejado
// // function convertPokeApiDetailToPokemon(pokeDetail) {
// //     const pokemon = new Pokemon();  // Aqui, o construtor Pokemon pode ser uma função ou classe
// //     pokemon.number = pokeDetail.id;
// //     pokemon.name = pokeDetail.name;

// //     const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
// //     const [type] = types;  // Pegando o primeiro tipo

// //     pokemon.types = types;
// //     pokemon.type = type;
// //     pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

// //     return pokemon;
// // }

// // // Função para obter os detalhes completos do Pokémon
// // pokeApi.getPokemonDetail = (pokemon) => {
// //     return fetch(pokemon.url)
// //         .then((response) => response.json())
// //         .then(convertPokeApiDetailToPokemon);
// // };

// // // Função para obter os Pokémons da PokeAPI
// // pokeApi.getPokemons = (offset = 0, limit = 2) => {
// //     const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
// //     return fetch(url)
// //         .then((response) => response.json())
// //         .then((jsonBody) => jsonBody.results)
// //         .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))  // Converte para detalhes completos
// //         .then((detailRequests) => Promise.all(detailRequests))  // Espera todas as promessas serem resolvidas
// //         .then((pokemonsDetails) => {
// //             // Aqui é onde você lida com os Pokémons recebidos
// //             // Exibindo no modal
// //             const pokemonListHTML = pokemonsDetails.map(ConvertPokemonToLi).join('');
// //             modalPokemonList.innerHTML = pokemonListHTML;
// //         })
// //         .catch((error) => console.error(error));
// // };


// // function carregarPokemonNoModal(pokemonId) {
// //     const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    
// //     fetch(url)
// //         .then((response) => {
// //             if (!response.ok) throw new Error(`Erro ao buscar Pokémon: ${response.status}`);
// //             return response.json();
// //         })
// //         .then((pokeDetail) => {
// //             // Converte os dados do Pokémon e exibe no modal
// //             const pokemon = convertPokeApiDetailToPokemon(pokeDetail);
// //             const pokemonHtml = ConvertPokemonToLi(pokemon);

// //             modalPokemonList.innerHTML = pokemonHtml; // Atualiza o conteúdo do modal
// //         })
// //         .catch((error) => {
// //             console.error(error);
// //             modalPokemonList.innerHTML = '<li>Erro ao carregar Pokémon. Tente novamente.</li>';
// //         });
// // }





















