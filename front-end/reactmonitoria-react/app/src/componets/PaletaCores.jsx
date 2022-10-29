import React from "react";
import allColors from "../data";
import ColorCard from "./ColorCard";


class PaletaCores extends React.Component {

constructor() {
   super();

   this.state = {
    searchText: ''
   }
}

    handleSearchChange = (event) => {
        this.setState({
            searchText: event.target.value
        },)
    }
    // console.log(event.target.value)


    render() {

        const filterColors = allColors.filter((colorItem) => {
            const { color } = colorItem;
            return color.includes(this.state.searchText);
        })


        return(
            <section>
                <input
                  type="text" 
                  value={ this.state.searchText } 
                  onChange={ this.handleSearchChange }
                />
                <ul>
                    { filterColors.map((colorItem, index) => {
                        return <li key={ (colorItem, index) }>{ colorItem.color }</li>
                    })}
                    {/* { filterColors.map((colorItem) => {
                        return <ColorCard color={ colorItem.color } value={ colorItem.value } />
                    })} */}    
                </ul>
                <ul>
                    { filterColors.map((colorItem) => {
                        return <ColorCard value={ colorItem.value } />
                    })}
                </ul>
            </section>
        )
    }   
}


export default PaletaCores;