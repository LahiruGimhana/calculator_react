import React from 'react';
import './Result.css';
import {useSelector } from 'react-redux';


function Result() {

    // const Result = useSelector(state => { return state.calculation_data })
            // {/* <p placeholder="Result" style={{textAlign:'left',paddingTop:'0px', backgroundColor:'rgb(77, 79, 82)'}}>Standard</p> */}

    return (
        <div>
            <div className="row" id='Result_History'>
                {/* <div class="alert alert-dark" id="alert" role="alert" style={{height:'5px'}}>
                    <p placeholder="Result">{Result.Result}</p>
                </div> */}
                {/* <span class="label label-default">{Result.Result}{Result.lastOpr}</span> */}
            </div>
            <div className="row" id='Result'>
                {/* <div class="alert alert-dark" id="alert" role="alert" style={{height:'50px'}}> */}
                <span class="label label-default" id="alert"  style={{height:'50px'}}>
                    {/* <p placeholder="Result">{Result.Result}</p> */}
                </span>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Result
