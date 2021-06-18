import React from 'react';
import './keypad.css';
import { Card } from 'antd';

function keypad() {

    const gridStyle = {
        width: '25%',
        height: '9vh',
        textAlign: 'center',
        paddingTop:'1.5vh',
        paddingBottom:'1vh  ',
        borderColor: 'coral'

      };
    
    return (
        <div className="keypad">
   
            <div className="row">
                <Card.Grid style={gridStyle}>C</Card.Grid>
                <Card.Grid style={gridStyle}>x</Card.Grid>
                <Card.Grid style={gridStyle}>%</Card.Grid>
                <Card.Grid style={gridStyle}>/</Card.Grid>
            </div>

            <div className="row">
                <Card.Grid style={gridStyle} id="num">7</Card.Grid>
                <Card.Grid style={gridStyle} id="num">8</Card.Grid>
                <Card.Grid style={gridStyle} id="num">9</Card.Grid>
                <Card.Grid style={gridStyle}>*</Card.Grid>
            </div>
            <div className="row">
                <Card.Grid style={gridStyle} id="num">4</Card.Grid>
                <Card.Grid style={gridStyle} id="num">5</Card.Grid>
                <Card.Grid style={gridStyle} id="num">6</Card.Grid>
                <Card.Grid style={gridStyle}>-</Card.Grid>
            </div>
            <div className="row">
                <Card.Grid style={gridStyle} id="num">1</Card.Grid>
                <Card.Grid style={gridStyle} id="num">2</Card.Grid>
                <Card.Grid style={gridStyle} id="num">3</Card.Grid>
                <Card.Grid style={gridStyle}>+</Card.Grid>
            </div>
            <div className="row">
                <Card.Grid style={gridStyle} id="num">+/-</Card.Grid>
                <Card.Grid style={gridStyle} id="num">0</Card.Grid>
                <Card.Grid style={gridStyle} id="num">.</Card.Grid>
                <Card.Grid style={gridStyle}>=</Card.Grid>
            </div>        
        </div>
    )
}

export default keypad
