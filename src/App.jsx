import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageLoader from './components/PageLoader/PageLoader.jsx';
import ScrollManager from './router/ScrollManager.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Privacy from './pages/Privacy/Privacy.jsx';
import Terms from './pages/Terms/Terms.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

export default function App() {
  const [loaderPhase, setLoaderPhase] = useState('visible');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLoaderPhase('done');
      return;
    }
    const closeTimer = setTimeout(() => setLoaderPhase('closing'), 900);
    const doneTimer = setTimeout(() => setLoaderPhase('done'), 1200);
    return () => {
      clearTimeout(closeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      {loaderPhase !== 'done' && <PageLoader closing={loaderPhase === 'closing'} />}
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
