import React from 'react';
import Swiper from 'swiper';
import Mediaswiper from "../components/swiper/Mediaswiper";
import { Gameinfopage, Gameintrobox, Gametitlebox, Mainbox } from '../components/gameInfo/Gameinfo.styled';

const Swipertest = () => {
  return (
    <div>
        <Gameinfopage>
          <Mainbox>
            <Gameintrobox>
              <Gametitlebox>
                
              </Gametitlebox>
            </Gameintrobox>
          </Mainbox>
        </Gameinfopage>
    </div>
  )
}

export default Swipertest;