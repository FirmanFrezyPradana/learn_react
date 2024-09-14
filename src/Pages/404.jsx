import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex justify-center flex-col min-h-screen items-center ">
      <h1 className="text-3xl font-bold">!OOPS</h1>
      <p className="text-xl my-2">sorry, an unexpeced error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;
