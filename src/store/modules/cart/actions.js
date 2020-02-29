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

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    data: { id, amount },
  };
}
