import employeeConstants from "../constants/employee";

export const getAllEmployeeRequest = () => {
    return { type: employeeConstants.GET_EMPLOYEES_REQUEST }
}

export const getAllEmployeeSuccess = (employees) => {
    return { type: employeeConstants.GET_EMPLOYEES_SUCCESS, payload: employees }
}

export const getAllEmployeeFailure = (error) => {
    return { type: employeeConstants.GET_EMPLOYEES_SUCCESS, payload: error }
}

export const getEmployeeRequest = () => {
    return { type: employeeConstants.GET_EMPLOYEE_REQUEST }
}

export const getEmployeeSuccess = (employee) => {
    return { type: employeeConstants.GET_EMPLOYEE_SUCCESS, payload: employee }
}

export const getEmployeeFailure = (error) => {
    return { type: employeeConstants.GET_EMPLOYEE_FAILURE, payload: error }
}

export const deleteEmployeeRequest = () => {
    return { type: employeeConstants.DELETE_EMPLOYEE_REQUEST }
}

export const deleteEmployeeSuccess = (id) => {
    return { type: employeeConstants.DELETE_EMPLOYEE_SUCCESS, payload: id }
}

export const deleteEmployeeFailure = (error) => {
    return { type: employeeConstants.DELETE_EMPLOYEE_FAILURE, payload: error }
}

export const addEmployeeRequest = () => {
    return { type: employeeConstants.ADD_EMPLOYEE_REQUEST }
}

export const addEmployeeSuccess = (employee) => {
    return { type: employeeConstants.ADD_EMPLOYEE_SUCCESS, payload: employee }
}

export const addEmployeeFailure = (error) => {
    return { type: employeeConstants.ADD_EMPLOYEE_FAILURE, payload: error }
}

export const updateEmployeeRequest = () => {
    return { type: employeeConstants.UPDATE_EMPLOYEE_REQUEST }
}

export const updateEmployeeSuccess = (employee) => {
    return { type: employeeConstants.UPDATE_EMPLOYEE_SUCCESS, payload: employee }
}

export const updateEmployeeFailure = (error) => {
    return { type: employeeConstants.UPDATE_EMPLOYEE_FAILURE, payload: error }
}