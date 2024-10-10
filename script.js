const personagem1 = document.querySelector('#personagem1');
const personagem2 = document.querySelector('#personagem2');
const personagem3 = document.querySelector('#personagem3');
const personagem4 = document.querySelector('#personagem4');
const personagem5 = document.querySelector('#personagem5');

const idPersonagem = document.querySelector('#idPersonagem');
const tituloPersonagem = document.querySelector('.titulo-personagem');
const genderPersonagem = document.querySelector('.gender-personagem');
const episodesPersonagem = document.querySelector('.episodes-personagem')
const statusPersonagem = document.querySelector('.status-personagem');
const speciePersonagem = document.querySelector('.specie-personagem');
const imgPersonagem = document.querySelector('.img-personagem')
const btnPersonagem = document.querySelector('#enviaPersonagem');

const idEpisodio = document.querySelector('#idEpisodio');
const tituloEpisodio = document.querySelector('.titulo-episodio');
const personagensEpisodio = document.querySelector('.personagens-episodio');
const sequenciaEpisodio = document.querySelector('.sequencia-episodio');
const dataEpisodio = document.querySelector('.data-episodio');
const btnEpisodio = document.querySelector('#enviaEpisodio');

const numeroAleatorio1 = Math.floor(Math.random() * 826);
const numeroAleatorio2 = Math.floor(Math.random() * 826);
const numeroAleatorio3 = Math.floor(Math.random() * 826);
const numeroAleatorio4 = Math.floor(Math.random() * 826);
const numeroAleatorio5 = Math.floor(Math.random() * 826);
console.log(numeroAleatorio1, numeroAleatorio2, numeroAleatorio3, numeroAleatorio4, numeroAleatorio5)

async function PersonagensDestacados (idPersonagem, seletorPersonagem){
    const urlImagem = await fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`)
        .then((response) => 
            response.json()
        ).then((dados) =>{
            return dados.image;
        })
        seletorPersonagem.setAttribute('src', urlImagem);
}

PersonagensDestacados(numeroAleatorio1, personagem1);
PersonagensDestacados(numeroAleatorio2, personagem2);
PersonagensDestacados(numeroAleatorio3, personagem3);
PersonagensDestacados(numeroAleatorio4, personagem4);
PersonagensDestacados(numeroAleatorio5, personagem5);

function ConsultaPersonagem (idPersonagem){
    const resultado = fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`)
        .then((response) => 
            response.json()
        ).then((dados) =>{
            return dados;
        })
    return resultado;
}

function ConsultaEpisodio (idEpisodio){
    const resultado = fetch(`https://rickandmortyapi.com/api/episode/${idEpisodio}`)
        .then((response) => 
            response.json()
        ).then((dados) =>{
            return dados;
        })
    return resultado;
}

btnPersonagem.addEventListener('click', async ()=>{
    if(idPersonagem.value <= 826 &&  idPersonagem.value >= 1){
        const dadosPersonagem = await ConsultaPersonagem(idPersonagem.value);
        console.log(dadosPersonagem);
        if (dadosPersonagem){
            tituloPersonagem.textContent = dadosPersonagem.name;
            genderPersonagem.textContent = dadosPersonagem.gender;
            episodesPersonagem.textContent = dadosPersonagem.episode.length > 1 ? `Esteve em  ${dadosPersonagem.episode.length} episódios` : `Esteve em  ${dadosPersonagem.episode.length} episódio`;
            statusPersonagem.textContent = dadosPersonagem.status;

            switch(dadosPersonagem.status){
                case 'Alive': 
                statusPersonagem.style.color = 'green';
                break;

                case 'Dead': 
                statusPersonagem.style.color = 'red';
                break;

                case 'unknown': 
                statusPersonagem.style.color = 'orange';
                break;
            }

            speciePersonagem.textContent = dadosPersonagem.species;
            imgPersonagem.setAttribute('src', dadosPersonagem.image);
        } else{
            alert("Algo de errado")
        }
    } else{
        alert("Digite um valor entre 1 e 826")
    }
})

btnEpisodio.addEventListener('click', async ()=>{
    if(idEpisodio.value <= 51 &&  idEpisodio.value >= 1){
        const dadosEpisodio = await ConsultaEpisodio(idEpisodio.value);
        console.log(dadosEpisodio);
        const listaPersonagens = document.querySelector('.lista-personagens')
        dadosEpisodio.characters.map(async item => {
            const textoPersonagem = document.createElement('p');
            const personagem = await fetch(item)
                .then((response) => 
                    response.json()
                ).then((dados) =>{
                    return dados;
                })
            textoPersonagem.textContent = personagem.name
            listaPersonagens.appendChild(textoPersonagem);
        })
        if (dadosEpisodio){
            tituloEpisodio.textContent = dadosEpisodio.name;
            personagensEpisodio.textContent = dadosEpisodio.characters.length > 1 ? `Houve presença de ${dadosEpisodio.characters.length} personagens` : `Houve presença de ${dadosEpisodio.characters.length} personagem`;
            sequenciaEpisodio.textContent = dadosEpisodio.episode;
            dataEpisodio.textContent = dadosEpisodio.air_date;

        } else{
            alert("Algo de errado")
        }
    } else{
        alert("Digite um valor entre 1 e 51")
    }
})
