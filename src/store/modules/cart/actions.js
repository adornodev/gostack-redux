export function addToCart(product) {
  return {
    type: '@cart/ADD',
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
