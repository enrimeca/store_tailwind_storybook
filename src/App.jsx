import React from 'react';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './components/Footer';

function App() {
  return (
    <section className="flex flex-col h-screen">
      <Header />
      <Main className="flex-grow" />
      <Footer />
    </section>
  );
}

export default App;