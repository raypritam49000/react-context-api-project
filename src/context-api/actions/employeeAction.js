import EmployeeService from "../../services/EmployeeService";
import { getAllEmployeeRequest, getAllEmployeeSuccess, getAllEmployeeFailure, getEmployeeSuccess, getEmployeeRequest, getEmployeeFailure, deleteEmployeeRequest, deleteEmployeeSuccess, deleteEmployeeFailure, addEmployeeRequest, addEmployeeSuccess, addEmployeeFailure, updateEmployeeRequest, updateEmployeeSuccess, updateEmployeeFailure }
    from "../actionTypes/employeeActionType";

export const fetchAllEmployeesAction = async (dispatch) => {
    try {
        dispatch(getAllEmployeeRequest());
        const response = await EmployeeService.getEmployees();
        if (response.status === 200) {
            dispatch(getAllEmployeeSuccess(response?.data));
        }
    } catch (error) {
        dispatch(getAllEmployeeFailure(error));
    }
}

export const fetchEmployeeAction = async (dispatch, id) => {
    try {
        dispatch(getEmployeeRequest());
        const response = await EmployeeService.getEmployeeById(id);
        if (response.status === 200) {
            dispatch(getEmployeeSuccess(response?.data));
        }
    } catch (error) {
        dispatch(getEmployeeFailure(error));
    }
}

export const deleteEmployeeAction = async (dispatch, id) => {
    try {
        dispatch(deleteEmployeeRequest());
        const response = await EmployeeService.deleteEmployee(id);
        if (response.status === 200) {
            dispatch(deleteEmployeeSuccess(response?.data));
            fetchAllEmployeesAction(dispatch);
        }
    } catch (error) {
        dispatch(deleteEmployeeFailure(error));
    }
}

export const addEmployeeAction = async (dispatch, employee, navigate) => {
    try {
        dispatch(addEmployeeRequest());
        const response = await EmployeeService.createEmployee(employee);
        if (response.status === 200) {
            dispatch(addEmployeeSuccess(response?.data));
            navigate("/");
        }
    } catch (error) {
        dispatch(addEmployeeFailure(error));
    }
}

export const updateEmployeeAction = async (employeeId, employee, dispatch, navigate) => {
    try {
        dispatch(updateEmployeeRequest());
        const response = await EmployeeService.updateEmployee(employee, employeeId);
        if (response.status === 200) {
            dispatch(updateEmployeeSuccess(response?.data));
            navigate("/");
        }
    } catch (error) {
        dispatch(updateEmployeeFailure(error));
    }
}