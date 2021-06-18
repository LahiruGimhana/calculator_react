import React from 'react';
import History from './history';

function historyList() {
    

    const history=()=>{
        return(
            <History/>
        );
    }

    return (
        <div className="row" style={{backgroundColor:'rgb(61, 66, 71)', height:'60vh', paddingTop:'20px'}}>
            {/* <ul> */}
                <ul className="list-group">
                    <div>
                        {history()}
                    </div>
                </ul>
            {/* </ul> */}
        </div>
    );
    
}

export default historyList
