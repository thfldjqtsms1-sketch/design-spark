import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { name: '회사소개', href: '#about' },
    { name: '리더십', href: '#leadership' },
    { name: '뉴스룸', href: '#' },
    { name: '채용', href: '#careers' },
  ],
  services: [
    { name: '주거 시설', href: '#' },
    { name: '상업 시설', href: '#' },
    { name: '산업 시설', href: '#' },
    { name: '문화 시설', href: '#' },
  ],
  resources: [
    { name: '프로젝트', href: '#projects' },
    { name: '케이스 스터디', href: '#' },
    { name: '지속가능성', href: '#' },
    { name: '문의하기', href: '#' },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="font-display text-3xl font-semibold text-foreground">
                  FORMA
                </span>
                <span className="text-sm text-muted-foreground font-body">건축</span>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm mb-8">
                첨단 기술과 창의적 사고로 미래 건축의 패러다임을 선도하는
                글로벌 건축 디자인 그룹
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Youtube, href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * categoryIndex, duration: 0.6 }}
            >
              <h4 className="font-display text-sm text-foreground uppercase tracking-wider mb-6">
                {category === 'company' ? '회사' : category === 'services' ? '서비스' : '리소스'}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground text-sm font-body hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs font-body">
              © 2024 FORMA Architecture. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground text-xs font-body hover:text-primary transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="text-muted-foreground text-xs font-body hover:text-primary transition-colors">
                이용약관
              </a>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-muted-foreground text-xs font-body hover:text-primary transition-colors"
              >
                맨 위로
                <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
