import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import projectResidential from '@/assets/project-residential.jpg';
import projectCorporate from '@/assets/project-corporate.jpg';
import projectDatacenter from '@/assets/project-datacenter.jpg';
import projectResort from '@/assets/project-resort.jpg';
import projectMuseum from '@/assets/project-museum.jpg';

const projects = [
  {
    id: 1,
    title: '한강 리버사이드 타워',
    location: '서울, 대한민국',
    category: '주거',
    image: projectResidential,
    year: '2024',
  },
  {
    id: 2,
    title: '테크노폴리스 본사',
    location: '판교, 대한민국',
    category: '오피스',
    image: projectCorporate,
    year: '2023',
  },
  {
    id: 3,
    title: '넥스트젠 데이터센터',
    location: '인천, 대한민국',
    category: '산업시설',
    image: projectDatacenter,
    year: '2024',
  },
  {
    id: 4,
    title: '오션뷰 리조트',
    location: '강릉, 대한민국',
    category: '호텔 & 리조트',
    image: projectResort,
    year: '2023',
  },
  {
    id: 5,
    title: '미래문화예술관',
    location: '부산, 대한민국',
    category: '문화시설',
    image: projectMuseum,
    year: '2024',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Image zoom effect on scroll
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  
  // Card parallax
  const cardY = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  return (
    <motion.article
      ref={cardRef}
      style={{ y: cardY, opacity: cardOpacity }}
      className="group relative overflow-hidden bg-card"
    >
      <div className={`${index < 3 ? 'aspect-[4/5]' : 'aspect-[16/10]'} overflow-hidden`}>
        <motion.img
          style={{ scale: imageScale, y: imageY }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-primary text-xs font-body tracking-wide">{project.category}</span>
          <span className="text-muted-foreground text-xs">•</span>
          <span className="text-muted-foreground text-xs font-body">{project.year}</span>
        </div>
        <h3 className={`font-display ${index < 3 ? 'text-xl' : 'text-2xl'} text-foreground mb-2 group-hover:text-primary transition-colors duration-300`}>
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm font-body">{project.location}</p>
      </div>

      <div className={`absolute ${index < 3 ? 'top-4 right-4' : 'top-6 right-6'} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
        <div className={`${index < 3 ? 'w-10 h-10' : 'w-12 h-12'} rounded-full bg-primary flex items-center justify-center`}>
          <ArrowUpRight className={`${index < 3 ? 'w-5 h-5' : 'w-6 h-6'} text-primary-foreground`} />
        </div>
      </div>
    </motion.article>
  );
};

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header with Parallax */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-px bg-primary" 
            />
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
              Featured Works
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl text-foreground font-light">
              주요 프로젝트
            </h2>
            <p className="text-muted-foreground font-body max-w-md text-sm leading-relaxed">
              혁신적인 설계와 지속 가능한 기술의 조화로 
              새로운 공간의 가치를 창조합니다
            </p>
          </div>
        </motion.div>

        {/* Projects Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Projects Grid - Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {projects.slice(3, 5).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 3} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <a 
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-body text-sm tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
          >
            모든 프로젝트 보기
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
