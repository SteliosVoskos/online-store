import * as actionType from '../actions/actionTypes';
import blondeRoast from './assets/blondeRoast.jpg';
import darkRoast from './assets/darkRoast.jpg';
import mediumRoast from './assets/mediumRoast.jpg';
import arabica from './assets/arabica.jpg';
import coffeeMachine from './assets/coffeeMachine.jpg';
import espressoMaker from './assets/espressoMaker.jpg';
import latte from './assets/latte.jpg';
import flatWhite from './assets/flatWhite.jpg';

const initialState = {
    basket: [],
    productList: [],
    selectedProduct: null,
    totalPrice: 0
};


const products = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOAD_PRODUCTS:
            return Object.assign({}, state, {
                productList: [
                    {
                        id: 1,
                        image: blondeRoast,
                        title: "Colombian blonde roast",
                        description: '500g of grade A Colombian blonde roast.',
                        rating: 4.5,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: true,
                        isOffer: true,
                        price: 7,
                        newPrice: 6.2
                    },
                    {
                        id: 2,
                        image: darkRoast,
                        title: "Egyptian dark roast",
                        description: '500g of grade A Egyptian dark roast.',
                        rating: 4.3,
                        isCl: false,
                        isKg: true,
                        isVegan: false,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: 8.5,
                        newPrice: 8.0
                    },
                    {
                        id: 3,
                        image: mediumRoast,
                        title: "500g Arabica medium roast",
                        description: '500g of grade A Arabica medium roast.',
                        rating: 4.8,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: true,
                        isOffer: false,
                        price: 8.5,
                        newPrice: 0
                    },
                    {
                        id: 4,
                        image: arabica,
                        title: "850g Arabica medium roast",
                        description: '850g of quality onions. Country of origin: Cyprus',
                        rating: 4.3,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: 8.5,
                        newPrice: 8.
                    },
                    {
                        id: 5,
                        image: coffeeMachine,
                        title: "Coffee pod machine",
                        description: 'High quality and precision coffee machine. It accepts all coffee pods',
                        rating: 4.9,
                        isCl: false,
                        isKg: true,
                        isVegan: false,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: 90,
                        newPrice: 70
                    },
                    {
                        id: 6,
                        image: espressoMaker,
                        title: "Italian expresso maker",
                        description: 'One of the best coffee machines for making espresso',
                        rating: 4.8,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: false,
                        price: 10.5,
                        newPrice: 0.
                    },
                    {
                        id: 7,
                        image: latte,
                        title: "Latte",
                        description: 'Come and enjoy our series of lattes at one of our stores.',
                        rating: 4.7,
                        isCl: false,
                        isKg: true,
                        isVegan: false,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: false,
                        price: 2.5,
                        newPrice: 0
                    },
                    {
                        id: 8,
                        image: flatWhite,
                        title: "Flat white",
                        description: 'Come and enjoy a high quality flat white at one of our stores.',
                        rating: 4.6,
                        isCl: false,
                        isKg: true,
                        isVegan: false,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: 2.3,
                        newPrice: 2.
                    }
                ]
            })
        case actionType.LOAD_MEAT_PRODUCTS:
            return state.productList.filter(product => product.category === "meat");
        case actionType.LOAD_VEGETABLE_PRODUCTS:
            return state.productList.filter(product => product.category === "vegetables");
        case actionType.VIEW_PRODUCT:
            return Object.assign({}, state, {
                selectedProduct: state.productList.find(product => product.id === action.id)
            })
        case actionType.ADD_TO_BASKET: {
            const newState = Object.assign({}, state, {
                basket: state.basket.concat(action.item)
            });

            if (newState.basket.length > 0) {
                return Object.assign({}, state, {
                    basket: newState.basket,
                    totalPrice: newState.basket.reduce((accumulator, current) => {
                        if (current.isOffer === true) {
                            return accumulator + current.newPrice;
                        }
                        return accumulator + current.price;
                    }, 0)
                })
            }

            return newState;
        }
        case actionType.DELETE_BASKET_ITEM:
            return Object.assign({}, state, {
                basket: state.basket.filter(product => product.id !== action.id)
            });
        case actionType.CLEAR_BASKET:
            return Object.assign({}, state, {
                basket: [],
                totalPrice: 0
            })
        default:
            return state;
    }
}

export default products;