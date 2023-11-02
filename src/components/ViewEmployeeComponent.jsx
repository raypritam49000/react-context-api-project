import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useEmployeeContext } from '../context-api/context-store/employeeContext';
import { fetchEmployeeAction } from '../context-api/actions/employeeAction';

const ViewEmployeeComponent = () => {

    const { id } = useParams();
    const { state, dispatch } = useEmployeeContext();


    useEffect(() => {
        if (id !== undefined) {
            fetchEmployeeAction(dispatch, id);
        }
    }, [id]);


    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Employee First Name: </label>
                        <div> {state?.fetchEmployee?.items?.firstName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Last Name: </label>
                        <div> {state?.fetchEmployee?.items?.lastName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Email ID: </label>
                        <div> {state?.fetchEmployee?.items?.emailId}</div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ViewEmployeeComponent