import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { modules } from "@/data/modules";
import earthImage from "@/assets/earth.jpg";
import marsImage from "@/assets/mars.jpg";
import jupiterImage from "@/assets/jupiter.jpg";
import { ArrowRight } from "lucide-react";

const imageMap: Record<string, string> = {
  earth: earthImage,
  mars: marsImage,
  jupiter: jupiterImage,
};

const Modules = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Módulos de Aprendizado
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore cada planeta e descubra suas características únicas através de conteúdo interativo e multimídia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/modulo/${module.id}`}>
                <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imageMap[module.image]}
                      alt={module.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute top-4 left-4 text-4xl">
                      {module.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {module.description}
                    </p>

                    <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                      <span className="font-medium">Explorar</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modules;
