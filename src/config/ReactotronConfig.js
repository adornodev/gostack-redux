import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

// o create react app insere NODE_ENV em nossa variavel de ambiente
// com o valor development quando rodar yarn start (modo debug)

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '192.168.0.51' })
    .use(reactotronRedux())
    .connect();

  tron.clear();
  console.tron = tron;
}
