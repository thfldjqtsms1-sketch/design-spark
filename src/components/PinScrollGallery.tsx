import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '@/assets/hero-architecture.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectCorporate from '@/assets/project-corporate.jpg';
import projectDatacenter from '@/assets/project-datacenter.jpg';

const galleryImages = [
  {
    src: heroImage,
    title: '미래를 설계하다',
    subtitle: 'Designing Tomorrow',
  },
  {
    src: projectResidential,
    title: '도시의 랜드마크',
    subtitle: 'Urban Landmark',
  },
  {
    src: projectCorporate,
    title: '기술과 예술의 조화',
    subtitle: 'Tech Meets Art',
  },
  {
    src: projectDatacenter,
    title: '지속가능한 건축',
    subtitle: 'Sustainable Architecture',
  },
];

export const PinScrollGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative bg-background" style={{ height: `${galleryImages.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {galleryImages.map((image, index) => {
          const start = index / galleryImages.length;
          const end = (index + 1) / galleryImages.length;
          
          return (
            <GallerySlide
              key={index}
              image={image}
              index={index}
              scrollYProgress={scrollYProgress}
              start={start}
              end={end}
              isLast={index === galleryImages.length - 1}
            />
          );
        })}
        
        {/* Progress Indicators */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
          {galleryImages.map((_, index) => (
            <ProgressDot
              key={index}
              index={index}
              scrollYProgress={scrollYProgress}
              total={galleryImages.length}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-center"
        >
          <span className="text-foreground/60 text-xs tracking-[0.3em] uppercase font-body">
            스크롤하여 탐색
          </span>
        </motion.div>
      </div>
    </section>
  );
};

interface GallerySlideProps {
  image: typeof galleryImages[0];
  index: number;
  scrollYProgress: any;
  start: number;
  end: number;
  isLast: boolean;
}

const GallerySlide = ({ image, index, scrollYProgress, start, end, isLast }: GallerySlideProps) => {
  // Calculate visibility and transitions
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, isLast ? 1 : 0]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [1.2, 1, 1, isLast ? 1 : 0.9]
  );

  const y = useTransform(
    scrollYProgress,
    [start, end],
    ['0%', isLast ? '0%' : '-10%']
  );

  const textY = useTransform(
    scrollYProgress,
    [start, start + 0.1],
    [50, 0]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.1],
    [0, 1]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0"
    >
      {/* Background Image with Scale */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0"
      >
        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              0{index + 1} / 0{galleryImages.length}
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground font-light mb-4">
              {image.title}
            </h2>
            <p className="text-muted-foreground font-body text-xl tracking-widest">
              {image.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface ProgressDotProps {
  index: number;
  scrollYProgress: any;
  total: number;
}

const ProgressDot = ({ index, scrollYProgress, total }: ProgressDotProps) => {
  const start = index / total;
  const end = (index + 1) / total;
  
  const scale = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [1, 1.5, 1.5, 1]
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [
      'hsl(var(--muted-foreground))',
      'hsl(var(--primary))',
      'hsl(var(--primary))',
      'hsl(var(--muted-foreground))'
    ]
  );

  return (
    <motion.div
      style={{ scale, backgroundColor }}
      className="w-2 h-2 rounded-full"
    />
  );
};
