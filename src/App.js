
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DigitizingPage from './Components/DigitizingPage/DigitizingPage';
import GraphicPage from './Components/GraphicPage/GraphicPage';
import ImagePage from './Components/ImagePage/ImagePage';
import TechPage from './Components/TechPage/TechPage';
import ArtandOrderPage from './Components/Art&OrderPage/Art&OrderPage';
import DesignAndDataPage from './Components/DesignAndDataPage/DesignAndDataPage';
import DigitalPage from './Components/DigitalMarketingPage/DigitalPage';
import AnimationPage from './Components/AnimationPage/AnimationPage';
import PortfolioPage from './Components/PortfolioPage/PortfolioPage';
import ExamplePlanPage from './Components/ExamplePlanPage/ExamplePlanPage';
import PromoPage from './Components/PromoPage/PromoPage';
import TechSolnPage from './Components/TechSolnPage/TechSolnPage';
import ERPPage from './Components/ERPPage/ERPPage';
import OffShorePage from './Components/OffShorePage/OffShorePage';
import ConsultPage from './Components/ConsultPage/ConsultPage';
import Maintenance from './Components/Maintenance/Maintenance';
import ContactPage from './Components/ContactPage/ContactPage';
import PrivacyPage from './Components/PrivacyPage/PrivacyPage';
import TermsPage from './Components/TermsPage/TermsPage';
import Refund from './Components/RefundPage/Refund';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<AboutUsPage />} path='/aboutus' />
          <Route element={<DigitizingPage />} path='/digitizing' />
          <Route element={<GraphicPage />} path='/graphic' />
          <Route element={<ImagePage />} path='/imageediting' />
          <Route element={<TechPage />} path='/technology' />
          <Route element={<ArtandOrderPage />} path='/artandorder' />
          <Route element={<DesignAndDataPage />} path='/designanddata' />
          <Route element={<DigitalPage />} path='/digitalmarketing' />
          <Route element={<AnimationPage />} path='/animation' />
          <Route element={<PortfolioPage />} path='/portfolio' />
          <Route element={<ExamplePlanPage />} path='/examplesandplans' />
          <Route element={<PromoPage />} path='/promo' />
          <Route element={<TechSolnPage />} path='/technologysolutions' />
          <Route element={<ERPPage />} path='/erp' />
          <Route element={<OffShorePage />} path='/offshore' />
          <Route element={<ConsultPage />} path='/consulting' />
          <Route element={<Maintenance />} path='/maintenance' /> 
          <Route element={<ContactPage />} path='/contact' /> 
          <Route element={<PrivacyPage />} path='/privacypolicy' /> 
          <Route element={<TermsPage />} path='/terms' /> 
          <Route element={<Refund />} path='/refund' /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
