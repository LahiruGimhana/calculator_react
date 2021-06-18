import React ,{ useState} from 'react';
import Key from './Key';
import './Keypad.css';
import { Card, InputNumber } from 'antd';



function Keypad(props) {

    const gridStyle = {
        width: '25%',
        height: '9vh',
        textAlign: 'center',
        paddingTop:'1.5vh',
        paddingBottom:'1vh  ',
        borderColor: 'coral'
      };
     
      const [name, setName] = useState({fname:'gimhana', lname:''});

      const InputNum=(value)=>{
        //   let valu=value;
        return(
            <Key data='hello'/>
        );
      }

      const InputOpr=(operator)=>{ 
            <Key data='hello'/>
        
    }

    return (
        <div className="Keypad">
            <div className="row">
                <Card.Grid style={gridStyle} onClick={()=>setName({...name, lname: 'C'})}>C</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputOpr('x')}>x</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputOpr('%')}>%</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputOpr('/')}>/</Card.Grid>
            </div>

            <div className="row">
                <Card.Grid style={gridStyle} onClick={()=>InputNum(7)}>7</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputNum(8)}>8</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputNum(9)}>9</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputOpr('*')}>*</Card.Grid>
            </div>
            <div className="row">
                <Card.Grid style={gridStyle} onClick={()=>InputNum(4)}>4</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputNum(5)}>5</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputNum(6)}>6</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputOpr('-')}>-</Card.Grid>
            </div>
            <div className="row">
                <Card.Grid style={gridStyle} onClick={()=>InputNum(1)}>1</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputNum(2)}>2</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputNum(3)}>3</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputOpr('+')}>+</Card.Grid>
            </div>
            <div className="row">
                <Card.Grid style={gridStyle} onClick={()=>InputOpr('+/-')}>+/-</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputNum(0)}>0</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputNum('.')}>.</Card.Grid>
                <Card.Grid style={gridStyle} onClick={()=>InputOpr('=')}>=</Card.Grid>
            </div>        
        </div>
    )
}

export default Keypad
