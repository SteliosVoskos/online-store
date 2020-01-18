import * as actionType from '../actions/actionTypes';

const initialState = {
    basket: [],
    productList: [],
    selectedProduct: null,
    totalPrice: 0,
    totalNumberOfItems: 0
};


const products = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOAD_PRODUCTS:
            return Object.assign({}, state, {
                productList: [
                    {
                        id: 1,
                        image: "https://picsum.photos/215/200",
                        title: "Carrots",
                        description: '1kg of quality Carrots',
                        rating: 4.8,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: true,
                        isOffer: true,
                        price: 1.5,
                        newPrice: 1.2
                    },
                    {
                        id: 2,
                        image: "https://picsum.photos/215/200",
                        title: "Potatoes",
                        description: '500g of quality Potatoes. Country of origin: Cyprus',
                        rating: 4.7,
                        isCl: false,
                        isKg: true,
                        isVegan: false,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: 4.5,
                        newPrice: 4.0
                    },
                    {
                        id: 3,
                        image: "https://picsum.photos/215/200",
                        title: "Sirloin steak",
                        description: '350kg of 30 day mature sirloin steak',
                        rating: 4.6,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: true,
                        isOffer: false,
                        price: 3.5,
                        newPrice: 0
                    },
                    {
                        id: 4,
                        image: "https://picsum.photos/215/200",
                        title: "onions",
                        description: '500g of quality onions. Country of origin: Cyprus',
                        rating: 4.7,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: 1.5,
                        newPrice: 1.
                    },
                    {
                        id: 5,
                        image: "https://picsum.photos/215/200",
                        title: "Turkey",
                        description: '750kg of quality turkey',
                        rating: 4.9,
                        isCl: false,
                        isKg: true,
                        isVegan: false,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: 9.7,
                        newPrice: 9
                    },
                    {
                        id: 6,
                        image: "https://picsum.photos/215/200",
                        title: "Plum tomatoes",
                        description: '500g of quality plum tomatoes. Country of origin: Cyprus',
                        rating: 4.3,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: false,
                        price: 2.5,
                        newPrice: 0.
                    },
                    {
                        id: 7,
                        image: "https://picsum.photos/215/200",
                        title: "Potatoes",
                        description: '500g of quality Potatoes. Country of origin: Cyprus',
                        rating: 4.7,
                        isCl: false,
                        isKg: true,
                        isVegan: false,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: 4.5,
                        newPrice: 4.0
                    },
                    {
                        id: 8,
                        image: "https://picsum.photos/215/200",
                        title: "Pork for souvlaki",
                        description: '1kg of quality pork for souvlaki. Country of origin: Cyprus',
                        rating: 4.5,
                        isCl: false,
                        isKg: true,
                        isVegan: false,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: 5.5,
                        newPrice: 5.
                    },
                    {
                        id: 9,
                        image: "https://picsum.photos/215/200",
                        title: "Lemonade",
                        description: '750cl of homemade lemonade',
                        rating: 4.9,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: false,
                        price: 2,
                        newPrice: 9
                    },
                    {
                        id: 10,
                        image: "https://picsum.photos/215/200",
                        title: "Spring onions",
                        description: '100g of quality plum tomatoes. Country of origin: Cyprus',
                        rating: 4.9,
                        isCl: false,
                        isKg: true,
                        isVegan: true,
                        unit: "kg",
                        isFeatured: false,
                        isOffer: true,
                        price: .9,
                        newPrice: .7
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
            return Object.assign({}, state, {
                basket: state.basket.concat(action.item)
            })
        }
        default:
            return state;
    }
}

export default products;