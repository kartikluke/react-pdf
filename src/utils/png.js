import PNG from 'upng-js';

PNG.isValid = function(data) {
  try {
    return !!PNG.decode(data);
  } catch (e) {
    return false;
  }
};

export default PNG;
