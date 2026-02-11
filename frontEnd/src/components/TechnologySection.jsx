export default function TechnologySection() {
  return (
    <section id="tecnologia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-purple-300 rounded-full opacity-30 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-2xl border border-purple-100">
                <svg className="w-full h-80" viewBox="0 0 400 300">
                  {/* Background */}
                  <rect x="20" y="20" width="360" height="260" rx="20" fill="#FFFBEB" />
                  
                  {/* Aesthetic machine illustration */}
                  <g transform="translate(80, 40)">
                    {/* Main device body */}
                    <rect x="40" y="60" width="160" height="160" rx="15" fill="#F59E0B" opacity="0.2" />
                    <rect x="50" y="70" width="140" height="140" rx="10" fill="white" stroke="#F59E0B" strokeWidth="2" />
                    
                    {/* Screen */}
                    <rect x="70" y="90" width="100" height="70" rx="5" fill="#1F2937" />
                    <rect x="80" y="100" width="80" height="50" rx="3" fill="#10B981" />
                    {/* Pulse line on screen */}
                    <polyline points="85,125 95,125 100,110 110,140 120,120 130,120 140,125 155,125" fill="none" stroke="white" strokeWidth="2" />
                    
                    {/* Control panel */}
                    <circle cx="90" cy="180" r="8" fill="#F59E0B" />
                    <circle cx="120" cy="180" r="8" fill="#EF4444" />
                    <circle cx="150" cy="180" r="8" fill="#10B981" />
                    
                    {/* Handpiece */}
                    <ellipse cx="260" cy="140" rx="25" ry="60" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="2" />
                    <ellipse cx="260" cy="100" rx="15" ry="8" fill="#F59E0B" />
                    <line x1="190" y1="140" x2="235" y2="140" stroke="#9CA3AF" strokeWidth="3" strokeDasharray="5,5" />
                  </g>
                  
                  {/* Decorative sparkles */}
                  <g fill="#F59E0B">
                    <polygon points="50,50 53,58 61,58 55,63 57,71 50,66 43,71 45,63 39,58 47,58" opacity="0.6" />
                    <polygon points="350,80 352,85 357,85 353,88 354,93 350,90 346,93 347,88 343,85 348,85" opacity="0.4" />
                    <polygon points="330,220 332,225 337,225 333,228 334,233 330,230 326,233 327,228 323,225 328,225" opacity="0.5" />
                  </g>
                </svg>
                <div className="text-center mt-4">
                  <p className="text-amber-500 font-semibold">Equipamentos de última geração</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-purple-600 font-medium tracking-widest uppercase">Segundo Pilar</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-4 mb-6">Tecnologia Estética</h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Somos distribuidores oficiais de equipamentos estéticos de alta performance. Oferecemos as melhores soluções tecnológicas para profissionais que buscam excelência em seus resultados.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-stone-800 mb-2">Venda</h4>
                <p className="text-stone-600 text-sm">Adquira equipamentos com condições especiais e suporte técnico completo.</p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="font-semibold text-stone-800 mb-2">Aluguel</h4>
                <p className="text-stone-600 text-sm">Flexibilidade para seu negócio com opções de locação de máquinas.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Laser', 'Radiofrequência', 'Ultrassom', 'LED'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-stone-100 rounded-full text-sm text-stone-600">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Comprar Equipamento
              </button>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors">
                Alugar Máquina
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
