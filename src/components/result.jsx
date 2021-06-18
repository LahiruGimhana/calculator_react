import React from 'react';
import './result.css';

function Result() {
    return (
        <div>
            <div className="row" id='result'>
            {/* <p placeholder="result" style={{textAlign:'left',paddingTop:'0px', backgroundColor:'rgb(77, 79, 82)'}}>Standard</p> */}
            <div class="alert alert-info" role="alert" style={{height:'60px'}}>
                <p placeholder="result"></p>
            </div>
            </div>
        </div>
    )
}

export default Result
