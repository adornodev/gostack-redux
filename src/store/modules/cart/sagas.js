// function*: funcionalidade chamada generator. Como se fosse um "async" function.
// tem mais robustez que async/await

// o middleware é um passo a mais entre a action e o Reducer.

import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../utils/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';
import { toast } from 'react-toastify';

function* addToCart({ data: { id } }) {
  const productExists = yield select(state =>
    state.cartReducer.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
}

function* updateAmount({ data: { id, amount } }) {
  if (amount <= 0) return;

  /*
  const product = yield select(state =>
    state.cartReducer.find(p => p.id === id)
  );
  */

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

//takeLatest: se nao terminou a chamada a API, ele vai executar somente o ultimo request disparado pelo usuário
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
