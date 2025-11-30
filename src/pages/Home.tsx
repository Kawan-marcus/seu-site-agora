import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-space.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sistema Solar"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-space-blue to-space-pink bg-clip-text text-transparent">
              Explore o Sistema Solar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Uma jornada interativa através do espaço. Aprenda sobre planetas, teste seus conhecimentos e descubra os mistérios do universo.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/modulos">
                <Button size="lg" className="gap-2">
                  <BookOpen className="w-5 h-5" />
                  Explorar Módulos
                </Button>
              </Link>
              <Link to="/quiz">
                <Button size="lg" variant="outline" className="gap-2">
                  <Brain className="w-5 h-5" />
                  Fazer Quiz
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Recursos do Sistema</h2>
          <p className="text-muted-foreground text-lg">
            Uma experiência completa de aprendizado multimídia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-glow transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Módulos Interativos</h3>
              <p className="text-muted-foreground">
                Navegação não-linear com conteúdo multimídia rico incluindo imagens, vídeos e animações.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-glow transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-space-blue/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-space-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quiz Dinâmico</h3>
              <p className="text-muted-foreground">
                Teste seus conhecimentos com perguntas aleatórias e receba feedback instantâneo sobre seu desempenho.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-glow transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-space-pink/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-space-pink" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experiência Imersiva</h3>
              <p className="text-muted-foreground">
                Design moderno com animações suaves e interface intuitiva para máximo engajamento.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-space-blue/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para começar sua jornada?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Comece explorando os módulos educacionais ou teste seus conhecimentos com nosso quiz interativo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/modulos">
                <Button size="lg">Começar Agora</Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
