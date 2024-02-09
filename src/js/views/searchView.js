import View from './view';
import icon from 'url:../../img/icons.svg';

class SearchView extends View {
  _parentELement = document.querySelector('.search');
  getQuery() {
    const query = this._parentELement.querySelector('.search__field').value;
    this._parentELement.querySelector('.search__field').value = '';
    return query;
  }
  addHandlerSearch(handlerFnc) {
    this._parentELement.addEventListener('submit', e => {
      e.preventDefault();
      handlerFnc();
    });
  }
}
export default new SearchView();
