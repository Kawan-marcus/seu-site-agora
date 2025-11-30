import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { modules } from "@/data/modules";
import earthImage from "@/assets/earth.jpg";
import marsImage from "@/assets/mars.jpg";
import jupiterImage from "@/assets/jupiter.jpg";

const imageMap: Record<string, string> = {
  earth: earthImage,
  mars: marsImage,
  jupiter: jupiterImage,
};

const ModuleDetail = () => {
  const { id } = useParams();
  const module = modules.find((m) => m.id === id);

  if (!module) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Módulo não encontrado</h1>
          <Link to="/modulos">
            <Button>Voltar aos módulos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/modulos">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar aos módulos
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{module.icon}</span>
              <h1 className="text-4xl md:text-5xl font-bold">{module.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground">{module.description}</p>
          </div>

          <Card className="overflow-hidden mb-8">
            <img
              src={imageMap[module.image]}
              alt={module.title}
              className="w-full h-[400px] object-cover"
            />
          </Card>

          <Card className="p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">Introdução</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {module.content.introduction}
            </p>
          </Card>

          <Card className="p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6">Características Principais</h2>
            <ul className="space-y-3">
              {module.content.keyPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-lg">{point}</span>
                </motion.li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-space-blue/10 border-primary/20">
            <div className="flex gap-4">
              <Lightbulb className="w-8 h-8 text-warning flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Curiosidade</h3>
                <p className="text-lg">{module.content.funFact}</p>
              </div>
            </div>
          </Card>

          <div className="mt-8 flex justify-center">
            <Link to="/quiz">
              <Button size="lg">Testar Conhecimentos no Quiz</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModuleDetail;
