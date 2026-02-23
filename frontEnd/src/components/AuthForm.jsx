import { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';
  const isLogin = mode === 'login';
  
  const { login, register } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (!formData.email || !formData.password) {
        setError('Compila tutti i campi per accedere.');
        return;
      }
      login(formData.email, formData.password);
      navigate('/');
    } else {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Compila tutti i campi per registrarti.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Le password non coincidono.');
        return;
      }
      register(formData.name, formData.email, formData.password);
      navigate('/');
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 mb-10 w-full">
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
        <h1 className="text-3xl font-serif text-stone-900 mb-2 text-center">
          {isLogin ? 'Bentornato' : 'Crea un account'}
        </h1>
        <p className="text-stone-600 mb-8 text-center">
          {isLogin ? 'Accedi per gestire il tuo account e i tuoi corsi.' : 'Compila il modulo per unirti a noi.'}
        </p>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Nome e cognome</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all" 
                placeholder="Mario Rossi"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all" 
              placeholder="tuonome@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all" 
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Conferma Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all" 
                placeholder="••••••••"
              />
            </div>
          )}

          <button type="submit" className="w-full py-4 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
            {isLogin ? 'Accedi' : 'Registrati'}
          </button>
        </form>
      </div>
    </div>
  );
}
