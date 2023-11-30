export const GetMenu = async() => {
  try {
    const url = `http://localhost:57640/Api/cafeteria/productos`;
    const response = await fetch(url);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('There has been an error while getting the menu: ', error);
  }
}