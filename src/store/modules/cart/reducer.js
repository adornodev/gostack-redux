import produce from 'immer';

export default function cart(state = [], action) {
  // action é o objeto que enviamos com dispatch
  // state é o conteúdo anterior armazenado nesse store
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          p => p.id === action.data.product.id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.data.product,
            amount: 1,
          });
        }
      });

    default:
      return state;
  }
}
