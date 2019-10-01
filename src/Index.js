import React from "react";
import ReactDom from "react-dom";
import Header from "../components/Header.jsx";
import About from '../components/About.jsx';
import Block from '../components/Block.jsx';
import MyWork from '../components/MyWork.jsx'
// import "style.css";

class App extends React.Component {
    render() {

        const blockItems = [
            {title: "MOBILE APP DESIGN", paragraph: "Применить свои знания для написания мобильной игры при помощи JS и фреймворков, но пока это планы.", itemClass: "flexbox__icon flexbox__icon-app"},
            {title: "WEB DESIGN", paragraph: "Научиться создавать уникальные по дизайну и работе сайты. Живые сайты которые будут радовать глаза пользователей.", itemClass: "flexbox__icon flexbox__icon-design"},
            {title: "WEB DEVELOPMENT", paragraph: "Примение JS с каждым годом все обширнее и теперь даже появилась версия всем известного Arduino под названием Искра, для которой код пишут на чистом JS.", itemClass: "flexbox__icon flexbox__icon-web" }
        ];

        const workItems = [
            {workHref: "https://github.com/SkakunD/practicalJS", workSrc: "../img/github.jpg"},
            {workHref: "http://vkontakte.ru/write170011272", workSrc: "../img/vk-com.jpg"},
            {workHref: "https://beenom.000webhostapp.com/index.html", workSrc: "../img/page_reg.png"},
            // {workHref: "https://skakund.github.io/TestjQuery/", workClass: "../img/github.jpg"}
        ]

        return <>
            <Header/>
            <About/>
            <Block items={blockItems}/>
            <MyWork linkHref={workItems}/>
        </>
    }
}

ReactDom.render(<App/>, document.querySelector("#root"))