export default function RegistrationForm() {
    return (
    <div className="max-w-4xl mx-auto px-6 mb-10">
        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-serif text-stone-900 mb-6">Registrazione</h1>
          <p className="text-stone-600 mb-8">
            Compila il modulo sottostante per registrarti ai nostri corsi professionali.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Nome</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Cognome</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition-all" />
            </div>

            <button type="submit" className="w-full py-4 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
              Invia Registrazione
            </button>
          </form>
        </div>
      </div>
    );
}
