
## Documentação da API


### Url Base

```http
  GET https://rickandmortyapi.com/api
```

#### Retorna todos os personagens

```http
  GET /caracter
```
Sendo ao todo 826 personagens.

#### Retorna um personagem específico 

```http
  GET /caracter/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do personagem que você quer |

#### Retorna todos os episódio

```http
  GET /episode
```
Sendo ao todo 51 episódios.

#### Retorna um episódio específico 

```http
  GET /episode/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `int` | **Obrigatório**. O ID do episódio que você quer |

## Documentação de cores

| Cores               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Azul claro       | ![#02b0c7](https://via.placeholder.com/10/02b0c7?text=+) #02b0c7 |
| Azul escuro       | ![#16173b](https://via.placeholder.com/10/16173b?text=+) #16173b |
| Amarela       | ![#faf174](https://via.placeholder.com/10/faf174?text=+) #faf174 |
| Branco       | ![#fefefe](https://via.placeholder.com/10/fefefe?text=+) #fefefe |
| Verde       | ![#a7ca3e](https://via.placeholder.com/10/a7ca3e?text=+) #a7ca3e |

## Funcionalidades

- Buscar personagem escolhido
- Exibir informações do personagem escolhido
- Gerar fotos de personagem aleatório
- Buscar episódio escolhido
- Exibir informações do episódio escolhido

