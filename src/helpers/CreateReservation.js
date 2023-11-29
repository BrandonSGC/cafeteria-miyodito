export const CreateReservation = async(data) => {
  try {
    const url = ``;
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