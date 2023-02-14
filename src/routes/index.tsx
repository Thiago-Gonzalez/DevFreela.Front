import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { AppDefaultLayout } from "../containers/AppDefaultLayout"
import routes from "./routes";

export const Router = () => {

    const router = (
      createBrowserRouter( createRoutesFromElements(
      <Route path="/" element={<AppDefaultLayout />}>
        {routes.map(({ path, component }, index) => {
          const Component = component;

          return (
            <Route
              key={index}
              path={path}
              element={
                <React.Suspense fallback={<>Carregando...</>}>
                  <Component />
                </React.Suspense>
              }
            />
          );
        })}
      </Route>
      ) )
    );

    return <RouterProvider router={router} />
}