import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Link } from 'react-router-dom';

let EmployeeList = () => {
    let [employees, setEmployees] = useState([]);
    let [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        getAllEmployees();
    }, [])

    let getAllEmployees = () => {
        let dataURL = 'https://gist.githubusercontent.com/lakshmiraavi/09a5d1bfead3188e0afc020dfc5f7846/raw/fec219a2665845c1170f1a03eea7aaea096621ea/mockarooEmployeeData.json'

        Axios.get(dataURL).then((response) => {
            setEmployees(response.data)
        }).catch((error) => {
            console.error(error);
            setErrMsg(error);
        });
    }

        return (
            <React.Fragment>
                <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4 className='text-teal'>Employees Info</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque exercitationem magni saepe. Distinctio, facere, in ab quidem voluptatum voluptas dignissimos aut laboriosam obcaecati autem omnis hic tempore, atque tempora.</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {
                                    employees.length > 0 ?
                                        <React.Fragment>
                                            <table className='table table-striped table-hover table-light text-center '>
                                                <thead className='bg-teal text-white'>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>FULL NAME</th>

                                                        <th>GENDER</th>
                                                        <th>EMAIL</th>
                                                        <th>COUNTRY</th>
                                                        <th>IP ADDRESS</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        employees.map((employee) => {
                                                            return (

                                                                <tr key={employee.id}>
                                                                    <td>{employee.id}</td>
                                                                    <td>
                                                                        <Link to={`/employees/${employee.id}`} className="font-weight-bold text-teal">{employee.first_name} {employee.last_name}
                                                                        </Link>
                                                                    </td>
                                                                    <td>{employee.gender}</td>
                                                                    <td>{employee.email}</td>
                                                                    <td>{employee.country}</td>
                                                                    <td>{employee.ip_address}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>

                                            </table>
                                        </React.Fragment> : null
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }



export default EmployeeList;