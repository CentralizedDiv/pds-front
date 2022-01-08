import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, NotFound } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { DisplaySharedComponents } from "components/shared";
import { routeGroups } from "__config/routes";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AlbumClient } from "modules/album-client/containers/album-client.container";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={HTML5Backend}>
          <Routes>
            <Route path="/" element={<App />}>
              {routeGroups.map(({ routes }) =>
                routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      route.children ? (
                        <>
                          <Outlet />
                        </>
                      ) : (
                        route.element
                      )
                    }
                  >
                    {route.children ? (
                      <>
                        {route.children.map((child) => (
                          <Route
                            key={child.path}
                            path={child.path}
                            element={child.element}
                          />
                        ))}
                        <Route index element={route.element} />
                      </>
                    ) : null}
                  </Route>
                ))
              )}
            </Route>
            <Route path="/shared" element={<DisplaySharedComponents />} />
            <Route path="/cliente">
              <Route path="albuns/:albumId" element={<AlbumClient />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DndProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
