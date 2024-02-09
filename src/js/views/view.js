import icon from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    this._data = data;

    const markup = this._getMarkup();
    this._clear();
    this._parrentEL.insertAdjacentHTML('afterbegin', markup);
  }

  spinner() {
    const markup = `<div class="spinner">
      <svg>
        <use href="${icon}#icon-loader"></use>
      </svg></div> `;
    this._clear();
    this._parrentEL.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
        <div>
          <svg>
            <use href="${icon}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parrentEL.insertAdjacentHTML('afterbegin', markup);
  }
  renderSucces(message = this._message) {
    const markup = `<div class="error">
      <div>
        <svg>
          <use href="${icon}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>`;
    this._clear();
    this._parrentEL.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parrentEL.innerHTML = '';
  }
}
