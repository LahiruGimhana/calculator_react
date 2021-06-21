import './Console.css';

import React from 'react';
import 'antd/dist/antd.css';
import HistoryList from './HistoryList';
import Result from './Result';
import Keypad from './Keypad';

import { Card } from 'antd';
const { Meta } = Card;


// import { Row, Col } from 'antd';

function Console() {
    return (
        <>
        <div className="container">
            <Card hoverable style={{ width: '80vw',height:'72vh',margin:'3px' }}>
            {/* <div className="mainPage"> */}
                <div className="row justify-content-center" style={{height:'60vh', padding:'0px', margin:'0'}}>
                    <div className="col-9" >
                        <div className="row" id="Result">
                            <Result/>
                        </div>
                        <div className="row" id="Keypad">
                            <Keypad/>
                        </div>
                    </div>
                    <div className="col-3" style={{height:'60vh'}}>
                        <HistoryList/>
                    </div>
                </div>
            {/* </div> */}
        </Card>
            
        </div>
        </>
    )
}

export default Console
