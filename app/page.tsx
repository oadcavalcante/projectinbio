import Header from './components/landing-page/Header';
import Hero from './components/landing-page/Hero';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto border">
      <div className="text-white">Hello World</div>
      <Header />
      <Hero />
    </div>
  );
}
