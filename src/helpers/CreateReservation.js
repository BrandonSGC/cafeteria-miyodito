export const CreateReservation = async (data) => {
  try {
    const url = `https://tiusr29pl.cuc-carrera-ti.ac.cr/MiYoditoAPI2/Api/cafeteria/reservas`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })

    console.log(response);

    if (response.ok) {
      const message = await response.json();
      console.log(message);
    }

  } catch (error) {
    console.error('There has been an error while creating the reservation: ', error);
  }
}