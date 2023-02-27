// @ts-nocheck
import "uno.css";
// import "./assets/css/fonts.css"
import "virtual:unocss-devtools";
import App from "./App.svelte";
import component from "svelte-tag";

new component({
  component: App,
  tagname: "svelte-widget",
  attributes: ["display", "setting"],
});
