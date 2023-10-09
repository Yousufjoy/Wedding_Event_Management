import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <h1 className="text-4xl font-semibold text-red-600 mb-4">Oops!</h1>
      <p className="text-xl text-gray-700 mb-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-lg text-gray-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
