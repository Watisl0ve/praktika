import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageKontakty from "./pages/kontakty/index"
import PageoNas from './pages/oNas/oNas';
import PageFooter from './pages/footer/footer';
import PageHeader from './pages/header/header';
import PageMenuM from './pages/menuM/menu';
import PageNovinki from './pages/novinki/novosti';
import PageKimun from './pages/spisok/blacktie/kimun';
import PageAssam from './pages/spisok/blacktie/assam';
import PageDarujiling from './pages/spisok/blacktie/darujiling';
import PageLun from './pages/spisok/greentie/lun';
import PageChju from './pages/spisok/greentie/chju';
import PageBolu from './pages/spisok/greentie/bolu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader/>
          <Routes>
            <Route path={'/'} element={<PageNovinki />} />
            <Route path={'/kontakty'} element={<PageKontakty />} />
            <Route path={'/oNas'} element={<PageoNas />} />
            <Route path={'/menu'} element={<PageMenuM />} />
            <Route path={'/assam'} element={<PageAssam />} />
            <Route path={'/kimun'} element={<PageKimun />} />
            <Route path={'/darujiling'} element={<PageDarujiling />} />
            <Route path={'/lun'} element={<PageLun />} />
            <Route path={'/chju'} element={<PageChju />} />
            <Route path={'/bolu'} element={<PageBolu />} />
          </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
