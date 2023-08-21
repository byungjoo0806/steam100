import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginFalse, isLoginTrue, setUserInfo } from './features/LoginSlice';
import { add, edit, deleted } from './features/BorderSlice'
import { useState } from 'react';
import { Login, Border, Main, SignUp, Mypage, AdminPage, Top10, BorderInsert, BorderDetail } from './pages';
import { Route, Routes, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Detail from './pages/Detail';
import Menu from './components/menu/Menu';
import SectionlistTop10 from './components/section/SectionlistTop10';
import { useQuery } from 'react-query';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login.isLogin)
  const Posts = useSelector(state=> state.border.Posts);
  const [postContent, setPostContent] = useState({
    title : '',
    content : ''
  });
  const { id } = useParams();
  
  return (
    <div className="App">

      <Header 
      Link={Link}
      />
      
      <Menu 
      Link={Link}
      />

      <Routes>
        <Route path='' element={<Main />}>  
        <Route exact path={"/"} element={<SectionlistTop10 />} />
        </Route>

        <Route path='login' element={<Login 
          dispatch={dispatch}
          isLogin={isLogin}
          isLoginTrue={isLoginTrue}
          isLoginFalse={isLoginFalse}
          setUserInfo={setUserInfo}
        />}>
        </Route>

        <Route path='border' element={<Border 
          dispatch={dispatch}
          postContent={postContent}
          setPostContent={setPostContent}
          Posts={Posts}
          add={add}
          edit={edit}
          deleted={deleted}    
          useQuery={useQuery}

        />}>
        </Route>

        <Route path='/border_insert' element={<BorderInsert
          dispatch={dispatch}
          postContent={postContent}
          setPostContent={setPostContent}
          Posts={Posts}
          add={add}
          edit={edit}
          deleted={deleted}    
          useQuery={useQuery}
        
        />}>
        </Route>

        <Route path='/border_detail/:id' element={<BorderDetail 
          dispatch={dispatch}
          postContent={postContent}
          setPostContent={setPostContent}
          Posts={Posts}
          add={add}
          edit={edit}
          deleted={deleted}    
          useQuery={useQuery}          
        />}>
        </Route>

        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/mypage' element={<Mypage />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path='/top10' element={<Top10 />}></Route>

        <Route path='/detail/:id' element={<Detail />} />

        

      </Routes>
    <Footer />
    </div>
    
  );
}

export default App;