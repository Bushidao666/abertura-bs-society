'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Terminal, Eye, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const VSLSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => setShowControls(false), 3000);
    } else {
      setShowControls(true);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, isHovered]);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Matrix Effects */}
      <div className="absolute inset-0 opacity-10">
        <MatrixRain />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8 p-4 rounded-lg bg-black/50 backdrop-blur-md border border-primary/30"
        >
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-primary animate-pulse" />
            <span className="font-mono text-sm text-primary/70">/classified-intel/</span>
            <span className="font-mono text-xs text-primary/50">restricted-access</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="status">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              RECORDING
            </Badge>
            <Badge variant="secret">
              <Shield className="w-3 h-3 mr-1" />
              [TOP SECRET]
            </Badge>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black leading-tight mb-6">
            <span className="neon-glow text-primary">A VERDADE</span>{' '}
            <span className="text-foreground">QUE ELES NÃO QUEREM</span><br />
            <span className="text-foreground">QUE VOCÊ SAIBA</span>
          </h2>
          <p className="text-xl md:text-2xl font-rajdhani text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Assista este vídeo até o final e descubra por que você sempre chega atrasado no jogo
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto mb-12"
        >
          <Card className="bg-black/50 border-primary/30 backdrop-blur-sm overflow-hidden">
            <CardHeader className="flex-row items-center justify-between p-3 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-primary/70">video-stream-001.mp4</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs font-mono text-primary/60">
                  <span>VIEWERS:</span>
                  <span className="text-primary">1,337</span>
                </div>
                <Badge variant="access">4K SECURE</Badge>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div 
                className="relative w-full aspect-video bg-black group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  preload="metadata"
                >
                  <source src="/video/blacksider-vsl.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>

                {/* Thumbnail/Placeholder */}
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-black to-primary/5"
                  >
                    {/* Background Matrix Effect */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full"
                           style={{
                             backgroundImage: `repeating-linear-gradient(
                               0deg,
                               transparent,
                               transparent 2px,
                               rgba(0, 255, 65, 0.1) 2px,
                               rgba(0, 255, 65, 0.1) 4px
                             ),
                             repeating-linear-gradient(
                               90deg,
                               transparent,
                               transparent 2px,
                               rgba(0, 255, 65, 0.1) 2px,
                               rgba(0, 255, 65, 0.1) 4px
                             )`
                           }} 
                      />
                    </div>

                    {/* Terminal Elements */}
                    <div className="absolute top-6 left-6 font-fira-code text-primary/40 text-sm">
                      <div>&gt; INITIALIZING_STREAM...</div>
                      <div className="mt-1">&gt; DECRYPTING_DATA...</div>
                      <div className="mt-1">&gt; STATUS: READY</div>
                    </div>

                    <div className="absolute bottom-6 right-6 font-fira-code text-primary/40 text-sm text-right">
                      <div>CLASSIFICATION: TOP_SECRET</div>
                      <div className="mt-1">CLEARANCE_LEVEL: 5</div>
                    </div>

                    {/* Central Play Area */}
                    <div className="text-center z-10">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative mb-6"
                      >
                        <Button
                          variant="portal"
                          size="xxl"
                          onClick={handlePlayPause}
                          className="group relative w-32 h-32 rounded-full"
                        >
                          <Play className="w-12 h-12 text-primary ml-2" />
                          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
                          <div className="absolute inset-4 rounded-full border border-primary/50" />
                        </Button>
                      </motion.div>
                      
                      <h3 className="text-3xl md:text-4xl font-orbitron font-black text-foreground mb-3">
                        <span className="text-primary">ACESSO</span> LIBERADO
                      </h3>
                      <p className="text-primary font-fira-code text-lg mb-4">
                        &gt; CLICK_TO_DECRYPT_
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 text-sm font-mono text-foreground/60">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-primary" />
                          <span>DURAÇÃO: 23:47</span>
                        </div>
                        <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          <span>CRIPTOGRAFADO</span>
                        </div>
                      </div>
                    </div>

                    {/* Corner Indicators */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/50" />
                  </motion.div>
                )}

                {/* Enhanced Custom Controls */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: (showControls || isHovered) && isPlaying ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4"
                >
                  {/* Progress Bar */}
                  <div
                    className="relative h-2 bg-border rounded-full mb-4 cursor-pointer group"
                    onClick={handleSeek}
                  >
                    <div
                      className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-150"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-primary/50"
                      style={{ left: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePlayPause}
                        className="text-foreground hover:text-primary"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleMute}
                        className="text-foreground hover:text-primary"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </Button>
                      
                      <span className="text-sm text-foreground/70 font-fira-code">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.currentTime = 0;
                            setCurrentTime(0);
                          }
                        }}
                        className="text-foreground hover:text-primary"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.requestFullscreen();
                          }
                        }}
                        className="text-foreground hover:text-primary"
                      >
                        <Maximize className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative max-w-3xl mx-auto p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-primary/20 mb-8">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
            
            <p className="text-lg font-rajdhani text-foreground/80 mb-4">
              Não consegue assistir agora? Sem problemas...
            </p>
            <p className="text-sm font-mono text-foreground/60 italic">
              "Receba o acesso direto ao arquivo descriptografado em seu email."
            </p>
          </div>

          <Button variant="cyber" size="xl" className="group">
            <Lock className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            <span className="relative z-10 font-orbitron font-bold tracking-wide">
              RECEBER ACESSO SEGURO
            </span>
            
            {/* Corner Details */}
            <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-primary group-hover:border-primary/80 transition-colors" />
            <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-primary group-hover:border-primary/80 transition-colors" />
            <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-primary group-hover:border-primary/80 transition-colors" />
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-primary group-hover:border-primary/80 transition-colors" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Matrix Rain for Background (same as Hero Section)
const MatrixRain = () => {
  const [drops, setDrops] = useState<Array<{ position: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 40 }, () => ({
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

export default VSLSection;