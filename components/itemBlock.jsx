import React from 'react';

class ItemBlock extends React.Component {
    render() {
        return(<div className="flexbox__item">
                    <div className={this.props.classBlock}></div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.children}</p>
                </div>
        )
    }
}

export default ItemBlock;