"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("./modules");
//import { Name } from "./modules/name";
//import { WeatherLocation } from "./modules/weather";
let name = new modules_1.Name("Adam", "Freeman");
let loc = new modules_1.WeatherLocation("raining", "London");
console.log(name.nameMessage);
console.log(loc.weatherMessage);
