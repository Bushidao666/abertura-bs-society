'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Eye, Terminal, Zap, Lock, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced Matrix Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <MatrixRain />
      </div>



      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4"
      >
        {/* Top Terminal Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between mb-8 p-4 rounded-lg bg-black/50 backdrop-blur-md border border-primary/30"
        >
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-mono text-sm text-primary/70">/blacksider-society/</span>
            <span className="font-mono text-xs text-primary/50">v2.1.7</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="status">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              LIVE
            </Badge>
            <Badge variant="secret">
              <Lock className="w-3 h-3 mr-1" />
              [CLASSIFIED]
            </Badge>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center">
          {/* Main Headline with Advanced Typography */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black leading-none tracking-tight mb-4">
              <TypeAnimation
                sequence={[
                  500,
                  'SIM, VOCÊ ESTÁ SENDO...',
                  1500,
                  'SIM, VOCÊ ESTÁ SENDO...\nMANIPULADO AGORA',
                  2000,
                  'SIM, VOCÊ ESTÁ SENDO...\nMANIPULADO AGORA\n(MAS TALVEZ SEJA A ÚLTIMA VEZ)',
                  4000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
                className="neon-glow text-primary"
              />
            </h1>
          </motion.div>

          {/* Enhanced Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-rajdhani font-medium text-foreground/90 max-w-5xl mx-auto leading-relaxed">
              Se você cansou de sempre chegar atrasado nas oportunidades,{' '}
              <span className="text-primary font-bold">
                é hora de descobrir onde elas nascem
              </span>
            </p>
          </motion.div>

          {/* Lead Magnético with Better Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mb-12"
          >
            <div className="relative max-w-4xl mx-auto p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-primary/20">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
              
              <p className="text-lg md:text-xl font-mono text-foreground/80 italic leading-relaxed">
                "Eu sei o que você pensa: 'Ah, mais um guru me prometendo o mundo'. 
                Assista até o final e descubra por que você sempre chega atrasado no jogo."
              </p>
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="space-y-6"
          >
            {/* Main CTA Button */}
            <div className="relative">
              <Button variant="cyber" size="xxl" className="group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <Eye className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                <span className="relative z-10 font-orbitron font-bold tracking-wide text-lg">
                  DESCOBRIR A VERDADE
                </span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                
                {/* Corner Details */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-primary group-hover:border-primary/80 transition-colors" />
                <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-primary group-hover:border-primary/80 transition-colors" />
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-primary group-hover:border-primary/80 transition-colors" />
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-primary group-hover:border-primary/80 transition-colors" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-foreground/60">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Informações exclusivas</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                <span>Método testado</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>Acesso limitado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Floating Particles */}
      <FloatingParticles />

      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse" 
             style={{ 
               backgroundSize: '100% 4px',
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.1) 2px, rgba(0, 255, 65, 0.1) 4px)'
             }} 
        />
      </div>
    </section>
  );
};

// Enhanced Matrix Rain Component
const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ position: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 60 }, () => ({
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
          className="absolute w-0.5 h-32 bg-gradient-to-b from-transparent via-primary/60 to-primary/20"
          style={{ left: `${drop.position}%` }}
        />
      ))}
    </div>
  );
};



// Enhanced Floating Particles Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ 
    x: number; 
    y: number; 
    delay: number; 
    scale: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      scale: Math.random() * 0.8 + 0.3,
      duration: Math.random() * 8 + 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
            scale: [particle.scale, particle.scale * 1.5, particle.scale],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{ 
            left: `${particle.x}%`, 
            top: `${particle.y}%`,
            boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection; 