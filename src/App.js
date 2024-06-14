import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Main} from './components/Main';
import {Art} from './components/Art';
import {Blog} from './components/Blog';
import {Design} from './components/Design';
import {MyEssay} from './Blog/MyEssay';
import {DevBlog} from './Blog/DevBlog';
import { Realm } from './components/Realm';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route exact path="/IMwebApp" element={<Main/>}/>
      <Route path="/art" element={<Art/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/design" element={<Design/>}/>
      <Route path="/blog/myessay" element={<MyEssay/>}/>
      <Route path="/blog/devblog" element={<DevBlog/>}/>
      <Route path="/art/realm" element={<Realm/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;