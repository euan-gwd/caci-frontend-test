export async function fetchSpaceShip({ queryKey }) {
  const url = queryKey[1];
  const apiRes = await fetch(url);
  if (!apiRes.ok) {
    throw new Error(`Error fetching ships from ${url}`);
  }
  return await apiRes.json();
}
