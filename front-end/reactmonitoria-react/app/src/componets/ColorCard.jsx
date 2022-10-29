import React from "react";

class ColorCard extends React.Component {
    render() {
        const { value } = this.props;
        const cardStyle = { 
            backgroundColor: value,
            color: 'rgb(83, 83, 83)',
            height: '90px',
            marginBottom: '15px'
        }
        return (
            <div style={ cardStyle }>
            </div>
        )
    }
}

export default ColorCard;