import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import CategorySection from './components/CategorySection';
import ConsultationSection from './components/ConsultationSection';
import CareerPathSection from './components/CareerPathSection';
import UniversitySection from './components/UniversitySection';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import FeatureSection from './components/FeatureSection';
import BlogSection from './components/BlogSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import CareerCounselling from './pages/CareerCounselling';
import AdmissionAssistant from './pages/AdmissionAssistant';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <VideoSection />
                <CategorySection />
                {/* <ConsultationSection /> */}
                <UniversitySection />
                <TestimonialSection />
                <CareerPathSection />
                <PricingSection />
                <FeatureSection />
                {/* <BlogSection /> */}
                <FaqSection />
                <CtaSection />
              </>
            } />
            <Route path="/career-counselling" element={<CareerCounselling />} />
            <Route path="/admission-assistant" element={<AdmissionAssistant />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;