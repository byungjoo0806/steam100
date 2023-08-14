import React, { useEffect, useState } from 'react';
import { SectionMainLi, SectionMainSpan, SectionMainImg, SectionMainText } from './Section.styled';
import { testImg1 } from '../../img';

import { Link } from 'react-router-dom';
import axios from "axios";

import { loadingGIF } from '../../img';

const Sectionlist = () => {
    const [gameList, setGameList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchTop100 = async ()=>{
            try {
                // top100 게임 이름 가져오기
                const {data} = await axios.get("http://localhost:8080/api/top100");
                console.log(data);
                const tenGames = data.splice(0,10);
                console.log(tenGames);

                // top100 게임 이름에 따른 스팀 게임 아이디 찾기
                const appIdList = await axios.get("http://localhost:8080/api/appList",{
                    withCredentials : true,
                    params : {
                        game : tenGames,
                    }
                });
                console.log(appIdList);
                
                
                const info = await axios.get("http://localhost:8080/api/appInfo",{
                    withCredentials : true,
                });
                console.log("이미지?", info.data[0]);

                let gameImgTitleSet = [];
                tenGames.map((el,index)=>{
                    let games = {
                        img : info.data[index]?.capsule_image,
                        title : el,
                    };
                    console.log(games);
                    gameImgTitleSet.push(games);
                });
                console.log(gameImgTitleSet);
                setGameList(gameImgTitleSet);
                
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTop100();
    },[]);

    return (
        <>
            {isLoading ? (<img src={loadingGIF} alt='loading' />) : (
                <>
                    {gameList.map((el,index)=>(
                        <Link className='Link' to={`/detail/${el.title}`} key={index} state={{gameName : el.title}}>
                            <SectionMainLi>{index + 1}
                                <SectionMainSpan>
                                   {el.img ? <SectionMainImg src={el.img} alt={`${el.title} image`} /> : undefined}
                                    <SectionMainText>{el.title}</SectionMainText>
                                </SectionMainSpan>
                            </SectionMainLi>
                        </Link>
                    ))}
                </>
            )}
        </>
    )
};

export default Sectionlist;