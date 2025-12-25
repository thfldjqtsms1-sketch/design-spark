import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const leftContentY = useTransform(scrollYProgress, [0, 1], [150, -100]);
  const rightContentY = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const statsY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-charcoal relative overflow-hidden">
      {/* Background Pattern with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content with Parallax */}
          <motion.div style={{ y: leftContentY }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-px bg-primary" 
                />
                <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
                  About Us
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-[1.1] mb-8">
                기술과 신뢰로 
                <span className="text-gradient-gold block mt-2">시장을 선도하는</span>
                글로벌 디자인 기업
              </h2>

              <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                <p>
                  FORMA 건축은 30년 이상의 축적된 전문성을 바탕으로 
                  혁신적인 글로벌 디자인을 선보이는 건축 설계 기업입니다.
                </p>
                <p>
                  우리는 각 프로젝트에 최첨단 기술과 창의적 비전을 결합하여
                  지속 가능하고 인간 중심적인 공간을 창조합니다.
                </p>
              </div>

              {/* Stats with separate parallax */}
              <motion.div 
                style={{ y: statsY }}
                className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border"
              >
                {[
                  { value: '1995', label: '설립 연도' },
                  { value: '2,500+', label: '전문 인력' },
                  { value: '$15B', label: '총 프로젝트 규모' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index, duration: 0.6 }}
                  >
                    <div className="font-display text-3xl md:text-4xl text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm font-body">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Visual Element with Parallax */}
          <motion.div style={{ y: rightContentY }} className="relative">
            <div className="relative">
              {/* Main Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] bg-secondary overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 100 }}
                      className="w-32 h-32 mx-auto mb-8 border-2 border-primary rounded-full flex items-center justify-center"
                    >
                      <span className="font-display text-5xl text-primary">F</span>
                    </motion.div>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="font-display text-2xl text-foreground mb-2"
                    >
                      FORMA
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="text-muted-foreground text-sm tracking-[0.3em]"
                    >
                      건축 디자인 그룹
                    </motion.p>
                  </div>
                </div>
                
                {/* Decorative Lines */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-gold origin-left" 
                />
                <motion.div 
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-0 right-0 w-1 h-full bg-gradient-gold origin-bottom" 
                />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -right-8 -bottom-8 bg-card p-6 shadow-card max-w-xs"
              >
                <blockquote className="font-display text-lg text-foreground italic mb-4">
                  "우리의 철학은 모든 창조물에 스며들어,
                  기회에서 성장으로 이어집니다."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-display text-primary-foreground text-sm">KL</span>
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-body">김린</p>
                    <p className="text-muted-foreground text-xs font-body">CEO & 수석 건축가</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
