import React from "react";
import {renderChangePercent} from '../../core/helpers'

const Table =({currencies,sorting}) =>{
  
    
    
    return(
        <div className="Table-container">
                <table className="Table">
                    <thead className="Table-head">
                        <tr >
                            <th>Cryptocurrency</th>
                            <th id="current_price"
                                onClick={sorting}>
                                Price 
                            </th>
                            <th id="market_cap">
                                Market Cap ⇵
                            </th>
                            <th id="market_cap_change_percentage_24h">
                                24H Change ⇵
                            </th>
                        </tr>
                    </thead>
                    <tbody className="Table-body">

                        {currencies.map((currency) => (
                            <tr key={currency.id}>
                                <td>
                                    <span className="Table-rank">
                                        <img
                                            style={{ width: "50px", height: "50px" }}
                                            src={currency.image}
                                        />
                                    </span>
                                    {currency.name}
                                </td>
                                <td>
                                    <span className="Table-dollar">
                                        $ {currency.current_price}
                                    </span>
                                </td>
                                <td>
                                    <span className="Table-dollar">$ {currency.market_cap}</span>
                                </td>
                                <td>
                                    {renderChangePercent(currency.market_cap_change_percentage_24h)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}
export default Table