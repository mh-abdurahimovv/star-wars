import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PeoplePage from '../PeoplePage';
import Home from '../../components/HomePage/Home';
import NotFound from '../../components/NotFound/NotFound';
import Search from '../../components/SearchPage/Search';
// import HeaderNav from '../../components/HeaderNav/HeaderNav';

 

const App = () => {
  return (
     <BrowserRouter>
        <div className={styles.wrapper}>

     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/people" element={<PeoplePage />} />
       <Route path="/search" element={<Search />} />
       <Route path="/*" element={<NotFound />} />
     </Routes>
     </div>
 </BrowserRouter>
  );
}

export default App;
