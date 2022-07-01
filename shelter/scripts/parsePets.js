const petsDir = '../../scripts/pets.json';
const getData = async (url) => await (
  (await fetch(url)).json()
)
const pets = await getData(petsDir);

export {pets}