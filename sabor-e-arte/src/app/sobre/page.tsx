'use client';

export default function Sobre() {
  return (
    <section className="py-16 px-6 md:px-12 flex justify-center relative">
      {/* Fundo bege translúcido */}
      <div className="absolute inset-0 bg-[#fef6ec] bg-opacity-70"></div>

      <div className="max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Sobre o <span className="text-yellow-600">Sabor & Arte</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          No <strong>Sabor & Arte</strong>, acreditamos que uma boa refeição vai além do sabor — ela cria memórias, une pessoas
          e transforma momentos simples em experiências especiais. Nosso compromisso é oferecer hambúrgueres suculentos, torradas crocantes 
          e o tradicional bauru, preparados com ingredientes frescos e selecionados, sempre com um toque artesanal.
        </p>

        <div className="p-8 rounded-lg shadow-lg bg-white bg-opacity-80 text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Nosso objetivo é proporcionar uma experiência gastronômica autêntica, unindo sabor, qualidade e um ambiente acolhedor.
            Queremos ser o seu destino favorito para matar a fome e aproveitar momentos deliciosos ao lado de quem você gosta.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa História</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Fundado com a paixão pela culinária, o <strong>Sabor & Arte</strong> nasceu do desejo de trazer pratos clássicos de forma especial. 
            Desde o início, prezamos por ingredientes frescos, técnicas bem apuradas e um atendimento que faz você se sentir em casa. 
            Cada lanche que sai da nossa cozinha é preparado com dedicação, garantindo uma explosão de sabores a cada mordida.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">O que nos diferencia?</h3>
          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
            <li><strong>Ingredientes selecionados</strong> – Usamos produtos frescos e de alta qualidade.</li>
            <li><strong>Receitas artesanais</strong> – Cada prato é feito com carinho, sem processos industriais.</li>
            <li><strong>Ambiente aconchegante</strong> – Perfeito para uma pausa no dia a dia ou momentos especiais.</li>
            <li><strong>Atendimento de excelência</strong> – Porque você merece uma experiência incrível do início ao fim.</li>
          </ul>
        </div>

        <p className="mt-8 text-lg text-gray-700">
          Seja para um lanche rápido ou para curtir uma refeição completa, estamos prontos para te receber. No <strong>Sabor & Arte</strong>,
          cada detalhe é pensado para tornar sua visita inesquecível.
        </p>
      </div>
    </section>
  );
}
