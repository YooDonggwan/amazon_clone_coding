export const initialState = {
    basket: [
        {
            id:"12321341",
            title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            price:11.96,
            rating:5,
            image:"https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        },
        {
            id:"12321343",
            title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            price:11.96,
            rating:5,
            image:"https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        }
    ],
    user: null,
};

////////
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

// action means to add basket
const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return { 
                ...state,
                basket:[...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0){
                //item exists in basket, remove it
                newBasket.splice(index, 1);
            } else{
                console.warn(
                    'cant remove product id: ${action.id}'
                )
            }

            return { ...state, basket: newBasket }; // basket에 제거버튼을 누르고 나서의 배열을 다시 전달
        default:
            return state;
    }
}

export default reducer;

