import icon from 'url:../../img/icons.svg';
import View from './view';

class PaginationView extends View {
  _parrentEL = document.querySelector('.pagination');

  addHandlerClick(handlerFnc) {
    // this._parrentELment.addEv
    this._parrentEL.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handlerFnc(goToPage);
    });
  }

  _getMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );
    // const numPages = 2

    //page 1 and there aare other games
    if (curPage == 1 && numPages > 1) {
      return `
         
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icon}#icon-arrow-right"></use>
        </svg>
      </button> 
        `;
    }
    //last page
    if (curPage == numPages && numPages > 1) {
      return `
    <button data-goto="${
      curPage - 1
    } " class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icon}#icon-arrow-left"></use>
        </svg>
        <span>${curPage - 1}</span>
      </button>`;
    }

    //other ppages
    if (curPage < numPages) {
      console.log(`current page : ${curPage} number Page : ${numPages}`);
      return `
    <button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icon}#icon-arrow-left"></use>
        </svg>
        <span>${curPage - 1}</span>
      </button>
    
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>${curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icon}#icon-arrow-right"></use>
        </svg>
      </button> 

    `;
    }
  }
}
export default new PaginationView();
