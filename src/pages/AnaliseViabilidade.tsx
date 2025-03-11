
import { PieChart } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AnaliseViabilidade = () => {
  return (
    <ServicePageTemplate
      title="Análise de Viabilidade"
      icon={<PieChart size={32} />}
      description="Estudos aprofundados para análise de viabilidade técnica, econômica e financeira de projetos."
      color="bg-red-50 text-red-600"
      content={
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Visão Geral</h2>
            <p className="text-valor-dark/80">
              Nossas análises de viabilidade fornecem uma base sólida para tomada de decisões relacionadas a 
              investimentos em inovação, novos produtos ou expansão de negócios, minimizando riscos e maximizando 
              as chances de sucesso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Dimensões Analisadas</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li><strong>Viabilidade Técnica:</strong> Avaliação de capacidade técnica, recursos necessários e desafios tecnológicos</li>
              <li><strong>Viabilidade Econômica:</strong> Análise de mercado, concorrência, demanda potencial e vantagens competitivas</li>
              <li><strong>Viabilidade Financeira:</strong> Projeções financeiras, ROI, payback, VPL e TIR</li>
              <li><strong>Viabilidade Operacional:</strong> Processos, recursos humanos e infraestrutura necessária</li>
              <li><strong>Riscos e Mitigações:</strong> Identificação de riscos e desenvolvimento de estratégias de mitigação</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Metodologia</h2>
            <p className="text-valor-dark/80">
              Utilizamos uma combinação de análises quantitativas e qualitativas, apoiadas por ferramentas 
              avançadas de modelagem financeira e estatística, além de pesquisas de mercado primárias e secundárias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-valor-primary mb-4">Entregáveis</h2>
            <ul className="list-disc pl-5 space-y-2 text-valor-dark/80">
              <li>Relatório detalhado com análises multidimensionais</li>
              <li>Modelagem financeira completa com cenários</li>
              <li>Mapeamento de riscos e plano de mitigação</li>
              <li>Recomendações estratégicas baseadas em evidências</li>
              <li>Apresentação executiva para stakeholders</li>
            </ul>
          </section>
        </div>
      }
    />
  );
};

export default AnaliseViabilidade;
