import React from 'react';
import Header from './components/Header'; // ← Chemin d’accès au fichier
import Footer from './components/footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
      <Header />
      {/* Le reste de ton contenu */}
      <MainContent />
      <Footer />

    </div>
  );
}

export default App;
