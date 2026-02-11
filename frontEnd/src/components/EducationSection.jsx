export default function EducationSection() {
  return (
    <section id="educacao" className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-purple-600 font-medium tracking-widest uppercase">Primeiro Pilar</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-4 mb-6">Educação Profissional</h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Na Beauty Line Academy, acreditamos que a educação é a base para o sucesso. Nossos cursos são desenvolvidos por profissionais renomados da indústria da beleza, garantindo que você receba o treinamento mais atualizado e relevante do mercado.
            </p>
            
            <div className="space-y-6 mb-8">
              {[
                { emoji: "💅", title: "Nail Design", desc: "Do básico ao avançado em técnicas de unhas em gel, acrílico, nail art e muito mais." },
                { emoji: "👁️", title: "Cílios e Sobrancelhas", desc: "Extensão de cílios, laminação, design de sobrancelhas e micropigmentação." },
                { emoji: "✨", title: "Tratamentos Faciais", desc: "Limpeza de pele, peelings, protocolos anti-idade e harmonização facial." },
                { emoji: "🌸", title: "Depilação Profissional", desc: "Técnicas com cera, depilação a laser e métodos inovadores do mercado." }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 text-lg">{item.title}</h4>
                    <p className="text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Comprar Curso
              </button>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors">
                Mais Informações
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-purple-300 rounded-full opacity-30 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-purple-100">
                <svg className="w-full h-80" viewBox="0 0 400 300">
                  {/* Background shapes */}
                  <rect x="20" y="20" width="360" height="260" rx="20" fill="#FDF2F8" />
                  
                  {/* Book/education illustration */}
                  <g transform="translate(100, 50)">
                    {/* Open book */}
                    <path d="M100,30 L100,180 Q50,170 0,180 L0,30 Q50,40 100,30" fill="#FECDD3" stroke="#F9A8D4" strokeWidth="2" />
                    <path d="M100,30 L100,180 Q150,170 200,180 L200,30 Q150,40 100,30" fill="#FEE2E2" stroke="#F9A8D4" strokeWidth="2" />
                    
                    {/* Book lines */}
                    <line x1="20" y1="60" x2="80" y2="55" stroke="#E11D48" strokeWidth="1.5" opacity="0.3" />
                    <line x1="20" y1="80" x2="80" y2="75" stroke="#E11D48" strokeWidth="1.5" opacity="0.3" />
                    <line x1="20" y1="100" x2="80" y2="95" stroke="#E11D48" strokeWidth="1.5" opacity="0.3" />
                    
                    <line x1="120" y1="55" x2="180" y2="60" stroke="#E11D48" strokeWidth="1.5" opacity="0.3" />
                    <line x1="120" y1="75" x2="180" y2="80" stroke="#E11D48" strokeWidth="1.5" opacity="0.3" />
                    <line x1="120" y1="95" x2="180" y2="100" stroke="#E11D48" strokeWidth="1.5" opacity="0.3" />

                    {/* Graduation cap */}
                    <path d="M100,0 L150,25 L100,50 L50,25 Z" fill="#831843" />
                    <rect x="95" y="50" width="10" height="30" fill="#831843" />
                    <ellipse cx="100" cy="80" rx="20" ry="8" fill="#831843" />
                    <circle cx="130" cy="40" r="4" fill="#FCD34D" />
                    <line x1="130" y1="44" x2="145" y2="70" stroke="#FCD34D" strokeWidth="2" />
                    <circle cx="145" cy="75" r="6" fill="#FCD34D" />
                  </g>
                  
                  {/* Decorative elements */}
                  <circle cx="60" cy="60" r="15" fill="#F9A8D4" opacity="0.5" />
                  <circle cx="340" cy="240" r="20" fill="#FDE68A" opacity="0.5" />
                  <circle cx="320" cy="60" r="12" fill="#E11D48" opacity="0.2" />
                </svg>
                <div className="text-center mt-4">
                  <p className="text-rose-400 font-semibold">Mais de 500 profissionais formados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
