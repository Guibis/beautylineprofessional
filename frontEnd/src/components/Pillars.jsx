export default function Pillars() {
  const pillars = [
    {
      id: 1,
      title: "Educação Profissional",
      description: "Oferecemos treinamento completo do básico ao avançado em diversas áreas: unhas, tratamentos para cílios e sobrancelhas, tratamentos faciais e depilação profissional.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: "#educacao"
    },
    {
      id: 2,
      title: "Tecnologia Estética",
      description: "Atuamos na distribuição de equipamentos estéticos de alta qualidade, oferecendo opções flexíveis de venda e aluguel de máquinas profissionais para seu negócio.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "#tecnologia"
    },
    {
      id: 3,
      title: "Distribuição de Cosméticos",
      description: "Fornecemos a linha própria Skin Renew, produtos profissionais para cuidados com a pele, utilizados por profissionais em centros de beleza e clientes particulares.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: "#cosmeticos"
    }
  ];

  return (
    <section id="pilares" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-medium tracking-widest uppercase">O que nos define</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-800 mt-4">Nossos Pilares</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="card-hover bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 shadow-lg border border-purple-100 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-800 mb-4">{pillar.title}</h3>
              <p className="text-stone-600 leading-relaxed max-h-[120px] overflow-hidden">{pillar.description}</p>
              <div className="flex gap-3 mt-6">
                <a href={pillar.link} className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all flex-1">
                  Saiba mais
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
