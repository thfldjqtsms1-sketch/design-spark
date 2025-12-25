import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const offices = [
  {
    city: '서울',
    address: '서울특별시 강남구 테헤란로 152',
    phone: '+82 2 1234 5678',
  },
  {
    city: '부산',
    address: '부산광역시 해운대구 센텀중앙로 48',
    phone: '+82 51 987 6543',
  },
  {
    city: '싱가포르',
    address: '1 Marina Boulevard, Singapore',
    phone: '+65 6789 0123',
  },
];

export const ContactSection = () => {
  return (
    <section id="careers" className="py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-charcoal -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-primary" />
              <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
                Join Us
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light leading-[1.1] mb-8">
              우리의 철학이
              <span className="block mt-2">창조하는 모든 것의</span>
              <span className="text-gradient-gold block mt-2">원동력입니다</span>
            </h2>

            <p className="text-muted-foreground font-body leading-relaxed mb-8 max-w-md">
              기회에서 커리어 성장까지, 함께 의미 있는 것을 만들어 나갑시다.
              FORMA와 함께 건축의 미래를 설계하세요.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg">
                채용 공고 보기
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="gold-outline" size="lg">
                문의하기
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="mt-12 pt-12 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="mailto:contact@forma.kr" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-body text-sm">contact@forma.kr</span>
                </a>
                <a href="tel:+8221234567" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-body text-sm">+82 2 1234 5678</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Offices */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card p-8 lg:p-12"
          >
            <h3 className="font-display text-2xl text-foreground mb-8">글로벌 오피스</h3>
            
            <div className="space-y-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="group pb-8 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                      {office.city}
                    </h4>
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-sm font-body mb-2">{office.address}</p>
                  <p className="text-primary text-sm font-body">{office.phone}</p>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video bg-secondary flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-muted-foreground text-sm font-body">지도 보기</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
