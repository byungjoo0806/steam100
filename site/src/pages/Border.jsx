import React, { useEffect } from 'react'
import { BorderMain } from '../components'
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const Border = () => {

  const navi = useNavigate();

  // 디테일 게시판으로 이동
  const borderDetail = (id) => navi(`/border_detail/${id}`);

  // 백에서 글 목록 가져옴
  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:8080/post', {
      withCredentials : true
    });
    // console.log("백엔드에서 가져온 글 목록",response);
    return response.data;
  };

   // useQuery로 글 목록, 닉네임을 가져옴
   const { data : Posts, isLoading, isError, error } = useQuery('posts', fetchPosts);

   // 가져온 데이터를 콘솔에 로깅
   useEffect(()=> {
     if (Posts) {
       console.log("글 목록", Posts);
     }
     if (isError) {
       console.error("에러:", error);
     }
   }, [Posts, isError, error]);

   if (isLoading) return <p>Loading...</p>;
   if (isError) return <p>로딩중 에러</p>

  return (
    <>
      <BorderMain>
        <div className='border_container'>
          <h1>자유 게시판</h1>
          <div className='border_herder'>
            <p>번호</p>
            <p>제목</p>
            <p>글쓴이</p>
            <p>등록일</p>
            <p>조회</p>
            <p>추천</p>
          </div>

          {Posts.map((post, index)=>(
            <div className='list_container' onClick={()=>borderDetail(post.id)}>
                <div key={index} className='border_li'>
                  <p>{post.id}</p>
                  <p>{post.title}</p>
                  {/* <p>{post.content}</p> */}
                  <p>{post.User.nickname}</p>
                  <p>{post.createdAt.split('T')[0]}</p>
                  <p>{post.postViews}</p>
                  <p>{post.postLikes}</p>
                </div>
            </div>
          ))}
            <Link to={'/border_insert'}>
              <button>작성하기</button>
            </Link>
        </div>
      </BorderMain>
    </>
  )
}