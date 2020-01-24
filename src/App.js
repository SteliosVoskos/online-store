import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Basket from './containers/Basket/Basket';
import Home from './containers/Home/Home';
import Products from './containers/Products/Products';
import ProductDetails from './containers/Products/ProductDetails';
import Register from './containers/Forms/Register';
import Login from './containers/Forms/Login';
import Navigation from './components/Navigation/Navigation';
import CheckoutForm from './containers/Basket/CheckoutForm';
import ThankYou from './containers/ThankYou/ThankYou';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <div>
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/basket" component={Basket} />
            <Route path="/thank-you" component={ThankYou} />
            <Route path="/checkout" component={CheckoutForm} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
