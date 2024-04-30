import React, { useState } from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Filter from '../../components/filter/Filter';

// images
import circleImg1 from "../../assets/images/circleImg1.png";
import circleImg2 from "../../assets/images/circleImg2.png";
import circleImg3 from "../../assets/images/circleImg3.png";
import circleImg4 from "../../assets/images/circleImg4.png";
import circleImg5 from "../../assets/images/circleImg5.png";
import circleImg6 from "../../assets/images/circleImg6.png";
import circleImg7 from "../../assets/images/circleImg7.png";
import circleImg8 from "../../assets/images/circleImg8.png";
import circleImg9 from "../../assets/images/circleImg9.png";
import circleImg10 from "../../assets/images/circleImg10.png";
import orangeCircle from "../../assets/images/orangeCircle.png";
import builderIcon from "../../assets/images/builder-checkmark.png";
import chatIcon from "../../assets/images/chaticon.png";
import noteIcon from "../../assets/images/mobile-checkmark_1.png";
import searchIcon from "../../assets/images/search-big-left.png";
import categoryImg1 from "../../assets/images/category1.png";
import categoryImg2 from "../../assets/images/category2.png";
import categoryImg3 from "../../assets/images/category3.png";
import categoryImg4 from "../../assets/images/category4.png";
import categoryImg5 from "../../assets/images/category5.png";
import categoryImg6 from "../../assets/images/category6.png";
import CardList from '../../components/cards/CardList';


function Home() {
    const [allCategories, setAllCategories] = useState(false);
    const categories = [
    {
      title: 'Сантехника',
      image: categoryImg1, 
    },
    {
      title: 'Сборка мебели',
      image: categoryImg2, 
       },
    {
      title: 'Установка камер',
      image: categoryImg3, 
    },
    {
        title: 'Услуги повара',
        image: categoryImg3, 
      },
    {
        title: 'Няни',
        image:categoryImg4, 
      },
      {
        title: 'Садовник',
        image: categoryImg5, 
      },
      {
        title: 'Дезинфекция',
        image: categoryImg6, 
      },
  ];
  return (
    <div className='home_container'>
        <div className="home_header">
            <Navbar/>
        </div>
        <div className='home_main container-xxl'>
            <div className="home_circle_images">
                <ul className="circle_images">
                    <li className="circle_img"><img src={circleImg1} alt="" /></li>
                    <li className="circle_img"><img src={circleImg2} alt="" /></li>
                    <li className="circle_img"><img src={circleImg3} alt="" /></li>
                    <li className="circle_img"><img src={circleImg4} alt="" /></li>
                    <li className="circle_img"><img src={circleImg5} alt="" /></li>
                    <li className="circle_img"><img src={circleImg6} alt="" /></li>
                    <li className="circle_img"><img src={circleImg7} alt="" /></li>
                    <li className="circle_img"><img src={circleImg8} alt="" /></li>
                    <li className="circle_img"><img src={circleImg9} alt="" /></li>
                    <li className="circle_img"><img src={circleImg10} alt="" /></li>
                </ul>
            </div>
            <div className="home_plakat">
                <div className="plakat_texts">
                <h1 className="plakat_title">Работа выполняетсяс Profi24.uz</h1>
                <h4 className='plakat_desc'>27 000 клиентов доверили дела профи</h4>
                </div>
                <div className='orangeImg'>
                    <img src={orangeCircle} alt="" />
                </div>
                <ul className="plakat_circles">
                    <li className="plakat_circ"></li>
                    <li className="plakat_circ"></li>
                    <li className="plakat_circ"></li>
                    <li className="plakat_circ"></li>
                </ul>
            </div>
            <div className="chat_part">
                <ul className="chat_cards">
                    <li className="chat_card">
                        <div className="chat_img_box">
                        <img src={builderIcon} alt="icon" className="chat_img"/>
                        </div>
                            <div className="chat_text">
                                <h4 className='chat_title'>10 707</h4>
                                <p className='chat_desc'>Анкет с контактами мастеров</p>
                            </div>
                    </li>
                    <li className="chat_card">
                        <div className="chat_img_box">
                        <img src={chatIcon} alt="icon" className="chat_img"/>
                        </div>
                            <div className="chat_text">
                                <h4 className='chat_title'>1 726</h4>
                                <p className='chat_desc'>Специалистов с отличными отзывами</p>
                            </div>
                        
                    </li>
                    <li className="chat_card">
                        <div className="chat_img_box">
                        <img src={noteIcon} alt="icon" className="chat_img"/>
                        </div>
                            <div className="chat_text">
                                <h4 className='chat_title'>7460</h4>
                                <p className='chat_desc'>Заявок мы принимаем ежедневно</p>
                            </div>
                    </li>
                </ul>
            </div>
            <div className="search_part">
            <img className='search_img' src={searchIcon} alt="icon" />
            <input type="text" class="search_input" placeholder="Услуга или специалист?"/>
            <button type="button" class="search_button">Найти</button>
            </div>
            <Filter/>
            {/* categories part */}
            <div className="categories">
                <ul className="category_cards">
                <li className="category_card1">
                    <h4 className="card_title">Электрика</h4>
                    <span className="card_desc">
                        Аварийный электрик
                        <br />
                        Розетки и выключатели
                        <br />
                        Розетки и выключатели
                        <br />
                        Прокладка кабеля
                        <br />
                        Прокладка кабеля
                        <br />
                        Прокладка кабеля
                        <br />
                        Прокладка кабеля
                        <br />
                        Прокладка кабеля
                        <br />
                        Прокладка кабеля
</span>
                </li>
                    <li className="category_card">
                        <h4 className="card_title">Сантехника</h4>
                        <img src={categoryImg1} alt="special categories" className="card_image" />
                    </li>
                    <li className="category_card">
                        <h4 className="card_title">Сборка мебели</h4>
                        <img src={categoryImg2} alt="special categories" className="card_image" />
                    </li>
                    <li className="category_card">
                        <h4 className="card_title">Установка камер</h4>
                        <img src={categoryImg3} alt="special categories" className="card_image" />
                    </li>
                    <li className="category_card">
                        <h4 className="card_title">Услуги повара</h4>
                        <img src={categoryImg3} alt="special categories" className="card_image" />
                    </li>
                    <li className="category_card">
                        <h4 className="card_title">Няни</h4>
                        <img src={categoryImg4} alt="special categories" className="card_image" />
                    </li>
                    <li className="category_card">
                        <h4 className="card_title">Садовник</h4>
                        <img src={categoryImg5} alt="special categories" className="card_image" />
                    </li>
                    <li className="category_card">
                        <h4 className="card_title">Дезинфекция</h4>
                        <img src={categoryImg6} alt="special categories" className="card_image" />
   
                    </li>
                    <li className="category_card1">
                    <h4 className="card_title">Хотите получать заявки от Profi24.uz?</h4>
                    <a href="#">Стать специалистом</a>
                </li>
                </ul>
                
                {/* <CardList items={categories}/> */}
            </div>

        </div>
      
    </div>
  )
}

export default Home
