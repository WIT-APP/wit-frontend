export async function UpdateEstado(id:string | number | unknown, nuevoEstado:string) {
  const token = localStorage.getItem('token'); 


  
    const url = `https://wit-backend-factoriaf5.up.railway.app/applicant/update-estado/${id}`;
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 

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

