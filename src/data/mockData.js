import { tokens } from "../theme";

export const mockBarData = [
  {
    Hora: "13:00",
    "Ventas por Hora": 1,
  },
  {
    Hora: "14:00",
    "Ventas por Hora": 5,
  },
  {
    Hora: "15:00",
    "Ventas por Hora": 8,
  },
  {
    Hora: "16:00",
    "Ventas por Hora": 2,
  },
  {
    Hora: "17:00",
    "Ventas por Hora": 9,
  },
  {
    Hora: "18:00",
    "Ventas por Hora": 10,
  },
  {
    Hora: "19:00",
    "Ventas por Hora": 2,
  },
];

export const mockLineData = [
  {
    id: "Entradas",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "13:00",
        y: 10,
      },
      {
        x: "14:00",
        y: 20,
      },
      {
        x: "15:00",
        y: 25,
      },
      {
        x: "16:00",
        y: 8,
      },
      {
        x: "17:00",
        y: 30,
      },
      {
        x: "18:00",
        y: 5,
      },
      {
        x: "19:00",
        y: 7,
      },
    ],
  },
];
