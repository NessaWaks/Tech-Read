import ContactUs from './pages/contact/ContactUs';
import NavigationBar from './components/header/NavigationBar';
import {Routes, Route } from 'react-router-dom';
import HomeView from './pages/home/HomeView';
import TrainingView from './pages/training/TrainingView';
import ServiceView from './pages/service/ServiceView';
import BlogView from './pages/blog/BlogView';
import AboutView from './pages/about/AboutView';
import DownloadView from './pages/Download/DownloadView';
import PgeNotFound from './pages/pagenotfound/PgeNotFound';

const App = () => {

  return (
    <div>
      <NavigationBar />
      
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/service" element={<ServiceView />} />
        <Route path="/training" element={<TrainingView/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<BlogView/>} />
        <Route path="/about" element={<AboutView/>} />
        <Route path="/download" element={<DownloadView/>} />
        <Route path="*" element={<PgeNotFound/>} />
        
       
      </Routes>
    </div>
  )
}

export default App