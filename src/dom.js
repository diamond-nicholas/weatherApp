export const userLocation = document.querySelector('.user_input');
export const userLocationForm = document.querySelector('.user_location_form');
export const tempDisplay = document.querySelector('.tempFigures');
export const figuresContainer = document.querySelector('.figures-container');

export const LOCAL_STORAGE_KEY = 'task.totalList';
export const imgApi = document.querySelector('.giphy');
export const checkConverter = document.querySelector('.form-check-input');

export const totalList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
// export const TOKEN = '0cf445a88889f0cf5a9d5efd11501067';
