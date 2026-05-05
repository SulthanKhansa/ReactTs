import { Request, Response } from "express";
import { Event } from "../types/event.js";

let events: Event[] = [
  {
    id: 1,
    title: "Mobile Development",
    date: "2025-11-25",
    location: "Lab Kom D.1",
    description: "08.00 WIB - 16.30 WIB"
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    date: "2025-11-25",
    location: "Lab Kom D.2",
    description: "08.00 WIB - 16.30 WIB"
  },
  {
    id: 3,
    title: "Cyber Security",
    date: "2025-11-26",
    location: "Lab Kom D.1",
    description: "08.00 WIB - 16.30 WIB"
  }
];