const tituloPersonagem = document.querySelector('.titulo-personagem');
const genderPersonagem = document.querySelector('.gender-personagem');
const episodesPersonagem = document.querySelector('.episodes-personagem')
const statusPersonagem = document.querySelector('.status-personagem');
const speciePersonagem = document.querySelector('.specie-personagem');

const imgPersonagem = document.querySelector('.img-personagem')
const idPersonagem = document.querySelector('#idPersonagem');
const btnPersonagem = document.querySelector('#enviaPersonagem');

function ConsultaPersonagem (idPersonagem){
    const resultado = fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`)
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