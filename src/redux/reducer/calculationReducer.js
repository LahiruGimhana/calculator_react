import {GET_INPUT_VALUE } from '../action/actionTypes';


const calculationReducer=(state={result : 0, logic:'5', lastOpr:'' ,mode:'NUM'}, action)=> {
    switch(action.type){
        case GET_INPUT_VALUE:
            if(action.mode==="NUM"){
                if(state.lastOpr===''){
                    let arr=[state.result , action.Num];
                    let Result=parseInt(arr.join(""));
                    state={...state, result: Result, logic: action.Num, mode: action.mode}
                    return state;
                }
                else{
                    let Result;
                        if(state.lastOpr==='+'){
                            Result=state.result + action.Num;
                        }else if(state.lastOpr==='-'){
                            Result=state.result - action.Num;
                        }else if(state.lastOpr==='*'){
                            Result=state.result * action.Num;
                        }else if(state.lastOpr==='/'){
                            Result=state.result / action.Num;
                        }

                    let Logic={...state, logic: state.logic + action.Num};
                    state={...state, result: Result, logic: Logic, mode: action.mode};
                    return state;
                    
                    // return state;
                }
            }
            if(action.mode==="OPR"){
                if(state.lastOpr===''){
                    state={...state, logic: action.Opr, lastOpr:action.Opr, mode: action.mode}
                    return state;
                }
                // else if(action.Opr==='+'){
                else{
                    let Logic={...state, logic: state.logic + action.Opr};
                    state={...state, logic: Logic, lastOpr:action.Opr, mode: action.mode}
                    return state;
                }
            }

        default:
            return state;
    }
}

export default calculationReducer

