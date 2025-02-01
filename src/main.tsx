import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/main.css";
import "./css/main.body.css";
import "./css/main.basicElements.css";
import "./css/main.varibles.css";
import App from "./components/App/App.tsx";
import { dataInit } from "./data/block.ts";
import { mountGetPx } from "./utils/css.ts";

dataInit();
mountGetPx();

const root = createRoot(document.getElementById("root")!);

export default function load(){
    root.render(<StrictMode><App /></StrictMode>);
}
load();