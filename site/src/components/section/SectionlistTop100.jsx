import React, { useEffect, useState } from 'react';
import { SectionMainLi, SectionMainSpan, SectionMainImg, SectionMainText } from './Section.styled';

import { Link } from 'react-router-dom';
import axios from "axios";

import { loadingGIF } from '../../img';

const SectionlistTop100 = (props) => {
    const backend = process.env.REACT_APP_BACKEND_SERVER;
    console.log(props);
    const [gameList, setGameList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const fetchTop100 = async ()=>{
            try {
                // top100 게임 이름 가져오기
                const {data} = await axios.get(`${backend}/api/top100`);
                console.log(data);
                setGameList(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTop100();
    },[]);

    useEffect(()=>{
        if(props.data && props.data.length > 0){
            setGameList(prevGameList => [...prevGameList, ...props.data]);
        }
    },[props.data]);

    return (
        <>
            {isLoading ? (<img src={loadingGIF} alt='loading' />) : (
                <>
                    {gameList.map((el,index)=>{
                        if(el === null){
                            return (
                                <SectionMainLi key={index}>{index + 1}
                                    <SectionMainSpan>
                                        <SectionMainText>unavailable in your region</SectionMainText>
                                    </SectionMainSpan>
                                </SectionMainLi>
                            )
                        }else{
                            return (
                                <Link to={`/detail/${el.name}`} key={index} state={{gameName : el.name}}>
                                    <SectionMainLi>{index + 1}
                                        <SectionMainSpan>
                                            <SectionMainImg src={el.capsule_image} alt={`${el.name} image`} />
                                            <SectionMainText>{el.name}</SectionMainText>
                                        </SectionMainSpan>
                                    </SectionMainLi>
                                </Link>
                            )
                        }
                    })}
                </>
            )}
        </>
    )
};

export default SectionlistTop100;