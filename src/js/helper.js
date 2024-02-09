export const TIME_OUT_SECONDS = 10;
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
export const RES_PER_PAGE = 10;
export const FETCH_RECIPE_JS_DATA = async function (id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    if (!response.status) {
      throw new Error('Something went wrong...');
    }
    return data;
  } catch (error) {}
};
export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
