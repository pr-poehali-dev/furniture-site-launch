import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const BathroomBlackMinimalism = () => {
  const navigate = useNavigate();
  const [selectedImage] = useState(0);

  const images = [
    { url: 'https://cdn.poehali.dev/files/2fe96a1f-4d07-4310-8071-87acd99d68ee.jpg', alt: 'Черная мебель для ванной' },
  ];

  const features = [
    { icon: 'Palette', title: 'Цвет', text: 'Черный МДФ в пленке' },
    { icon: 'Box', title: 'Материал', text: 'МДФ + Камень' },
    { icon: 'Droplet', title: 'Столешница', text: 'Интегрированный камень' },
    { icon: 'Package', title: 'Фурнитура', text: 'Доводчики' },
    { icon: 'Zap', title: 'Особенность', text: 'Скрытые коммуникации' },
    { icon: 'Ruler', title: 'Под заказ', text: 'Любые размеры' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад к каталогу
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-12">
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-4">
              <img 
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Авторское решение
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Черная мебель для ванной
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Современное решение для ванной комнаты с продуманной зоной для стиральной техники. 
              Все технические коммуникации скрыты за специальной перегородкой из МДФ, создавая 
              единую стилистическую композицию.
            </p>

            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 md:p-8 rounded-2xl mb-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm opacity-90">Цена от</span>
                <span className="text-4xl md:text-5xl font-bold">95 000 ₽</span>
              </div>
              <p className="text-sm opacity-90 mb-6">
                Итоговая стоимость зависит от размеров и комплектации
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 flex-1"
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('калькулятор')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 flex-1"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <Card key={idx} className="border-none shadow-md">
                  <CardContent className="p-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary mb-2" />
                    <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#474931]">
              Особенности проекта
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Дизайн и материалы
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Фасады МДФ в черной пленке</li>
                  <li>• Интегрированная каменная столешница</li>
                  <li>• Скрытые ручки</li>
                  <li>• Качественные доводчики</li>
                  <li>• Встроенная подсветка</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Инженерные решения
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Перегородка для скрытия коммуникаций</li>
                  <li>• Вертикальное размещение стиральной машины и сушилки</li>
                  <li>• Идеально ровная линия фасадов</li>
                  <li>• Нет видимых зазоров и труб</li>
                  <li>• Продуманная вентиляция</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-orange-50 border-primary/20">
          <CardContent className="p-6 md:p-10">
            <div className="text-center">
              <Icon name="Home" size={48} className="mb-4 text-primary mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#474931]">
                Функциональность и стиль
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Главная изюминка проекта — полная маскировка коммуникаций за стиральными машинами. 
                Черный цвет в сочетании с мрамором и современной сантехникой создает элегантный 
                и лаконичный интерьер.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('калькулятор')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BathroomBlackMinimalism;
