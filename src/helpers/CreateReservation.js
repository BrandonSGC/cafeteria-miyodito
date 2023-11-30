export const CreateReservation = async(data) => {
  try {
    const url = `https://tiusr29pl.cuc-carrera-ti.ac.cr/MiYoditoAPI/Api/cafeteria/reservas`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('There has been an error while getting the menu: ', error);
  }
}