export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.48",
    bl_lng: "25.73",
    tr_lat: "42.52",
    tr_lng: "44.86",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "386ce52a71msh4a443d37e22d4d3p1c029fjsneb7976560c98",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const headerOpt = {
  headers: {
    "X-RapidAPI-Key": "386ce52a71msh4a443d37e22d4d3p1c029fjsneb7976560c98",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
