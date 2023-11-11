const initialState = {
    companies: [],
    error: null,
  };
  
  const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMPANIES_SUCCESS':
        return { ...state, companies: action.payload, error: null };
  
      case 'FETCH_COMPANIES_FAILURE':
        return { ...state, companies: [], error: action.payload };
  
      case 'CREATE_COMPANY_SUCCESS':
        return { ...state, companies: [...state.companies, action.payload], error: null };
  
      case 'CREATE_COMPANY_FAILURE':
        return { ...state, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default companyReducer;