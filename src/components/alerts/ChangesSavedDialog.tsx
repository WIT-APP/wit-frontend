import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from '@/components/ui/alert-dialog';
  
  interface SuccessDialogProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
 export const ChangesSavedDialog = ({ isOpen, onClose }: SuccessDialogProps) => {
    return (
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cambios Guardados Exitosamente</AlertDialogTitle>
            <AlertDialogDescription>
              Los cambios se han guardado exitosamente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={onClose}>Cerrar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };