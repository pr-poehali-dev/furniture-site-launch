import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <img 
              src="https://cdn.poehali.dev/files/9718af21-0c22-4cb5-bf92-f1740fa73509.png" 
              alt="По Местам!" 
              className="h-10 w-10 md:h-16 md:w-16"
            />
            <span className="text-lg md:text-2xl font-semibold text-primary tracking-wide">ПО МЕСТАМ!</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            {['Главная', 'Каталог', 'Акция', 'О нас', 'Этапы работы', 'Калькулятор', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-foreground hover:text-primary transition-colors font-semibold relative group text-lg"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {['Главная', 'Каталог', 'Акция', 'О нас', 'Этапы работы', 'Калькулятор', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase().replace(' ', '-'));
                  setMobileMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-colors font-semibold"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
