
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CarrierPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Carrier Information</h1>
        {/* Add your carrier page content here */}
      </main>
      <Footer />
    </div>
  );
};

export default CarrierPage;
