import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';
import { ScrollRestoration } from 'react-router-dom';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 flex flex-col">
      <ScrollRestoration />
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <AuthForm />
      </div>
      <Footer />
    </div>
  );
}
