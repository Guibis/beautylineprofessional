export default function CosmeticsSection() {
  return (
    <section id="cosmeticos" className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-purple-600 font-medium tracking-widest uppercase">Terceiro Pilar</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-4 mb-6">Distribuição de Cosméticos</h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              A linha <strong className="text-purple-600">Skin Renew</strong> representa o que há de mais avançado em dermocosméticos. Desenvolvida com ingredientes de alta performance, nossa linha atende tanto profissionais em centros de beleza quanto clientes particulares para cuidados em casa.
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-200 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                  <span className="text-2xl">🧴</span>
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold text-stone-800">Skin Renew</h4>
                  <p className="text-purple-600 font-medium">Linha Premium de Skincare</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-stone-50 rounded-xl">
                  <p className="text-3xl font-bold text-rose-400">25+</p>
                  <p className="text-stone-600 text-sm">Produtos na linha</p>
                </div>
                <div className="text-center p-4 bg-stone-50 rounded-xl">
                  <p className="text-3xl font-bold text-amber-500">100%</p>
                  <p className="text-stone-600 text-sm">Dermatologicamente testados</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-purple-100 rounded-full text-sm text-purple-600">Hidratantes</span>
              <span className="px-4 py-2 bg-purple-100 rounded-full text-sm text-purple-600">Séruns</span>
              <span className="px-4 py-2 bg-purple-200 rounded-full text-sm text-purple-700">Máscaras</span>
              <span className="px-4 py-2 bg-purple-100 rounded-full text-sm text-purple-600">Esfoliantes</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Comprar Produtos
              </button>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors">
                Ser Revendedor
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-stone-300 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-stone-200">
                <svg className="w-full h-80" viewBox="0 0 400 300">
                  {/* Background */}
                  <rect x="20" y="20" width="360" height="260" rx="20" fill="#F5F5F4" />
                  
                  {/* Cosmetic bottles illustration */}
                  <g transform="translate(50, 30)">
                    {/* Bottle 1 - Serum */}
                    <rect x="20" y="80" width="50" height="140" rx="10" fill="white" stroke="#E7E5E4" strokeWidth="2" />
                    <rect x="30" y="60" width="30" height="25" rx="5" fill="#F9A8D4" />
                    <ellipse cx="45" cy="60" rx="20" ry="8" fill="#EC4899" />
                    <rect x="35" y="100" width="20" height="80" rx="3" fill="#FBCFE8" opacity="0.5" />
                    <text x="45" y="200" textAnchor="middle" fontSize="8" fill="#9CA3AF">SERUM</text>
                    
                    {/* Bottle 2 - Cream */}
                    <ellipse cx="145" cy="180" rx="45" ry="20" fill="white" stroke="#E7E5E4" strokeWidth="2" />
                    <ellipse cx="145" cy="120" rx="45" ry="20" fill="white" stroke="#E7E5E4" strokeWidth="2" />
                    <rect x="100" y="120" width="90" height="60" fill="white" />
                    <rect x="100" y="120" width="90" height="60" fill="none" stroke="#E7E5E4" strokeWidth="2" />
                    <ellipse cx="145" cy="100" rx="35" ry="15" fill="#FDE68A" />
                    <ellipse cx="145" cy="100" rx="25" ry="10" fill="#F59E0B" opacity="0.5" />
                    <text x="145" y="160" textAnchor="middle" fontSize="8" fill="#9CA3AF">CREAM</text>
                    
                    {/* Bottle 3 - Toner */}
                    <rect x="230" y="70" width="60" height="150" rx="8" fill="white" stroke="#E7E5E4" strokeWidth="2" />
                    <rect x="245" y="50" width="30" height="25" rx="3" fill="#A8A29E" />
                    <circle cx="260" cy="45" r="8" fill="#78716C" />
                    <rect x="240" y="90" width="40" height="100" rx="5" fill="#D6D3D1" opacity="0.3" />
                    <text x="260" y="205" textAnchor="middle" fontSize="8" fill="#9CA3AF">TONER</text>
                  </g>
                  
                  {/* Decorative elements */}
                  <circle cx="350" cy="50" r="15" fill="#FECDD3" opacity="0.5" />
                  <circle cx="40" cy="250" r="20" fill="#FDE68A" opacity="0.5" />
                  
                  {/* Leaves decoration */}
                  <g transform="translate(320, 200)" fill="#86EFAC" opacity="0.6">
                    <ellipse cx="0" cy="0" rx="8" ry="20" transform="rotate(-30)" />
                    <ellipse cx="15" cy="5" rx="6" ry="15" transform="rotate(20)" />
                  </g>
                </svg>
                <div className="text-center mt-4">
                  <p className="text-stone-600 font-semibold">Qualidade profissional para todos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
