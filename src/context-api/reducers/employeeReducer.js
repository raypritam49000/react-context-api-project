import employeeConstants from "../constants/employee";

export function fetchEmployeesReducer(state = {}, action) {
    switch (action.type) {
        case employeeConstants.GET_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case employeeConstants.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        case employeeConstants.GET_EMPLOYEES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export function fetchEmployeeReducer(state = {}, action) {
    switch (action.type) {
        case employeeConstants.GET_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case employeeConstants.GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        case employeeConstants.GET_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

