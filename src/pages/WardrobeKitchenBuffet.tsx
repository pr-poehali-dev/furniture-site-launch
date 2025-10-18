import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const WardrobeKitchenBuffet = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://cdn.poehali.dev/files/1b37dd40-8570-4a17-88ab-904ebd68597f.png',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
          Вернуться к каталогу
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <img
                src={images[currentImageIndex]}
                alt="Буфет для кухни-гостиной"
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                  >
                    <Icon name="ChevronLeft" size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                  >
                    <Icon name="ChevronRight" size={24} />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImageIndex === idx
                        ? 'border-primary'
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Вид ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Буфет для кухни-гостиной
              </h1>
              <p className="text-3xl font-semibold text-primary mb-6">
                от 185 000 ₽
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">О проекте</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Премиальный буфет для кухни-гостиной, который сочетает в себе функциональность 
                системы хранения и эстетику элегантной мебели. Идеальное решение для хранения 
                посуды, текстиля и декора в объединенном пространстве.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Материалы и особенности</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Бронзовое стекло в профиле Modus — изысканный и современный внешний вид со скрытым содержимым</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Буфет выполнен до потолка — максимум полезного пространства для хранения</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Интегрированная LED-подсветка подчеркивает содержимое и создает атмосферу</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Фурнитура Hettich с системой push-to-open — открывание легким нажатием без ручек</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Продуманная внутренняя организация с полками разной высоты</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Комбинация открытых и закрытых секций для красивой витринной выкладки</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Премиальные решения</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Профиль Modus в сочетании с бронзовым стеклом — это топовое решение для создания 
                элегантных витрин. Тонкие рамки подчеркивают стекло, а бронзовый оттенок добавляет 
                теплоты и премиальности интерьеру.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Система push-to-open от Hettich позволяет полностью отказаться от видимых ручек, 
                сохраняя чистоту линий и минималистичный дизайн. Встроенная подсветка делает буфет 
                не просто местом хранения, а настоящим акцентом в интерьере кухни-гостиной.
              </p>
            </div>

            <div className="pt-6 border-t">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    const form = document.getElementById('contact-form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }, 300);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Заказать расчет
                <Icon name="ArrowRight" size={20} />
              </button>
              <p className="text-sm text-muted-foreground text-center mt-3">
                Приедем на замер, создадим 3D-проект и рассчитаем точную стоимость
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardrobeKitchenBuffet;
