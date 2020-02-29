export default function cart(state = [], action) {
  // action é o objeto que enviamos com dispatch
  // state é o conteúdo anterior armazenado nesse store
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.data.product];
    default:
      return state;
  }
}
