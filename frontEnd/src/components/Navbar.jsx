import { useState, useEffect, useRef } from 'react';
import Icon from './Icons';
import UploadImages from './UploadImages';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <UploadImages publicId={"logoBeauty_rtip32"} width={60} height={60}/>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#centroAssistenza" className="text-stone-600 hover:text-purple-400 transition-colors font-medium">Corsi</a>
          <a href="#chi-siamo" className="text-stone-600 hover:text-purple-400 transition-colors font-medium">Chi Siamo</a>
          <a href="#tecnologia" className="text-stone-600 hover:text-purple-400 transition-colors font-medium">Noleggio</a>
          <a href="#prodotti" className="text-stone-600 hover:text-purple-400 transition-colors font-medium">Prodotti</a>
          <a href="#contatti" className="text-stone-600 hover:text-purple-400 transition-colors font-medium">Contatti</a>
          
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
               <Link to="/account" className="px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">Il mio account</Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
                <Link to="/auth?mode=login" className="px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">Accedi</Link>
                <Link to="/auth?mode=register" className="px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors">Registrati</Link>
            </div>
          )}
        </div>

        <div className="md:hidden" ref={menuRef}>
          <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 p-2">
              <Icon name={isOpen ? 'close' : 'menu'} className="w-6 h-6" />
          </button>
          {isOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 shadow-lg absolute top-full left-0 right-0 py-4 px-6 flex flex-col gap-4">
            <a href="#centroAssistenza" className="text-stone-600 hover:text-purple-600 font-medium">Corsi</a>
            <a href="#chi-siamo" className="text-stone-600 hover:text-purple-600 font-medium">Chi Siamo</a>
            <a href="#tecnologia" className="text-stone-600 hover:text-purple-600 font-medium">Noleggio</a>
            <a href="#prodotti" className="text-stone-600 hover:text-purple-600 font-medium">Prodotti</a>
            <a href="#contatti" className="text-stone-600 hover:text-purple-600 font-medium">Contatti</a>
            
            <div className="border-t border-stone-100 pt-4 flex flex-col gap-3">
               {isLoggedIn ? (
                  <>
                    <Link to="/account" className="px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors text-center w-full">Il mio account</Link>
                  </>
               ) : (
                  <>
                     <Link to="/auth?mode=login" className="px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors text-center w-full">Accedi</Link>
                     <Link to="/auth?mode=register" className="px-6 py-2.5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors text-center w-full">Registrati</Link>
                  </>
               )}
            </div>
          </div>
        )}
        </div>
      </div>  
    </nav>
  );
}
