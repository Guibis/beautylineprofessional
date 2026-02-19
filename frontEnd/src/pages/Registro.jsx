import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm';

export default function Registro() {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-16">
      <Navbar />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
