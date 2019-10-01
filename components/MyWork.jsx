import React from 'react';
import MyWorkItems from "./MyWorkItems.jsx";

class MyWork extends React.Component {
    render () {

        const dataWork = this.props.linkHref.map((item, index) => {
            return <MyWorkItems key={index} dataHref={item.workHref}>{item.workSrc}</MyWorkItems>
        })
        
        return(<div className="block">
                    <div className="wrapper">
                        <h2>Cсылки на мои ДЗ по JavaScript и мои контакты.</h2>
                        <p>Также можете протестировать страницу регистрации.</p>
                        <div className="flexbox_work">
                            {dataWork}
                            <div className="flexbox__item flexbox_border">
                                <a href="https://skakund.github.io/TestjQuery/" target="_blank">
                                    <div className="thumb">
                                        <h3 className="flexbox__item__title">Тестовое задание по работе с jQuery</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MyWork;