import React, { useReducer } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import { fetchEmployeeReducer, fetchEmployeesReducer } from '../reducers/employeeReducer';

const EmployeeContext = createContext(null);

const initialState = {
    fetchEmployees: fetchEmployeesReducer(undefined, {}),
    fetchEmployee: fetchEmployeeReducer(undefined, {})
};

function employeeReducer(state, action) {
    return {
        fetchEmployees: fetchEmployeesReducer(state.fetchEmployees, action),
        fetchEmployee: fetchEmployeeReducer(state.fetchEmployee, action)
    };
}

// Logger Middleware
const loggerMiddleware = (reducer) => (state, action) => {
    console.group('Action:', action.type);
    console.log('Previous State:', state);
    const nextState = reducer(state, action);
    console.log('Next State:', nextState);
    console.groupEnd();
    return nextState;
  };

const EmployeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(loggerMiddleware(employeeReducer), initialState);

    return (
        <EmployeeContext.Provider value={{ state, dispatch }}>
            {children}
        </EmployeeContext.Provider>
    );
}

const useEmployeeContext = () => {
    return useContextSelector(EmployeeContext, (context) => {
        if (!context) {
            throw new Error('useEmployeeContext must be used within an EmployeeProvider');
        }
        return context;
    });
};

export { EmployeeProvider, useEmployeeContext };
