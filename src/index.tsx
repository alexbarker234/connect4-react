import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import AppRoutes from "./AppRoutes";
import { MemoryRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    // <React.StrictMode>
        <MemoryRouter>
            <AppRoutes />
        </MemoryRouter>
    // </React.StrictMode>
);
