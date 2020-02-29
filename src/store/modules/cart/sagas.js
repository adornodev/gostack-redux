// function*: funcionalidade chamada generator. Como se fosse um "async" function.
// tem mais robustez que async/await

// o middleware é um passo a mais entre a action e o Reducer.

import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

function* addToCart({ data: { id } }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

//take latest: se nao terminou a chamada a API, ele vai executar somente o ultimo request disparado pelo usuário
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
