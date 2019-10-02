import React from "react";


class Header extends React.Component {
    render() {
        return (<div className='banner-main'>
                    <div className="banner-main__info">
                            <img src={"./img/Avatar.png"} alt={"Avatat"}/>
                            <h1>Hello, my name is Dmitriy and i create cool websites</h1>
                            <p>В этой жизни возможно все, и только от нас самих зависит наш успех и наши победы.</p>
                            <a href="http://vkontakte.ru/write170011272" className="banner-main__link">Hire me</a>
                    </div>
                    <a href="#scroll" className="banner-main__down"></a>
                </div>
        )
    }
};

export default Header;