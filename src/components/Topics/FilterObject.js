import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();

        this.state = {
            dogs: [
                {
                    name: 'Ringo',
                    color: 'blonde',
                    attribute:'adorable',
                    age: 9
                },
                {
                    name: 'Autumn',
                    color: 'black and white',
                    attribute: 'playful'
                },
                {
                    name: 'Shiloh',
                    color: 'brown and white',
                    attribute: 'chill',
                    time: 'first dog'
                }
            ],
            userInput:'',
            filteredDogsArray:[]
        }
    }
    handleChange(val){
        this.setState({userInput: val});
    }
    filterDogs(prop){
        var dogs = this.state.dogs;
        var doneDogs = [];
        for(var i=0;i<dogs.length;i++){
            if(dogs[i].hasOwnProperty(prop)){
                doneDogs.push(dogs[i]);
            }
        }
    this.setState({filteredDogsArray:doneDogs}) 
    }
     
    
    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original:{JSON.stringify(this.state.dogs)}</span>
                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.filterDogs(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered:{JSON.stringify(this.state.filteredDogsArray,null,10)}</span>
            </div>
        )
    }
}