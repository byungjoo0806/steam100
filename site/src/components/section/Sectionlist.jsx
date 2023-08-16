import React, { useEffect, useState } from 'react';
import { SectionMainLi, SectionMainSpan, SectionMainImg, SectionMainText } from './Section.styled';

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
                const newTenGames = appIdList.data.splice(appIdList.length - 10,10);
                console.log(newTenGames);
                setGameList(newTenGames);
                setIsLoading(false);
                
                
                // const info = await axios.get("http://localhost:8080/api/appInfo",{
                //     withCredentials : true,
                // });
                // console.log(info.data);
                // const newTenGames = info.data.splice(info.data.length - 10, 10);
                // console.log(newTenGames);

                // let gameImgTitleSet = [];
                // newTenGames.map((el,index)=>{
                //     let games = {
                //         img : newTenGames[index].capsule_image,
                //         title : newTenGames[index].name,
                //     };
                //     console.log(games);
                //     gameImgTitleSet.push(games);
                // });
                // // console.log(gameImgTitleSet);
                // setGameList(gameImgTitleSet);

                // // setGameList(data);
                // setIsLoading(false);
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
                        <Link to={`/detail/${el.name}`} key={index} state={{gameName : el.name}}>
                            <SectionMainLi>{index + 1}
                                <SectionMainSpan>
                                    <SectionMainImg src={el.capsule_image} alt={`${el.name} image`} />
                                    <SectionMainText>{el.name}</SectionMainText>
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