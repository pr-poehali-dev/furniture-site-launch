import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const HallwayBuiltInStorage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://cdn.poehali.dev/files/cb4b5212-aaaf-45ac-97e5-1574b9ca71a3.png',
    'https://cdn.poehali.dev/files/9f03210f-ba68-4fbb-8338-964bea386d5a.png',
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
          Вернуться к каталогу
        </button>

        <div className="space-y-8">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
            <img
              src={images[currentImageIndex]}
              alt="Прихожая со встроенной системой хранения"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden border-3 transition-all ${
                  currentImageIndex === idx
                    ? 'border-primary ring-2 ring-primary'
                    : 'border-border hover:border-primary/50'
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  Прихожая со встроенной системой хранения
                </h1>
                <p className="text-3xl font-semibold text-primary mb-6">от 95 000 ₽</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mb-4">О проекте</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Лаконичная и функциональная прихожая, которая демонстрирует грамотное использование 
                  пространства. Зеркальные фасады визуально расширяют помещение, а встроенная банкетка 
                  добавляет комфорта при использовании.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Материалы и особенности</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Зеркальные фасады с вертикальными фрезеровками — визуально расширяют пространство и создают элегантный рисунок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Встроенная банкетка с мягким сиденьем — удобно обуваться и снимать обувь</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Точечная подсветка создает комфортное освещение и подчеркивает архитектуру мебели</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Продуманная система хранения с полками и штангами для одежды</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Скрытые ручки поддерживают минималистичный стиль интерьера</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Качественная фурнитура с доводчиками для плавного закрывания</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Почему это решение работает</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Зеркальные фасады — это не только красиво, но и практично. Они делают прихожую светлее 
                  и просторнее, что особенно важно для небольших помещений. Вертикальные фрезеровки 
                  добавляют фасадам объем и премиальность.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Встроенная банкетка с подсветкой создает уютную зону для переобувания, а система 
                  хранения позволяет организовать всю верхнюю одежду, обувь и аксессуары в одном месте. 
                  Светлые тона и продуманное освещение создают приятную атмосферу с первого шага в квартиру.
                </p>
              </div>
            </div>

            <div className="space-y-4">
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
              <p className="text-sm text-muted-foreground text-center">
                Приедем на замер, создадим 3D-проект и рассчитаем точную стоимость
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallwayBuiltInStorage;
