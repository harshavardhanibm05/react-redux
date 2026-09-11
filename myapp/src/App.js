import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import PayloadContainer from './components/PayloadContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer />
      {/* <ItemContainer cake/>
      <ItemContainer />

      <CakeContainer />
      <IceCreamContainer />
      <HookCakeContainer />
      <PayloadContainer /> */}
    </div>
    </Provider>
  );
}

export default App;
