import React, { useEffect, useState, useRef } from 'react'
import { BorderDetailBox } from '../components'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { addPost, editPost } from '../features/BorderSlice';
import { useParams } from 'react-router-dom';

const backend = process.env.REACT_APP_BACKEND_SERVER;

const fetchPostbyId = async (postId) => {
    const response = await axios.get(`${backend}/post/detail/${postId}`, {
        withCredentials: true,
    });
    return response.data;
}

const updatePostbyId = async (id, data) => {
    await axios.put(`${backend}/post/update/${id}`, data, {
        withCredentials : true
    });
};

const deletePostbyId = async (id) => {
    await axios.delete(`${backend}/post/delete/${id}`, {
        withCredentials : true
    });
};

const BorderDetail = ({ postContent, setPostContent }) => {

const dispatch = useDispatch();
const navi = useNavigate();
const { id } = useParams();
const [borderEdit, setBorderEdit] = useState({
    title : postContent.title,
    content : postContent.content
});
const [borderUpdate, setBorderUpdate] = useState(false);
const focusContent = useRef(null);

const { data : postDetail, isLoading, isError, error } = useQuery(['post', id], () => fetchPostbyId(id));

useEffect(()=> {
    if(postDetail) {
        setBorderEdit({
            title : postDetail.title,
            content : postDetail.content
        });
    }
}, [postDetail]);

if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Error occurred</p>;

// 수정 버튼 
const updateHandler = () => {
    setBorderUpdate(true);
    focusContent.current.focus();
}

// 확인 버튼
const confirmHandler = async () => {
    try {
        await updatePostbyId(id, borderEdit);
        alert('글이 수정 되었습니다.');
        setBorderUpdate(false);
        navi('/border');
    } catch (error) {
        alert('글 수정에 실패하였습니다.');
        console.log(error);
    }
};
// 삭제 버튼
const deleteHandler = async () => {
    try {
        await deletePostbyId(id);
        alert('글이 정상적으로 삭제되었습니다.');
        navi('/border');
    } catch (error) {
        alert('글 삭제를 실패하였습니다.')
        console.log(error);
    }
};

  return (
    <>
        <BorderDetailBox>
            <label>제목</label>
            <input type='text' value={borderEdit.title} readOnly={!borderUpdate}
            onChange={e => setBorderEdit(prevState => ({ ...prevState, title : e.target.value}))}></input>
            <label>내용</label>
            <input type='text' value ={borderEdit.content} readOnly={!borderUpdate} 
            onChange={e => setBorderEdit(prevState => ({ ...prevState, content : e.target.value}))}
            className='insert_content'
            ref={focusContent}>
            </input>

            <button onClick={updateHandler}>수정</button>

            <button onClick={borderUpdate ? confirmHandler : null}>
                {borderUpdate ? '수정 완료' : '확인'}
            </button>
            
            <button onClick={deleteHandler}>삭제</button>
        </BorderDetailBox>
    </>
  )
}

export default BorderDetail