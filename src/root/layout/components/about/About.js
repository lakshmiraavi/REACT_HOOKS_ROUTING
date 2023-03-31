import React, { Component } from 'react';
import PropTypes from 'prop-types';

let About = ()=>{

    
    
        return (
            <React.Fragment>
            <section className="p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4 className='text-teal'>About Us</h4>
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
                                        <p className="h4">ABOUT US</p>
                                     </div>
                                     <div className="card-body">
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                APP NAME : <span className='font-weight-bold'>React Routing</span>
                                            </li>
                                            <li className='list-group-item'>
                                                VERSION : <span className='font-weight-bold'>V.0.1</span>
                                            </li>
                                            <li className='list-group-item'>
                                                AUTHOR : <span className='font-weight-bold'>LAKSHMI RAAVI</span>
                                            </li>
                                        </ul>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </React.Fragment>
        );
    }




export default About;