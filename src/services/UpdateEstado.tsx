export async function UpdateEstado(id:string | number, nuevoEstado:string) {
    const url = `http://localhost:3000/applicant/update-estado/${id}`;
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ estado: nuevoEstado }),
    };
  
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('Error al actualizar el estado');
      }
      const data = await response.json();
      return data; // Puedes retornar la respuesta si necesitas hacer algo con ella en tu aplicación
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
      throw error;
    }
  }

