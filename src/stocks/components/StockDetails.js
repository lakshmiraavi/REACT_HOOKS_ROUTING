import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios'
import { Link, useParams } from 'react-router-dom';

let StockDetails =()=>{
    let stockId= useParams().stock_id;
    let [selectedStock,setSelectedStock] = useState({});
    let [errMsg,setErrMsg] = useState('');

    useEffect(()=>{
        getStock();
    },[])

    let getStock = ()=>{
        let dataURL = 'https://gist.githubusercontent.com/lakshmiraavi/3b3d742a4d6abcbf3d689376fd815ad3/raw/337f7ee9a596ca812247daea5dcd6e37851ca76f/mockarooStocksData.json'
        Axios.get(dataURL).then((response)=>{
            let stocks = response.data;
            let stock = stocks.find(stock=>{
                return stock.id === stockId
            })
            setSelectedStock(stock);
            

        }).catch((error)=>{
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
                                <h4 className='text-teal'>STOCK LIST</h4>
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
                                         <p className="h4">{selectedStock.name}</p>
                                    </div>
                                    <div className="card-body bg-light">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                STOCK ID: <span className='font-weight-bold'>{selectedStock.id}</span>
                                            </li>
                                            <li className="list-group-item">
                                                STOCK NAME: <span className='font-weight-bold'>{selectedStock.name}</span>
                                            </li>
                                            <li className="list-group-item">
                                                INDUSTRY: <span className='font-weight-bold'>{selectedStock.industry}</span>
                                            </li>
                                            <li className="list-group-item">
                                                MARKET: <span className='font-weight-bold'>{selectedStock.market}</span>
                                            </li>
                                            <li className="list-group-item">
                                                SYMBOL: <span className='font-weight-bold'>{selectedStock.symbol}</span> 
                                            </li>
                                            <li className="list-group-item">
                                                CURRENCY: <span className='font-weight-bold'>{selectedStock.currency}</span>
                                            </li>
                                        </ul>
                                        <Link to={`/stocks`} className='btn btn-teal btn-sm'>Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        </React.Fragment>
        );
    }

export default StockDetails;