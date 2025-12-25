import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Factory, Hotel, Landmark, Warehouse, TreePine } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: Building2,
    title: '주거 시설',
    description: '혁신적인 주거 공간 설계로 삶의 질을 높이는 프리미엄 주거 프로젝트',
    projects: '150+',
  },
  {
    icon: Factory,
    title: '산업 시설',
    description: '반도체, 데이터센터 등 첨단 산업 시설의 최적화된 설계 솔루션',
    projects: '80+',
  },
  {
    icon: Hotel,
    title: '호텔 & 리조트',
    description: '품격 있는 휴식과 경험을 제공하는 호스피탈리티 공간 디자인',
    projects: '45+',
  },
  {
    icon: Landmark,
    title: '문화 시설',
    description: '지역사회의 문화적 가치를 담아내는 공공 문화 공간 설계',
    projects: '60+',
  },
  {
    icon: Warehouse,
    title: '상업 시설',
    description: '브랜드 아이덴티티를 공간으로 구현하는 리테일 및 오피스 설계',
    projects: '120+',
  },
  {
    icon: TreePine,
    title: '친환경 건축',
    description: 'LEED, WELL 인증 기반의 지속 가능한 그린 빌딩 솔루션',
    projects: '90+',
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: cardY, opacity: cardOpacity, scale: cardScale }}
      className="group relative p-8 bg-card border border-border hover:border-primary/50 transition-all duration-500"
    >
      {/* Icon */}
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-14 h-14 mb-6 flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500"
      >
        <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
      </motion.div>

      {/* Content */}
      <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Projects Count */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <span className="text-muted-foreground text-xs font-body tracking-wide">
          완료 프로젝트
        </span>
        <span className="font-display text-2xl text-primary">
          {service.projects}
        </span>
      </div>

      {/* Hover Line Animation */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-gold"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header with Parallax */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-primary" 
            />
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
              Services
            </span>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-primary" 
            />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-foreground font-light mb-6">
            전문 서비스
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            다양한 분야의 전문 역량을 바탕으로 클라이언트의 비전을 현실로 구현합니다
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
