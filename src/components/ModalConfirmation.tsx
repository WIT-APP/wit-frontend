
const ModalConfirmation = ({ onConfirm, onCancel, applicantName, nuevoEstado }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Confirmación de Cambio de Estado</h2>
        <p>
          ¿Está seguro de que desea cambiar el estado de <strong>{applicantName}</strong> a <strong>{nuevoEstado}</strong>?
        </p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onConfirm}
            className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded mr-4"
          >
            Confirmar
          </button>
          <button
            onClick={onCancel}
            className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmation;
