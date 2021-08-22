import * as app from './index';
import * as myDom from './dom';
const saveAndRender = () => {
  saveToLocal();
  app.render();
};

const clearData = () => {
  myDom.userLocation.value = '';
};

const saveToLocal = () => {
  localStorage.setItem(
    myDom.LOCAL_STORAGE_KEY,
    JSON.stringify(myDom.totalList)
  );
};

export { saveAndRender, clearData };
