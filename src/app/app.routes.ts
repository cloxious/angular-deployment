import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    title: "Home • Viziata",
    loadComponent: () =>
      import("./home/home.component").then((c) => c.HomeComponent),
  },
  {
    path: "post/:id",
    loadComponent: () =>
      import("./post/post.component").then((c) => c.PostComponent),
  },
];
