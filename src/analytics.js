// src/analytics.js
import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-J2JD0TKY14"; // ID do seu print

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
