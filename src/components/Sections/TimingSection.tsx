'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Calendar, 
  TrendingUp, 
  Users, 
  Lock, 
  Zap,
  Terminal,
  AlertTriangle,
  CheckCircle,
  XCircle,
  MessageSquare,
  Database,
  Brain,
  Shield,
  Timer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const TimingSection = () => {
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const timelineEvents = [
    {
      id: "last-opening",
      date: "Novembro 2023",
      title: "ÚLTIMA ABERTURA",
      subtitle: "O Que Aconteceu",
      price: "R$ 900 anuais",
      status: "FECHADO",
      duration: "3 dias",
      icon: Calendar,
      description: "A última janela de acesso. Quem perdeu, passou o ano inteiro tentando entrar.",
      metrics: [
        { label: "Tempo aberto", value: "72h", trend: "down" },
        { label: "Status atual", value: "FECHADO", trend: "locked" },
        { label: "Próxima abertura", value: "AGORA", trend: "up" }
      ],
      statusColor: "text-red-400",
      borderColor: "border-red-400/50"
    },
    {
      id: "development",
      date: "Dez 2023 - Nov 2024",
      title: "PERÍODO DE EVOLUÇÃO",
      subtitle: "Por Que Ficou Fechado",
      status: "DESENVOLVIMENTO",
      icon: Database,
      description: "12 meses de evolução intensa. Não paramos um segundo.",
      achievements: [
        { icon: Shield, text: "Desenvolvimento do SiderTools", completed: true },
        { icon: Brain, text: "Evolução da IA proprietária", completed: true },
        { icon: Users, text: "Curadoria do network elite", completed: true }
      ],
      statusColor: "text-yellow-400",
      borderColor: "border-yellow-400/50"
    },
    {
      id: "aftermath",
      date: "Todo o Ano de 2024",
      title: "A REALIDADE NUA E CRUA",
      subtitle: "O Que Rolou Depois",
      status: "PROCURADO",
      icon: MessageSquare,
      description: '"Passou o ano inteiro gente chorando no meu direct pedindo para reabrir."',
      stats: [
        { label: "DMs recebidas", value: "500+", icon: MessageSquare },
        { label: "Pedidos de abertura", value: "Diários", icon: Clock },
        { label: "Ofertas recebidas", value: "Muitas", icon: TrendingUp }
      ],
      statusColor: "text-primary",
      borderColor: "border-primary/50"
    }
  ];

  // Auto-cycle through timeline
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentTimelineIndex(prev => (prev + 1) % timelineEvents.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isInView, timelineEvents.length]);

  return (
    <section ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <ScanningGrid />
      </div>

      {/* Matrix Rain */}
      <div className="absolute inset-0 opacity-8">
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
            <span className="font-mono text-sm text-primary/70">/timeline-analysis/</span>
            <span className="font-mono text-xs text-primary/50">access-history</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="status">
              <Timer className="w-3 h-3 mr-1" />
              TIMING CRITICAL
            </Badge>
            <Badge variant="destructive">
              <AlertTriangle className="w-3 h-3 mr-1" />
              RARE OPENING
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
          <Card className="inline-block bg-black/80 border-primary/40 backdrop-blur-sm max-w-5xl mb-8">
            <CardContent className="p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black leading-tight">
                  <span className="text-primary neon-glow">A REALIDADE</span><br />
                  <span className="text-foreground">DO TIMING</span>
                </h2>
                
                <p className="text-xl md:text-2xl font-rajdhani text-primary/80">
                  Por que você não pode deixar passar desta vez
                </p>

                <div className="relative p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <div className="flex items-center justify-center space-x-4">
                    <Clock className="w-6 h-6 text-primary animate-pulse" />
                    <span className="font-fira-code text-primary text-lg">
                      [HISTORICAL_DATA_LOADED]
                    </span>
                    <Clock className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const EventIcon = event.icon;
                const isActive = index === currentTimelineIndex;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      animate={isActive ? { 
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(0, 255, 65, 0)",
                          "0 0 0 20px rgba(0, 255, 65, 0.2)",
                          "0 0 0 0 rgba(0, 255, 65, 0)"
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-20 ${
                        isActive ? 'bg-primary border-primary' : 'bg-black border-primary/50'
                      }`}
                    />

                    {/* Event Card */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`${isLeft ? 'mr-8' : 'ml-8'} w-full max-w-lg`}
                    >
                      <Card className={`bg-black/80 ${event.borderColor} backdrop-blur-sm overflow-hidden transition-all duration-300 ${
                        isActive ? 'shadow-lg shadow-primary/20' : ''
                      }`}>
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="relative">
                                <EventIcon className={`w-8 h-8 ${event.statusColor}`} />
                                {isActive && (
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-2 rounded-full border-2 border-primary/30"
                                  />
                                )}
                              </div>
                              <div>
                                <h3 className={`text-xl font-orbitron font-black ${event.statusColor}`}>
                                  {event.title}
                                </h3>
                                <p className="text-sm font-fira-code text-primary/70">
                                  {event.date}
                                </p>
                              </div>
                            </div>
                            <Badge variant={index === 0 ? "denied" : index === 1 ? "status" : "granted"}>
                              {event.status}
                            </Badge>
                          </div>
                          
                          <h4 className="text-lg font-rajdhani font-bold text-primary/90">
                            {event.subtitle}
                          </h4>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-foreground/90 leading-relaxed">
                            {event.description}
                          </p>

                          {/* Event Specific Content */}
                          {event.id === "last-opening" && event.metrics && (
                            <div className="grid grid-cols-3 gap-4">
                              {event.metrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                                  <div className={`text-lg font-bold ${
                                    metric.trend === 'up' ? 'text-green-400' : 
                                    metric.trend === 'down' ? 'text-red-400' : 
                                    'text-yellow-400'
                                  }`}>
                                    {metric.value}
                                  </div>
                                  <div className="text-xs text-foreground/70">{metric.label}</div>
                                </div>
                              ))}
                            </div>
                          )}

                          {event.id === "development" && event.achievements && (
                            <div className="space-y-3">
                              {event.achievements.map((achievement, achIndex) => (
                                <motion.div
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                                  viewport={{ once: true }}
                                  className="flex items-center space-x-3"
                                >
                                  {achievement.completed ? (
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                  ) : (
                                    <XCircle className="w-5 h-5 text-red-400" />
                                  )}
                                  <achievement.icon className="w-4 h-4 text-primary" />
                                  <span className="text-foreground/90">{achievement.text}</span>
                                </motion.div>
                              ))}
                            </div>
                          )}

                          {event.id === "aftermath" && event.stats && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {event.stats.map((stat, statIndex) => (
                                <div key={statIndex} className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                                  <stat.icon className="w-5 h-5 text-primary" />
                                  <div>
                                    <div className="text-lg font-bold text-primary">{stat.value}</div>
                                    <div className="text-xs text-foreground/70">{stat.label}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </CardContent>

                        {/* Corner Details */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Timeline Progress Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-4 mt-12"
            >
              {timelineEvents.map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: index === currentTimelineIndex ? 1.3 : 1,
                    opacity: index === currentTimelineIndex ? 1 : 0.5
                  }}
                  className={`w-4 h-4 rounded-full ${
                    index === currentTimelineIndex ? 'bg-primary' : 'bg-primary/30'
                  } border-2 border-primary/50`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-red-500/20 to-primary/20 border-primary/50 backdrop-blur-sm max-w-4xl mb-8">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
                  <h3 className="text-3xl md:text-4xl font-orbitron font-black text-foreground">
                    <span className="text-red-400">NÃO PERCA</span>
                    <span className="text-primary"> NOVAMENTE</span>
                  </h3>
                  <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
                </div>
                
                <p className="text-xl font-rajdhani text-foreground/90">
                  A próxima abertura pode demorar mais um ano
                </p>

                <div className="relative p-4 bg-black/50 border border-red-400/30 rounded-lg">
                  <p className="font-fira-code text-red-400/90 text-sm italic">
                    [WARNING] Quem perdeu novembro de 2023 passou 2024 inteiro tentando entrar
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button variant="cyber" size="xxl" className="group">
            <Lock className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            <span className="relative z-10 font-orbitron font-bold tracking-wide text-xl">
              GARANTIR ACESSO AGORA
            </span>
            <Zap className="w-6 h-6 ml-3 group-hover:animate-pulse" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Scanning Grid Component
const ScanningGrid = () => {
  return (
    <div 
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}
    />
  );
};

// Matrix Rain Component
const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ position: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 15 }, () => ({
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

export default TimingSection; 