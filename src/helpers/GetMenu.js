export const GetMenu = async() => {
  try {
    const url = ``;
    const response = await fetch(url);
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('There has been an error while getting the menu: ', error);
  }
}