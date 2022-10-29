import React from "react";
import color from "../data";


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

        const filterColors = color.filter((colorItem) => {
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
                </ul>
            </section>
        )
    }   
}


export default PaletaCores;