import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  // Check if the error object is an instance of Error
  if (error instanceof Error) {
    console.error(error);

    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }
}   