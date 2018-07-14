import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            names:['Alexa','Jessica','Chris','Sarah','Jen','Ashley','Kevin','Emily'],
            userInput:'',
            filteredNamesArray: []
        };
    }


    handleChange(val){
        this.setState({userInput: val});
    }

    filterNames(userInput){
        var names = this.state.names;
        var doneNames = [];
        for(var i=0;i<names.length;i++){
            if(names[i].includes(userInput)){
                doneNames.push(names[i]);
            }
        }
    this.setState({filteredNamesArray:doneNames})
    }


    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.names,null,10)}</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names:{JSON.stringify(this.state.filteredNamesArray, null,10)}</span>
            </div>
        )
    }
}