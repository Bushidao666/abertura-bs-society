'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { AlertTriangle, TrendingUp, Users, Clock, Target, Zap, Terminal, Shield, Activity, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface TimelineItem {
  year: string;
  wave: string;
  value: string;
  description: string;
  status: 'missed' | 'saturated';
  impact: string;
}

const PatternSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentItemIndex, setCurrentItemIndex] = useState(-1);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const timelineData: TimelineItem[] = [
    {
      year: '2005',
      wave: 'Marketing de Conteúdo',
      value: 'R$ 850M+',
      description: 'Early adopters dominaram blogs e SEO antes de todo mundo descobrir',
      status: 'missed',
      impact: 'Gigantes como Neil Patel nasceram aqui'
    },
    {
      year: '2012',
      wave: 'Marketing de Afiliados',
      value: 'R$ 2.3B+',
      description: 'Afiliados secretos já faturavam 6 dígitos enquanto você nem sabia que existia',
      status: 'missed',
      impact: 'Mercado virou mainstream em 2018'
    },
    {
      year: '2015',
      wave: 'Lançamentos Digitais',
      value: 'R$ 1.7B+',
      description: 'Fórmula de lançamento criou dezenas de millionários digitais',
      status: 'missed',
      impact: 'Quando você descobriu, já tinham 50 gurus vendendo o mesmo'
    },
    {
      year: '2017',
      wave: 'Dropshipping',
      value: 'R$ 4.1B+',
      description: 'Jovens de 19 anos faturavam R$ 100k/mês importando da China',
      status: 'missed',
      impact: 'Facebook ads ficaram saturados em 2020'
    },
    {
      year: '2020',
      wave: 'TikTok Marketing',
      value: 'R$ 3.2B+',
      description: 'Creators construíram impérios enquanto você achava que era "dancinha"',
      status: 'missed',
      impact: 'Algoritmo mudou, orgânico morreu'
    },
    {
      year: '2023',
      wave: 'IA Generativa',
      value: 'R$ 12B+',
      description: 'GPT-3 early access users monopolizaram consultoria de IA',
      status: 'saturated',
      impact: 'Agora todo mundo é "especialista em IA"'
    }
  ];

  const warningReasons = [
    {
      icon: Users,
      title: 'Descoberta Sigilosa',
      description: 'Quem descobre primeiro explora na surdina por meses',
      color: 'text-primary'
    },
    {
      icon: Clock,
      title: 'Timing Manipulado',
      description: 'Só contam para o mundo quando já garantiram a aposentadoria',
      color: 'text-primary'
    },
    {
      icon: TrendingUp,
      title: 'Saturação Oculta',
      description: 'Você recebe informação quando o mercado já está saturado',
      color: 'text-primary'
    },
    {
      icon: Target,
      title: 'Método Defasado',
      description: 'Gurus vendem "método novo" = mercado já morto há meses',
      color: 'text-primary'
    }
  ];

  // Typing effect for main title
  useEffect(() => {
    if (isInView) {
      const text = 'VOCÊ RECONHECE ESSE PADRÃO?';
      let index = 0;
      
      const timer = setInterval(() => {
        if (index <= text.length) {
          setTypedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  // Sequential timeline animation
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentItemIndex(prev => {
            if (prev < timelineData.length - 1) {
              return prev + 1;
            } else {
              clearInterval(interval);
              return prev;
            }
          });
        }, 300);

        return () => clearInterval(interval);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isInView, timelineData.length]);

  return (
    <section ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
      {/* Background Matrix Effects */}
      <div className="absolute inset-0 opacity-10">
        <MatrixRain />
      </div>

      {/* Scanning Lines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{ 
            y: ['0%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
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
            <span className="font-mono text-sm text-primary/70">/pattern-analysis/</span>
            <span className="font-mono text-xs text-primary/50">opportunity-scanner</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="status">
              <Activity className="w-3 h-3 mr-1" />
              SCANNING
            </Badge>
            <Badge variant="secret">
              <Database className="w-3 h-3 mr-1" />
              [HISTORICAL DATA]
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
          {/* Terminal Window */}
          <Card className="inline-block bg-black/80 border-primary/30 backdrop-blur-sm max-w-5xl mb-8">
            <CardHeader className="flex-row items-center justify-between p-3 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <span className="font-mono text-sm text-primary/70">spyhacker@blacksider:~/opportunity_analysis$</span>
              </div>
              <Badge variant="access">LEVEL 5 CLEARANCE</Badge>
            </CardHeader>
            
            <CardContent className="p-6 text-left">
              <div className="font-fira-code text-sm space-y-2 mb-6">
                <div className="text-foreground/60">
                  <span className="text-primary"># </span>Iniciando análise de padrões do mercado...
                </div>
                <div className="text-foreground">
                  <span className="text-primary">$</span> ./scan_missed_opportunities.sh
                </div>
                <div className="text-foreground/60">
                  <span className="text-primary"># </span>[STATUS] Carregando dados históricos...
                </div>
                <div className="text-primary">
                  <span className="animate-pulse">&gt;</span> PATTERN_DETECTED: TRUE
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-center leading-tight">
                <span className="neon-glow text-primary">
                  {typedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className={`text-primary ml-2 ${typedText === 'VOCÊ RECONHECE ESSE PADRÃO?' ? 'opacity-0' : ''}`}
                >
                  _
                </motion.span>
              </h2>
            </CardContent>
          </Card>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-2xl font-rajdhani text-foreground/90"
          >
            <span className="text-primary font-fira-code">[ANALYSIS_RESULT]</span> Histórico de oportunidades que você perdeu
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mb-20">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={currentItemIndex >= index ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    animate={currentItemIndex >= index ? {
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 0 rgba(0, 255, 65, 0)',
                        '0 0 20px rgba(0, 255, 65, 0.8)',
                        '0 0 0 rgba(0, 255, 65, 0)'
                      ]
                    } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-6 h-6 bg-primary rounded-full border-4 border-black relative"
                  >
                    <div className="w-full h-full bg-primary rounded-full animate-pulse" />
                    <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative max-w-lg ${
                    index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'
                  }`}
                >
                  <Card 
                    className={`bg-black/80 ${
                      item.status === 'missed' ? 'border-primary/30' : 'border-primary/50'
                    } backdrop-blur-sm transition-all duration-300 ${
                      hoveredItem === index ? 'border-primary/70 shadow-2xl shadow-primary/20' : ''
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl font-orbitron font-black text-primary">
                            {item.year}
                          </span>
                          <Badge 
                            variant={item.status === 'missed' ? 'secret' : 'denied'}
                            className="font-fira-code text-xs"
                          >
                            {item.status === 'missed' ? 'OPPORTUNITY_MISSED' : 'MARKET_SATURATED'}
                          </Badge>
                        </div>
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Wave Name */}
                      <h3 className="text-xl md:text-2xl font-rajdhani font-bold text-foreground">
                        {item.wave}
                      </h3>

                      {/* Value Generated */}
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="text-primary font-fira-code font-bold text-lg">
                          {item.value}
                        </span>
                        <span className="text-foreground/60 text-sm">gerados pelos early adopters</span>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/90 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Impact */}
                      <div className="border-t border-primary/20 pt-3">
                        <div className="text-sm font-fira-code">
                          <span className="text-primary">[IMPACT]</span>{' '}
                          <span className="text-foreground/70">{item.impact}</span>
                        </div>
                      </div>

                      {/* Corner Details */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Truth Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <Card className="max-w-5xl mx-auto bg-black/80 border-primary/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center relative">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg" />
              
              {/* Header */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-black text-foreground mb-8 relative z-10">
                <span className="neon-glow text-primary">A VERDADE</span> QUE DÓI
              </h3>

              {/* Main Quote */}
              <blockquote className="text-xl md:text-2xl font-rajdhani text-foreground/90 leading-relaxed italic relative z-10">
                "Todas essas ondas giraram <span className="text-primary font-bold neon-glow">BILHÕES</span>. 
                Criaram fortunas gigantescas. Mas quando você descobriu, já era tarde demais. 
                Você sempre chegou quando sobraram apenas as <span className="text-primary/70 font-bold">migalhas</span>."
              </blockquote>

              {/* Corner Details */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/50" />
            </CardContent>
          </Card>
        </motion.div>

        {/* Warning Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-orbitron font-black text-center text-foreground mb-12">
            <span className="text-primary">[SYSTEM_ANALYSIS]</span> Por Que Isso Acontece?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {warningReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-black/80 border-primary/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 group">
                  <CardContent className="p-6 relative">
                    {/* Warning Icon */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <reason.icon className={`w-8 h-8 ${reason.color}`} />
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.7, 0.3]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className="absolute inset-0 rounded-full bg-primary/20"
                        />
                      </div>
                      <AlertTriangle className="w-6 h-6 text-primary animate-pulse" />
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-fira-code font-bold text-foreground mb-3">
                      {reason.title}
                    </h4>

                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed">
                      {reason.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ 
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="w-3 h-3 bg-primary rounded-full"
                      />
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50 group-hover:border-primary transition-colors" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50 group-hover:border-primary transition-colors" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Matrix Rain Component (consistent with other sections)
const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ position: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 30 }, () => ({
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

export default PatternSection; 