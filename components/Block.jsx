import React from 'react';
import ItemBlock from './ItemBlock.jsx'

class Block extends React.Component {
    render () {

        const blockItem = this.props.items.map((item, index) => {
            return <ItemBlock key={index} title={item.title} classBlock={item.itemClass}>{item.paragraph}</ItemBlock>
        })

        return (<div className="block block-blue">
                    <div className="wrapper">
                        <h2>Мои стремления</h2>
                        <div className="flexbox">
                            {blockItem}
                        </div>
                    </div>
                </div>
        )
    }
}

export default Block;