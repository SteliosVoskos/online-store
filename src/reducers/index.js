import { combineReducers } from 'redux';

import forms from './forms';
import products from './products';

export default combineReducers({
    forms,
    products
});