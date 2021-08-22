export const userLocation = document.querySelector('.user_input');
export const userLocationForm = document.querySelector('.user_location_form');
export const tempDisplay = document.querySelector('.tempFigures');
export const figuresContainer = document.querySelector('.figures-container');

export const LOCAL_STORAGE_KEY = 'task.totalList';
export const imgApi = document.querySelector('.giphy');
export const checkConverter = document.querySelector('.form-check-input');

export let totalList =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
