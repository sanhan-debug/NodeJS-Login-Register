import { Router } from "express";

export const pageRoute = new Router();

pageRoute.get("/", (req, res) => {
  res.send("Yaxında...)");
});

pageRoute.get("/login", (req, res) => {
  res.render("login");
});

pageRoute.get("/register", (req, res) => {
    res.render("register");
  });