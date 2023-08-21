import React, { useEffect, useState } from 'react'
import { BorderDetailBox } from '../components'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { addPost, editPost } from '../features/BorderSlice';
import { useParams } from 'react-router-dom';

const fetchPostbyId = async (postId) => {
    const response = await axios.get(`http://localhost:8080/post/detail/${postId}`, {
        withCredentials: true,
    });
    return response.data;
}

const updatePostbyId = async (id, data) => {
    await axios.put(`http://localhost:8080/post/update/${id}`, data, {
        withCredentials : true
    });
};

const deletePostbyId = async (id) => {
    await axios.delete(`http://localhost:8080/post/delete/${id}`, {
        withCredentials : true
    });
};

const BorderDetail = ({ postContent, setPostContent }) => {

const dispatch = useDispatch();
const navi = useNavigate();
const { id } = useParams();
const [borderUpdate, setBorderUpdate] = useState(false);

const { data : postDetail, isLoading, isError, error } = useQuery(['post', id], () => fetchPostbyId(id));

useEffect(()=> {
    if(postDetail) {
        setPostContent({
            title : postDetail.title,
            content : postDetail.content
        });
    }
    if(borderUpdate) {
        setBorderUpdate(false);
    }
}, [postDetail, borderUpdate]);

if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Error occurred</p>;

const updateHandler = async () => {
    try {
        await updatePostbyId(id, postContent);
        setBorderUpdate(true);
        alert('게시글이 수정되었습니다.')
    } catch (error) {
        alert('게시글 수정에 실패했습니다.')
    }
}

  return (
    <>
        <BorderDetailBox>
            <label>제목</label>
            <input type='text' value={postContent.title} 
            onChange={e => setPostContent(prevState => ({ ...prevState, title : e.target.value}))}></input>
            <label>내용</label>
            <input type='text' value ={postContent.content} 
            onChange={e => setPostContent(prevState => ({ ...prevState, content : e.target.value}))}
            className='insert_content'></input>
            <button onClick={()=> {
              dispatch(addPost(postContent));
              setPostContent({title : '', content : ''});
              alert('글이 등록 되었습니다.');
              navi('/border');
            }}>확인</button>
            
            <button onClick={updateHandler}>수정</button>
            
            <button onClick={()=>{
            //   dispatch(deleted(index))
            }}>삭제</button>
        </BorderDetailBox>
    </>
  )
}

export default BorderDetail