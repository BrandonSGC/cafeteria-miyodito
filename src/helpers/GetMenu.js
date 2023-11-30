export const GetMenu = async() => {
  try {
    const url = `https://tiusr29pl.cuc-carrera-ti.ac.cr/MiYoditoAPI2/Api/cafeteria/productos`;
    const response = await fetch(url);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('There has been an error while getting the menu: ', error);
  }
}