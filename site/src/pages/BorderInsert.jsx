import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addPost, editPost } from '../features/BorderSlice';
import { BorderInsertBox } from '../components';
import { useNavigate } from 'react-router-dom';
const BorderInsert = ({ postContent, setPostContent }) => {
  const backend = process.env.REACT_APP_BACKEND_SERVER;

  const dispatch = useDispatch();
  const navi = useNavigate();

      // 백에서 글 목록 가져옴
  const fetchPosts = async () => {
    const response = await axios.get(`${backend}/post`, {
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
      <BorderInsertBox>
        <label>제목</label>
        <input value={postContent.title} 
        onChange={e => setPostContent(prevState => ({ ...prevState, title : e.target.value}))}></input>
        <label>내용</label>
        <input value ={postContent.content} 
        onChange={e => setPostContent(prevState => ({ ...prevState, content : e.target.value}))}
        className='insert_content'></input>
        <button onClick={()=> {
          dispatch(addPost(postContent));
          setPostContent({title : '', content : ''});
          alert('글이 등록 되었습니다.');
          navi('/border');
        }}>확인</button>
      </BorderInsertBox>
    </>

  )
}

export default BorderInsert