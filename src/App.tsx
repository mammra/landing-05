import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { NuvraBadge } from './components/NuvraBadge';
function App() {
  const heroData = {
    headline: "Your Website, Reimagined",
    sub: "We build beautiful, fast, and secure websites that help your business grow. Let's create something amazing together.",
    cta_text: "View Our Work",
    image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  };
  return (
  <>
    <NuvraBadge />
    <div className="bg-gray-50 text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <section className="relative bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                  {heroData.headline}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                  {heroData.sub}
                </p>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                  >
                    {heroData.cta_text}
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src={heroData.image_url}
                  alt="A team collaborating on a project"
                  className="rounded-lg shadow-2xl object-cover w-full h-full"
                  width="500"
                  height="500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  
  </>
);
}
export default App;