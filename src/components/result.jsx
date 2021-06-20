import React from 'react';
import './result.css';
import {useDispatch, useSelector } from 'react-redux';


function Result() {

    const Result = useSelector(state => { return state.calculation_data })

    return (
        <div>
            <div className="row" id='result'>
            {/* <p placeholder="result" style={{textAlign:'left',paddingTop:'0px', backgroundColor:'rgb(77, 79, 82)'}}>Standard</p> */}
            <div class="alert alert-info" role="alert" style={{height:'60px'}}>
                <p placeholder="result">{Result.result}</p>
            </div>
            </div>
        </div>
    )
}

export default Result
