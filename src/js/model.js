import { API_URL, RES_PER_PAGE, TIME_OUT_SECONDS, timeout } from './helper.js';
import { FETCH_RECIPE_JS_DATA } from './helper.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    page: 1,
    result: [],
    resultPerPage:RES_PER_PAGE,
  },
};

export const getRecipie = async function (id) {
  try {
    const data = await Promise.race([
      FETCH_RECIPE_JS_DATA(id),
      timeout(TIME_OUT_SECONDS),
    ]);
    //  console.log(data)
    const dataRecipe = data.data;
    // console.log(dataRecipe)
    const recipe = {
      title: dataRecipe.recipe.title,
      image: dataRecipe.recipe.image_url,
      id: dataRecipe.recipe.id,
      publisher: dataRecipe.recipe.publisher,
      serving: dataRecipe.recipe.servings,
      ingredients: dataRecipe.recipe.ingredients,
      time: dataRecipe.recipe.cooking_time,
      cookingTime: dataRecipe.recipe.cooking_time,
      ingredients: dataRecipe.recipe.ingredients,

      // description: dataRecipe.recipe.description,
    };

    state.recipe = recipe;
    // console.log(state.recipe)
  } catch (error) {
    console.error('Something went wrong : ', error);
    throw error;
  }
};

export const loadSearchResult = async function (query = 'pizza') {
  try {
    // if(!query) return

    const response = await fetch(`${API_URL}?search=${query}`);
    const data = await response.json();
    state.search.query = query;
    // state.search.result = data.data.recipes
    state.search.result = data.data.recipes.map(recipe => {
      // state.recipe.
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * RES_PER_PAGE;
  const end = page * RES_PER_PAGE;

  return state.search.result.slice(start, end);
};
