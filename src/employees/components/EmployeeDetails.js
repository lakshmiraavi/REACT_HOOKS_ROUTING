import React, { Component, useEffect, useState } from 'react';
import  Axios  from 'axios';
import {Link, useParams} from 'react-router-dom'



let EmployeeDetails=()=>{
    let empId = useParams().emp_id;
    let [selectedEmployee,setSelectedEmployee] = useState({});
    let [errMsg,setErrMsg] = useState('')

    useEffect(()=>{
        getEmployee()
    },[])

    let getEmployee = () => {
        let dataURL = 'https://gist.githubusercontent.com/lakshmiraavi/09a5d1bfead3188e0afc020dfc5f7846/raw/fec219a2665845c1170f1a03eea7aaea096621ea/mockarooEmployeeData.json'

        Axios.get(dataURL).then((response) => {
            let employees = response.data;
            let employee = employees.find(employee =>  employee.id === empId)
            setSelectedEmployee(employee)
        }).catch((error) => {
            console.error(error);
            setErrMsg(error)
        
        });
    }

      
        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4 className='text-teal'>Employees Details</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque exercitationem magni saepe. Distinctio, facere, in ab quidem voluptatum voluptas dignissimos aut laboriosam obcaecati autem omnis hic tempore, atque tempora.</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header bg-teal text-white">
                                        <p className="h4">{selectedEmployee.first_name} {selectedEmployee.last_name}</p>
                                    </div>
                                    <div className="card-body bg-light">
                                        <ul className='list-group'>
                                            <li className='list-group-item '>
                                               NAME: {selectedEmployee.first_name} {selectedEmployee.last_name}
                                            </li>
                                            <li className='list-group-item'>
                                               GENDER: {selectedEmployee.gender} 
                                            </li>
                                            <li className='list-group-item'>
                                               EMAIL: {selectedEmployee.email} 
                                            </li>
                                            <li className='list-group-item'>
                                               COUNTRY: {selectedEmployee.country} 
                                            </li>
                                            <li className='list-group-item'>
                                               IP_ADDRESS: {selectedEmployee.ip_address} 
                                            </li>

                                        </ul>
                                        <Link to='/employees' className='btn btn-teal btn-sm'>BACK</Link>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }



export default EmployeeDetails;
