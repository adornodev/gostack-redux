export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    data: { id },
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    data: { product },
  };
}

export function removeFromCart(productId) {
  return {
    type: '@cart/REMOVE',
    data: { id: productId },
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    data: { id, amount },
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    data: { id, amount },
  };
}
