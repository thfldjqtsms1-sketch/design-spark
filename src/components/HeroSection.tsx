import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-architecture.jpg';

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0"
      >
        <img 
          src={heroImage} 
          alt="Modern architecture building at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-16 bg-primary" />
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
              혁신적인 건축 디자인
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[0.95] mb-8"
          >
            <span className="block">공간의</span>
            <span className="block mt-2">
              <span className="text-gradient-gold">새로운 가능성</span>을
            </span>
            <span className="block mt-2">제시합니다</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl font-body font-light max-w-xl mb-12"
          >
            첨단 기술과 창의적 사고로 미래 건축의 패러다임을 선도하는
            글로벌 디자인 그룹
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wide hover:shadow-gold transition-all duration-300"
            >
              프로젝트 보기
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/30 text-foreground font-body text-sm tracking-wide hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              더 알아보기
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-3 font-body">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Side Stats */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-8"
      >
        {[
          { number: '30+', label: '년 경력' },
          { number: '500+', label: '완료 프로젝트' },
          { number: '15', label: '글로벌 오피스' },
        ].map((stat, index) => (
          <div key={index} className="text-right">
            <div className="font-display text-3xl text-foreground">{stat.number}</div>
            <div className="text-muted-foreground text-xs tracking-wide font-body">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
