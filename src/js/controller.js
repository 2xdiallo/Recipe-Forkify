import icon from 'url:../img/icons.svg';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import ResultsView from './views/resultView.js';
import paginationView from './views/paginationView.js';

// console.log(recipeView);

const controlRecipe = async function () {
  try {
    
    recipeView.spinner()
    const id = window.location.hash.slice(1);
    if (!id) return;
    //load spinnet
    // recipeView.spinner();
    //get recipe data
    await model.getRecipie(id);
    //remder recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlLoadSearchResult = async function () {
  try {
    ResultsView.spinner()
    // console.log(ResultsView)
    //get search query
    const query = searchView.getQuery();
    if(!query) return
    //load  the serarch result
    await model.loadSearchResult(query);
    //render result
    // ResultsView.render(model.state.search.result)
    ResultsView.render(model.getSearchResultPage())
    // console.log(model.state.search.result)

    paginationView.render(model.state.search)
  } catch (error) {
    console.log(error);
  }
};
//


const controlPagination = function(goToPage){
  //render New result 
  ResultsView.render(model.getSearchResultPage(goToPage))
  //render New pagination buttons
  paginationView.render(model.state.search)

}

///////////////////////////////////////
// searchView.addHandlerSearch(controlLoadSearchResult);

//api key 96a15914-a4c3-464a-8409-cbe38f856fba
// const api_key = '96a15914-a4c3-464a-8409-cbe38f856fba';

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlLoadSearchResult);
  paginationView.addHandlerClick(controlPagination)
};
init();

