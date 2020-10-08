import React, { Component } from 'react';

 class RandomQuote extends Component {
    
    render() {
        
        return (
            <div className='RandomQuote'>
                <p>{this.props.value}</p>
            </div>
        )
    }
}

export default RandomQuote;
