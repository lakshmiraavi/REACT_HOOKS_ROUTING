import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Link } from 'react-router-dom';

let StockList =()=>{
    let [stocks,setStocks] = useState([])
    let [errMsg,setErrMsg] = useState('')
    
    useEffect(()=>{
        getAllStocks();
    },[])

    let getAllStocks = () => {
        let dataURL = 'https://gist.githubusercontent.com/lakshmiraavi/3b3d742a4d6abcbf3d689376fd815ad3/raw/337f7ee9a596ca812247daea5dcd6e37851ca76f/mockarooStocksData.json'

        Axios.get(dataURL).then((response) => {
            setStocks(response.data)

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
                            {
                                stocks.length > 0 ?
                                <React.Fragment>
                                       <table className='table table-striped table-hover table-light text-center '>
                                          <thead className='bg-teal text-white'>
                                        <tr>
                                            <th>STOCK ID</th>
                                            <th>STOCK NAME</th>
                                            
                                            <th>INDUSTRY</th>
                                            <th>MARKET</th>
                                            <th>SYMBOL</th>
                                            <th>CURRENCY</th>
                                        </tr>
                                        </thead> 
                                        <tbody>
                                            {
                                                stocks.map((stock)=>{
                                                    return(
                                                        
                                                        <tr key={stock.id}>
                                                            <td>{stock.id}</td>
                                                            <td>
                                                                <Link to={`/stocks/${stock.id}`}>{stock.name}</Link>
                                                            </td>
                                                            <td>{stock.industry}</td>
                                                            <td>{stock.market}</td>
                                                            <td>{stock.symbol}</td>
                                                            <td>{stock.currency}</td>
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



export default StockList;