async function fetchSpaceShips(url) {
  const apiRes = await fetch(url);
  if (!apiRes.ok) {
    throw new Error(`Error fetching ships from ${url}`);
  }
  return await apiRes.json();
}

export async function fetchAllSpaceShips() {
  let allSpaceShips = [];
  let url = "https://swapi.dev/api/starships/";
  while (url) {
    const ships = await fetchSpaceShips(url);
    const data = await ships;
    allSpaceShips = [...allSpaceShips, ...data.results];
    url = data.next;
  }

  const filteredShips = allSpaceShips
    .filter((ship) => parseInt(ship.crew) < 10)
    .sort((a, b) => parseInt(a.crew) - parseInt(b.crew));

  let maxFilms = 0;
  for (const ship of filteredShips) {
    if (ship.films.length > maxFilms) {
      maxFilms = ship.films.length;
    }
  }
  for (const ship of filteredShips) {
    ship.hasIcon = ship.films.length === maxFilms;
  }

  return filteredShips;
}
