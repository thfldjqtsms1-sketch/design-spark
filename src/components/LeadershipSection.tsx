import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const leaders = [
  {
    name: '김린',
    role: 'CEO & 수석 건축가',
    initial: 'KL',
    description: '30년 경력의 건축가로 혁신적인 설계 철학을 선도',
  },
  {
    name: '박현우',
    role: '디자인 총괄',
    initial: 'PH',
    description: '국제 건축상 다수 수상, 지속가능 건축 전문가',
  },
  {
    name: '이수진',
    role: '기술 총괄',
    initial: 'LS',
    description: '첨단 건축 기술 및 BIM 시스템 도입 리더',
  },
  {
    name: '정민호',
    role: '프로젝트 총괄',
    initial: 'JM',
    description: '대규모 글로벌 프로젝트 관리 전문가',
  },
];

export const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-32 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-primary" />
              <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
                Leadership
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-[1.1] mb-8">
              축적된 전문성으로
              <span className="text-gradient-gold block mt-2">글로벌 건축을</span>
              선도합니다
            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-8 max-w-md">
              FORMA의 리더십 팀은 각 분야 최고의 전문가들로 구성되어
              혁신적인 건축 솔루션을 제공합니다.
            </p>

            <a 
              href="#"
              className="group inline-flex items-center gap-2 text-primary font-body text-sm hover:gap-4 transition-all duration-300"
            >
              전체 팀 보기
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Side - Leaders */}
          <div className="space-y-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group p-6 bg-card border border-border hover:border-primary/50 transition-all duration-500 flex items-center gap-6"
              >
                {/* Avatar */}
                <div className="w-20 h-20 flex-shrink-0 border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500">
                  <span className="font-display text-2xl text-primary">{leader.initial}</span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-primary text-sm font-body mb-2">{leader.role}</p>
                  <p className="text-muted-foreground text-sm font-body">{leader.description}</p>
                </div>

                {/* Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
