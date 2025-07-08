'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Smartphone, 
  Wrench, 
  Bot, 
  Phone,
  Terminal, 
  Activity,
  Crown,
  Zap,
  Eye,
  Lock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const OfferSection = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const offerItems = [
    {
      icon: Shield,
      title: "BLACKSIDER SOCIETY",
      subtitle: "Acesso de 1 ano",
      features: [
        "Network com quem realmente move o mercado brasileiro",
        "Informações em primeira mão, antes de virarem 'curso'",
        "Calls semanais com players que faturam 7-8 dígitos",
        "Suporte direto do SpyHacker e equipe"
      ],
      gradient: "from-primary/20 to-primary/5",
      borderColor: "border-primary/50"
    },
    {
      icon: Smartphone,
      title: "SIDERLINK VITALÍCIO",
      subtitle: "Exclusivo desta abertura",
      features: [
        "App privado com descobertas diárias",
        "Central de inteligência no seu celular",
        "Primeira fonte de informação do mercado"
      ],
      gradient: "from-primary/15 to-primary/3",
      borderColor: "border-primary/40"
    },
    {
      icon: Wrench,
      title: "SIDERTOOLS",
      subtitle: "Arsenal Completo - 16 ferramentas",
      features: [
        "Criptografador de Copy (bots do Facebook não detectam)",
        "Ofuscador de Criativos Russo (aprova mais rápido)",
        "Clonador de Ofertas VIP (a gold tool lendária)",
        "Gerador de Prompts Matadores"
      ],
      gradient: "from-primary/15 to-primary/3",
      borderColor: "border-primary/40"
    },
    {
      icon: Bot,
      title: "BLACK AI",
      subtitle: "Seu SpyHacker Pessoal 24h",
      features: [
        "IA Sem Censura Total - Zero filtros morais",
        "Estratégias de blackhat, growth hacking sem limitação",
        "Treinada com 18 meses de conteúdo exclusivo",
        "Milhares de cases reais de membros 7-8 dígitos"
      ],
      gradient: "from-primary/15 to-primary/3",
      borderColor: "border-primary/40"
    },
    {
      icon: Phone,
      title: "BLACK CALLS",
      subtitle: "Acesso Direto ao Núcleo",
      features: [
        "Calls mensais exclusivas com a elite",
        "Top performers compartilhando descobertas",
        "Q&A ao vivo com experts",
        "Network direto com quem fatura milhões"
      ],
      gradient: "from-primary/15 to-primary/3",
      borderColor: "border-primary/40"
    }
  ];

  // Auto-cycle through features
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentFeatureIndex(prev => (prev + 1) % offerItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, offerItems.length]);

  const CurrentIcon = offerItems[currentFeatureIndex].icon;

  return (
    <section ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
      {/* Background Matrix Effects */}
      <div className="absolute inset-0 opacity-10">
        <MatrixRain />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-8 p-4 rounded-lg bg-black/50 backdrop-blur-md border border-primary/30"
        >
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-mono text-sm text-primary/70">/blacksider-society/</span>
            <span className="font-mono text-xs text-primary/50">membership-access</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="status">
              <Activity className="w-3 h-3 mr-1" />
              RECRUITING
            </Badge>
            <Badge variant="secret">
              <Crown className="w-3 h-3 mr-1" />
              [ELITE ACCESS]
            </Badge>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <Card className="inline-block bg-black/80 border-primary/40 backdrop-blur-sm max-w-6xl mb-8">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black leading-tight">
                  <span className="text-foreground">NÃO É MAIS UM</span><br />
                  <span className="neon-glow text-primary">CURSO</span>
                </h2>
                
                <p className="text-2xl md:text-3xl font-rajdhani font-bold text-primary/90">
                  É onde você senta na mesa de quem dita as regras.
                </p>

                <div className="relative p-6 bg-primary/10 border border-primary/30 rounded-lg">
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
                  
                  <p className="text-lg md:text-xl font-rajdhani text-foreground/90 italic leading-relaxed">
                    <span className="text-primary font-fira-code">[REALIDADE_NUA_E_CRUA]</span><br />
                    "Quando um guru lança um 'método totalmente novo', significa que esse método já foi explorado há meses por quem está dentro da BlackSider Society."
                  </p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* What You Get Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-orbitron font-black text-center text-foreground mb-12">
            <span className="text-primary">[SYSTEM_ACCESS]</span> O Que Você Recebe
          </h3>

          {/* Offer Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {offerItems.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${index === 0 ? 'lg:col-span-2 xl:col-span-1' : ''}`}
                >
                  <Card className={`bg-gradient-to-br ${item.gradient} ${item.borderColor} backdrop-blur-sm h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative">
                          <ItemIcon className="w-10 h-10 text-primary" />
                          <motion.div
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                            className="absolute inset-0 rounded-full bg-primary/20"
                          />
                        </div>
                        {index === 0 && (
                          <Badge variant="granted" className="animate-pulse">
                            <Crown className="w-3 h-3 mr-1" />
                            PREMIUM
                          </Badge>
                        )}
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-orbitron font-black text-primary">
                        {item.title}
                      </h4>
                      <p className="text-sm font-fira-code text-primary/70">
                        {item.subtitle}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {item.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/90 leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </CardContent>

                    {/* Corner Details */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Feature Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-black/80 border-primary/50 backdrop-blur-sm overflow-hidden">
            <CardHeader className="bg-primary/20 border-b border-primary/50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Eye className="w-5 h-5 text-primary" />
                  <span className="font-fira-code text-primary text-sm">
                    FEATURED ACCESS SPOTLIGHT
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="access">LIVE PREVIEW</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Feature Info */}
                <div className="space-y-6">
                  <motion.div
                    key={currentFeatureIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                      <CurrentIcon className="w-8 h-8 text-primary" />
                      <h4 className="text-2xl md:text-3xl font-orbitron font-black text-primary">
                        {offerItems[currentFeatureIndex].title}
                      </h4>
                    </div>
                    
                    <p className="text-lg font-rajdhani text-primary/80">
                      {offerItems[currentFeatureIndex].subtitle}
                    </p>

                    <div className="space-y-3">
                      {offerItems[currentFeatureIndex].features.slice(0, 3).map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          className="flex items-start space-x-3"
                        >
                          <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-foreground/90">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Visual Indicator */}
                <div className="relative">
                  <motion.div
                    key={currentFeatureIndex}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-64 h-64 mx-auto"
                  >
                    {/* Rotating Rings */}
                    {[0, 1, 2].map((ring) => (
                      <motion.div
                        key={ring}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10 + ring * 5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 rounded-full border-2 border-primary/20"
                        style={{
                          width: `${200 + ring * 20}px`,
                          height: `${200 + ring * 20}px`,
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    ))}

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <CurrentIcon className="w-16 h-16 text-primary" />
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                          className="absolute inset-0 rounded-full bg-primary/30"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Progress Indicators */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {offerItems.map((_, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          scale: index === currentFeatureIndex ? 1.2 : 1,
                          opacity: index === currentFeatureIndex ? 1 : 0.5
                        }}
                        className={`w-3 h-3 rounded-full ${
                          index === currentFeatureIndex ? 'bg-primary' : 'bg-primary/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative max-w-4xl mx-auto p-8 rounded-xl bg-black/30 backdrop-blur-sm border border-primary/20 mb-8">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
            
            <h3 className="text-3xl md:text-4xl font-orbitron font-black text-foreground mb-4">
              <span className="text-primary">NETWORK DOS PLAYERS</span><br />
              QUE DESCOBREM OPORTUNIDADES PRIMEIRO
            </h3>
            <p className="text-lg font-rajdhani text-foreground/80">
              Central de inteligência onde estratégias nascem
            </p>
          </div>

          <Button variant="cyber" size="xxl" className="group">
            <Lock className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            <span className="relative z-10 font-orbitron font-bold tracking-wide text-xl">
              SOLICITAR CONVITE PARA A SOCIETY
            </span>
            <Crown className="w-6 h-6 ml-3 group-hover:animate-pulse" />
            
            {/* Corner Details */}
            <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-primary group-hover:border-primary/80 transition-colors" />
            <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-primary group-hover:border-primary/80 transition-colors" />
            <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-primary group-hover:border-primary/80 transition-colors" />
            <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-primary group-hover:border-primary/80 transition-colors" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Matrix Rain Component (consistent with other sections)
const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ position: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 20 }, () => ({
      position: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0">
      {drops.map((drop, index) => (
        <motion.div
          key={index}
          initial={{ y: -200, opacity: 0 }}
          animate={{ 
            y: '100vh', 
            opacity: [0, 0.3, 0.6, 0.3, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
          className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-primary/40 to-primary/10"
          style={{ left: `${drop.position}%` }}
        />
      ))}
    </div>
  );
};

export default OfferSection; 