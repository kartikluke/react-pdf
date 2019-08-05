import PNG from 'upng-js';

PNG.isValid = function(data) {
  try {
    return !!PNG.decode(data);
  } catch (e) {
    return false;
  }
};

PNG.load = function(data) {
  try {
    let decoded_data = PNG.decode(data);
    decoded_data.pixel_array = decoded_data.data;
    decoded_data.data = data;
    return decoded_data;
  } catch (e) {
    return false;
  }
}

export default PNG;
