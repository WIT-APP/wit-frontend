import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  
  interface UnsavedChangesConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onContinue: () => void;
  }
  
export const UnsavedChangesConfirmationDialog = ({  isOpen,
    onClose,
    onContinue,}: UnsavedChangesConfirmationDialogProps )  => {
    return (
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cambios Sin Guardar</AlertDialogTitle>
            <AlertDialogDescription>
            Tienes cambios sin guardar. ¿Estás seguro/a de que quieres salir?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onClose}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={onContinue}>Salir de la Pagina</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  