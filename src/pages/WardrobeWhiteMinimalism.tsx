import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const WardrobeWhiteMinimalism = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://cdn.poehali.dev/files/c9289528-b1c7-48d9-b32a-900e2027f9df.jpg',
    'https://cdn.poehali.dev/files/a461350a-36eb-4ec1-866d-e1c7d58d6299.jpg',
    'https://cdn.poehali.dev/files/e87af731-d93b-459a-ad22-b32df0a219da.jpg',
    'https://cdn.poehali.dev/files/35d32e4a-20eb-408c-a80e-fe34b9bd866e.jpg',
    'https://cdn.poehali.dev/files/3a057536-817b-471c-a479-408aac636172.jpg',
    'https://cdn.poehali.dev/files/f587d941-b738-499b-ad35-72759fe50a75.jpg',
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
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted">
              <img
                src={images[currentImageIndex]}
                alt="Белый Минимализм"
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
                Белый Минимализм
              </h1>
              <p className="text-3xl font-semibold text-primary mb-6">
                от 155 000 ₽
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">О проекте</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Встроенный шкаф до потолка в светлых тонах — пример грамотной организации 
                пространства для хранения. Продуманная система с различными типами секций 
                позволяет удобно разместить всю одежду, обувь и аксессуары.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Материалы и фурнитура</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Фасады белый матовый ЛДСП — универсальное решение для любого интерьера</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Скрытые ручки создают минималистичный внешний вид без лишних деталей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Доводчики Blum обеспечивают плавное и бесшумное закрывание дверей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Выдвижные ящики с внутренними организаторами для мелочей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Штанги для одежды на разных уровнях — короткая и длинная одежда</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Открытые полки для обуви и аксессуаров с удобным доступом</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span>Верхние антресоли для сезонного хранения вещей</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Система хранения</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Шкаф спроектирован с учетом эргономики и удобства использования. Комбинация 
                различных секций позволяет организовать хранение любых вещей: от верхней одежды 
                до обуви и аксессуаров.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Светлые фасады визуально расширяют пространство и отражают свет, делая комнату 
                светлее. Встроенная конструкция до потолка использует высоту помещения на 100%, 
                создавая дополнительное место для хранения сезонных вещей.
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

export default WardrobeWhiteMinimalism;
