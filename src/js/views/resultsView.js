import View from './view.js';
import icons from '../../img/icons.svg';
import previewView from './previewView.js';
import 'regenerator-runtime';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No Recipes found for your query! Please try again';
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
