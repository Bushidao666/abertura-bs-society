'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Shield, TrendingUp, TrendingDown, Lock, Unlock, Eye, Zap, AlertTriangle, Terminal, Database, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const GameRuleSection = () => {
  const [decryptedText, setDecryptedText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [showClassified, setShowClassified] = useState(false);
  const [currentBinaryIndex, setCurrentBinaryIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const originalText = "E a única forma de descobrir antes dos outros é estar no mesmo lugar que os players que dominam o mercado estão.";
  const binaryChars = '01';

  // Decryption effect
  useEffect(() => {
    if (isInView && !isDecrypting) {
      const timer = setTimeout(() => {
        setIsDecrypting(true);
        setShowClassified(true);
        
        let currentIndex = 0;
        const decryptInterval = setInterval(() => {
          if (currentIndex <= originalText.length) {
            const decrypted = originalText.slice(0, currentIndex);
            const remaining = originalText.slice(currentIndex);
            const scrambled = remaining.split('').map(() => 
              Math.random() > 0.7 ? binaryChars[Math.floor(Math.random() * binaryChars.length)] : '█'
            ).join('');
            
            setDecryptedText(decrypted + scrambled);
            currentIndex += Math.random() > 0.8 ? 2 : 1;
          } else {
            setDecryptedText(originalText);
            clearInterval(decryptInterval);
          }
        }, 50);

        return () => clearInterval(decryptInterval);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isInView, isDecrypting, originalText]);

  // Binary rain effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBinaryIndex(prev => (prev + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
      {/* Background Matrix Effects */}
      <div className="absolute inset-0 opacity-10">
        <MatrixRain />
      </div>

      {/* Scanner Line */}
      <motion.div
        animate={{
          y: ['-100vh', '100vh'],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
          delay: 1
        }}
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent z-10"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-8 p-4 rounded-lg bg-black/50 backdrop-blur-md border border-primary/30"
        >
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-mono text-sm text-primary/70">/classified-operations/</span>
            <span className="font-mono text-xs text-primary/50">game-rule-protocol</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="status">
              <Activity className="w-3 h-3 mr-1" />
              DECRYPTING
            </Badge>
            <Badge variant="secret">
              <Database className="w-3 h-3 mr-1" />
              [TOP SECRET]
            </Badge>
          </div>
        </motion.div>

        {/* Classified Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          {/* Security Terminal */}
          <Card className="inline-block bg-black/80 border-primary/40 backdrop-blur-sm max-w-6xl">
            <CardHeader className="flex-row items-center justify-between p-4 border-b border-primary/20">
              <div className="flex items-center space-x-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-primary font-fira-code text-sm">
                  CLASSIFICATION LEVEL: TOP SECRET
                </span>
              </div>
              <div className="flex space-x-3">
                <Badge variant="access">EYES ONLY</Badge>
                <Badge variant="denied">CLEARANCE REQUIRED</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              {/* Security Status */}
              <div className="mb-8 text-primary font-fira-code text-sm">
                <div className="flex items-center space-x-2 mb-2">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-2 bg-primary rounded-full"
                  />
                  <span>[SECURE CHANNEL ESTABLISHED]</span>
                </div>
                <div className="text-foreground/60 space-y-1">
                  <div># Accessing classified intelligence database...</div>
                  <div># Decrypting market manipulation protocols...</div>
                  <div className="text-primary">
                    &gt; PROTOCOL_STATUS: <span className="animate-pulse">ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-center mb-6"
              >
                <DecryptingText text="A ÚNICA REGRA DO JOGO" />
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center text-primary font-fira-code text-lg"
              >
                [CLASSIFIED_INFORMATION] O que ninguém te contou
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Dichotomy Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative max-w-6xl mx-auto">
            {/* Quote Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <blockquote className="text-2xl md:text-3xl font-rajdhani text-foreground/90 italic leading-relaxed">
                "O mercado digital não é democrático. Só existem{' '}
                <span className="text-primary font-bold neon-glow">dois resultados possíveis</span>:"
              </blockquote>
            </motion.div>

            {/* Split Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SUCCESS PATH */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 backdrop-blur-sm h-full relative overflow-hidden">
                  {/* Success Particles */}
                  <div className="absolute inset-0">
                    <SuccessParticles />
                  </div>

                  <CardContent className="p-8 relative z-10">
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-black font-orbitron font-bold text-xl">1</span>
                      </div>
                    </div>

                    {/* Success Icon */}
                    <div className="flex items-center justify-center mb-6 mt-8">
                      <div className="relative">
                        <TrendingUp className="w-16 h-16 text-primary" />
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className="absolute inset-0 rounded-full bg-primary/30"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-orbitron font-black text-primary text-center mb-6 leading-tight">
                      VOCÊ FAZ DINHEIRO COMO JAMAIS FEZ NA VIDA
                    </h3>

                    {/* Money Counter */}
                    <div className="text-center">
                      <AnimatedCounter 
                        target={1000000} 
                        prefix="R$ " 
                        duration={3000}
                        className="text-4xl font-orbitron font-bold text-primary"
                      />
                      <p className="text-primary/80 mt-2 font-fira-code text-sm">
                        [RESULTADO MÉDIO DOS INSIDERS]
                      </p>
                    </div>

                    {/* Corner Details */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
                  </CardContent>
                </Card>
              </motion.div>

              {/* FAILURE PATH */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="bg-gradient-to-br from-muted to-black/50 border-primary/20 backdrop-blur-sm h-full relative overflow-hidden">
                  {/* Failure Particles */}
                  <div className="absolute inset-0">
                    <FailureParticles />
                  </div>

                  <CardContent className="p-8 relative z-10">
                    {/* Number Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-primary/30 border border-primary/50 rounded-full flex items-center justify-center">
                        <span className="text-primary font-orbitron font-bold text-xl">2</span>
                      </div>
                    </div>

                    {/* Failure Icon */}
                    <div className="flex items-center justify-center mb-6 mt-8">
                      <div className="relative">
                        <TrendingDown className="w-16 h-16 text-primary/50" />
                        <motion.div
                          animate={{
                            scale: [1, 0.8, 1],
                            opacity: [0.3, 0.1, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className="absolute inset-0 rounded-full bg-primary/10"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-orbitron font-black text-primary/70 text-center mb-6 leading-tight">
                      VOCÊ PERDE DINHEIRO COMO JAMAIS PERDEU NA VIDA
                    </h3>

                    {/* Money Counter */}
                    <div className="text-center">
                      <AnimatedCounter 
                        target={-50000} 
                        prefix="R$ " 
                        duration={3000}
                        className="text-4xl font-orbitron font-bold text-primary/50"
                      />
                      <p className="text-primary/50 mt-2 font-fira-code text-sm">
                        [RESULTADO DOS QUE CHEGAM TARDE]
                      </p>
                    </div>

                    {/* Corner Details */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/30" />
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/30" />
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/30" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/30" />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Classified Revelation */}
        {showClassified && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <div className="relative max-w-5xl mx-auto">
              {/* Classified Document Container */}
              <Card className="bg-black/80 border-primary/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="bg-primary/20 border-b border-primary/50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Lock className="w-5 h-5 text-primary" />
                      <span className="font-fira-code text-primary text-sm">
                        CLASSIFIED INTELLIGENCE BRIEFING
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-primary" />
                      <span className="font-fira-code text-primary text-xs">
                        CLEARANCE LEVEL: COSMIC
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 relative">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-black text-foreground mb-8 text-center relative z-10">
                    <span className="neon-glow text-primary">A DIFERENÇA</span> REAL
                  </h3>

                  <div className="space-y-6 text-center relative z-10">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="text-2xl md:text-3xl font-rajdhani font-bold text-foreground"
                    >
                      Não é sobre ter as melhores ferramentas.
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="text-2xl md:text-3xl font-rajdhani font-bold text-primary"
                    >
                      É sobre descobrir onde está o ouro PRIMEIRO.
                    </motion.p>

                    {/* Decrypted Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.5 }}
                      className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-lg relative"
                    >
                      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
                      
                      <p className="text-lg md:text-xl font-rajdhani text-foreground/90 italic leading-relaxed">
                        <span className="text-primary font-fira-code">[DECRYPTED]</span><br />
                        <span className="font-fira-code text-primary">"{decryptedText}"</span>
                      </p>
                    </motion.div>
                  </div>

                  {/* Corner Details */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/50" />
                </CardContent>

                {/* Holographic Border Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="absolute inset-0 border-2 border-primary/30 rounded-lg"
                  />
                </div>
              </Card>
            </div>
          </motion.div>
        )}

        {/* Access Portal CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block">
            <HolographicPortal />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Decrypting Text Component
const DecryptingText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);

  useEffect(() => {
    const chars = '█▓▒░01ABCDEF';
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayText(current => 
        text.split('').map((char, index) => {
          if (index < iterations) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      
      if (iterations >= text.length) {
        setIsDecrypted(true);
        clearInterval(interval);
      }
      
      iterations += 1 / 3;
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`${isDecrypted ? 'neon-glow text-primary' : 'text-primary/70'}`}>
      {displayText}
    </span>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ 
  target, 
  prefix = '', 
  duration = 2000, 
  className = '' 
}: { 
  target: number; 
  prefix?: string; 
  duration?: number; 
  className?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        setCount(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, started, target, duration]);

  return (
    <div ref={ref} className={className}>
      {prefix}{count.toLocaleString('pt-BR')}
    </div>
  );
};

// Success Particles Component
const SuccessParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: '100%', 
            x: `${Math.random() * 100}%`,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            y: '-100%',
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeOut'
          }}
          className="absolute w-2 h-2 bg-primary rounded-full"
        />
      ))}
    </div>
  );
};

// Failure Particles Component
const FailureParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: '-20%', 
            x: `${Math.random() * 100}%`,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            y: '120%',
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeIn'
          }}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
        />
      ))}
    </div>
  );
};

// Matrix Rain Component (consistent with other sections)
const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ position: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 25 }, () => ({
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

// Holographic Portal Component
const HolographicPortal = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer"
    >
      {/* Portal Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut'
          }}
          className="absolute inset-0 border-2 border-primary/30 rounded-full"
          style={{ 
            width: `${120 + i * 40}px`, 
            height: `${120 + i * 40}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Main Button */}
      <Button 
        variant="portal" 
        size="xxl" 
        className="relative z-10 group w-auto h-auto px-12 py-6 rounded-full"
      >
        {/* Scanning Line */}
        <motion.div
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"
        />
        
        <div className="flex items-center space-x-3 relative z-10">
          <Unlock className="w-6 h-6 text-primary" />
          <span className="text-xl font-orbitron font-bold text-primary">
            SOLICITAR ACESSO AO SISTEMA
          </span>
          <Zap className="w-6 h-6 text-primary" />
        </div>
        
        {/* Biometric Scanner */}
        <motion.div
          animate={{
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full"
        />
      </Button>
    </motion.div>
  );
};

export default GameRuleSection; 