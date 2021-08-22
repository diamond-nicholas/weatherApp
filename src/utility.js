/* eslint-disable import/no-cycle */
import * as app from './index';
import * as myDom from './dom';

const saveToLocal = () => {
  localStorage.setItem(
    myDom.LOCAL_STORAGE_KEY,
    JSON.stringify(myDom.totalList),
  );
};

const saveAndRender = () => {
  saveToLocal();
  app.render();
};

const clearData = () => {
  myDom.userLocation.value = '';
};

const toggleBackground = () => {
  document.querySelector('body').classList.toggle('newBg');
};

export { saveAndRender, clearData, toggleBackground };
