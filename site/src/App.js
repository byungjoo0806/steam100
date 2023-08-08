import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { isLoginFalse, isLoginTrue } from './features/LoginSlice';
import { add, edit, deleted } from './features/BorderSlice'
import { useState } from 'react';
import { Login, Border, Main, SignUp } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login.isLogin)
  const posts = useSelector(state=> state.border.posts);
  const [postContent, setPostContent] = useState('');

  return (
    <div className="App">

      <Header 
      Link={Link}
      />
      
      <Routes>
        <Route path='' element={<Main 
        
        />}>  
        </Route>

        <Route path='login' element={<Login 
          dispatch={dispatch}
          isLogin={isLogin}
          isLoginTrue={isLoginTrue}
          isLoginFalse={isLoginFalse}
        />}>
        </Route>

        <Route path='border' element={<Border 
          dispatch={dispatch}
          postContent={postContent}
          setPostContent={setPostContent}
          posts={posts}
          add={add}
          edit={edit}
          deleted={deleted}        
        />}>
        </Route>

        <Route path='/signup' element={<SignUp />}></Route>

      </Routes>

    <Footer />
    </div>
    
  );
}

export default App;
