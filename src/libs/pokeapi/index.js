/**
 * @flow
 */

const API: string = 'https://pokeapi.co/api/v2';
const POKEMON: string = 'pokemon';



export const pokemon = (name: string) => fetch(`${API}/${POKEMON}/${name.toLowerCase()}/`).then(res => {
  if (!res.ok) {
    throw new Error("Not Found")
  }
  return res.json();
});

export default {
  pokemon
};

