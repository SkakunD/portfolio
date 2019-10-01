import React from 'react';


class MyWorkItems extends React.Component {
    render() {
        return(<div className="flexbox__item">
                    <a href={this.props.dataHref} target="_blank">
                        <div className="thumb">
                            <img src={this.props.children} alt="picture"/>
                        </div>
                    </a>
                </div>
        )
    }
}

export default MyWorkItems;


