import produce from 'immer';

export default function cart(state = [], action) {
  // action é o objeto que enviamos com dispatch
  // state é o conteúdo anterior armazenado nesse store
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const {
          data: { product },
        } = action;

        if (product) {
          draft.push(product);
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.data.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.data.id);
        if (productIndex >= 0) {
          if (action.data.amount <= 0) {
            draft.splice(productIndex, 1);
          } else {
            draft[productIndex].amount = Number(action.data.amount);
          }
        }
      });
    }

    default:
      return state;
  }
}
