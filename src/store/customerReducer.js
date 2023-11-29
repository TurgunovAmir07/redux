const initialState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD CUSTOMER";
const GET_CUSTOMER = "GET CUSTOMER";

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case GET_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const addCustomer = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
});

export const removeCustomer = (payload) => ({
  type: GET_CUSTOMER,
  payload,
});
