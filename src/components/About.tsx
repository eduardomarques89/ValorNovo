
import { Award, Users, TrendingUp } from 'lucide-react';

const stats = [
  { value: '12+', label: 'Anos de Experiência' },
  { value: '100+', label: 'Projetos Aprovados' },
  { value: 'R$500M+', label: 'Em Captação de Recursos' },
];

const advantages = [
  {
    icon: Award,
    title: 'Experiência em Gestão de Inovação',
    description: 'Nossa equipe possui vasta experiência em desenvolvimento e implementação de estratégias de inovação para empresas de diversos segmentos.'
  },
  {
    icon: TrendingUp,
    title: 'Captação de Recursos Finep',
    description: 'Somos especialistas na elaboração de projetos para captação de recursos junto à FINEP, com alta taxa de aprovação.'
  },
  {
    icon: Users,
    title: 'Gestão Híbrida de Projetos',
    description: 'Utilizamos metodologias ágeis e tradicionais para garantir a entrega de projetos complexos no prazo e dentro do orçamento.'
  },
];

const About = () => {
  return (
    <section id="sobre-nós" className="py-20 bg-gradient-to-b from-white to-valor-light/50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="section-title">
              <div className="section-title-line"></div>
              <p className="section-title-text">SOBRE NÓS</p>
            </div>
            <h2 className="section-heading">Impulsionando a Inovação nas Empresas Brasileiras</h2>
            
            <p className="text-valor-dark/80 mb-6">
              A Valor Novo é uma consultoria especializada em gestão da inovação e captação de recursos para projetos de P&D. 
              Nosso objetivo é auxiliar empresas a transformar ideias em projetos viáveis e rentáveis, através de estratégias eficientes 
              e acesso a linhas de financiamento com condições diferenciadas.
            </p>
            
            <p className="text-valor-dark/80 mb-8">
              Trabalhamos com diretores e gerentes de P&D, inovação e finanças, oferecendo soluções personalizadas para 
              impulsionar o crescimento e a competitividade através da inovação.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 glass-card">
                  <h3 className="text-3xl font-bold text-valor-secondary mb-2">{stat.value}</h3>
                  <p className="text-sm text-valor-dark/70">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <a href="#contato" className="valor-button-primary px-8 py-3">
              Entre em Contato
            </a>
          </div>
          
          <div className="space-y-6 reveal" style={{animationDelay: '0.2s'}}>
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-5 glass-card p-6 hover-card-effect">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-valor-primary/10 flex items-center justify-center text-valor-primary">
                  <advantage.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-valor-primary">{advantage.title}</h3>
                  <p className="text-valor-dark/80">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
