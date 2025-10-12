import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenWhiteGold = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/9c1a865b-f31e-4cae-b67b-8bd3d0a0321e.png',
      alt: 'Кухня Белое Золото - белые фасады с золотыми ручками'
    },
    {
      url: 'https://cdn.poehali.dev/files/d15f3d2e-39f4-48d1-8a46-1be0d1706088.png',
      alt: 'Открытые шкафы с системами хранения'
    },
    {
      url: 'https://cdn.poehali.dev/files/3162b468-f9fe-4adb-9704-a0bf8ed28ce1.png',
      alt: 'Внутреннее наполнение шкафов'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Белоснежный + золотые акценты' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ эмаль глянец' },
    { icon: 'Hammer', title: 'Столешница', text: 'Декор под светлое дерево' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Встроенное LED' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная премиум' },
    { icon: 'Ruler', title: 'Размеры', text: 'Под ваш проект' }
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
            
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx 
                      ? 'border-primary shadow-lg' 
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <img 
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Скандинавская элегантность
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Белое Золото
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Белоснежные фасады с золотыми ручками — классика, которая никогда не выходит из моды. 
              Столешница под светлое дерево добавляет тепла скандинавскому минимализму. Внутри каждого 
              шкафа — продуманные системы хранения с сушилками для посуды, органайзерами и выдвижными 
              ящиками. Всё на своих местах, всё под рукой. Эта кухня — про порядок и спокойствие.
            </p>

            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 md:p-8 rounded-2xl mb-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm opacity-90">Цена от</span>
                <span className="text-4xl md:text-5xl font-bold">195 000 ₽</span>
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
              Особенности кухни Белое Золото
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Дизайн и материалы
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Белоснежные глянцевые фасады</li>
                  <li>• Золотые матовые ручки-скобы</li>
                  <li>• Столешница с декором под светлый дуб</li>
                  <li>• Белоснежный фартук минималистичный</li>
                  <li>• Золотая мойка и смеситель</li>
                  <li>• Внутренние полки в серо-бежевом цвете</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Функциональность
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Встроенные сушилки для посуды в верхних шкафах</li>
                  <li>• Органайзеры в каждом отделении</li>
                  <li>• Системы плавного закрывания</li>
                  <li>• Встроенная техника чёрная</li>
                  <li>• Регулируемые полки по высоте</li>
                  <li>• Максимальное использование пространства</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200">
          <CardContent className="p-6 md:p-10">
            <div className="text-center">
              <Icon name="Sparkles" size={48} className="mb-4 text-yellow-600 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#474931]">
                Скандинавский минимализм с золотом
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Белое Золото — это кухня для тех, кто любит порядок и чистоту. Белоснежные фасады 
                визуально расширяют пространство, золотые акценты добавляют благородства, а продуманные 
                системы хранения позволяют держать всё под контролем. Сушилки для посуды, органайзеры 
                для специй, выдвижные корзины — каждая деталь работает на ваш комфорт.
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
                <Icon name="Rocket" size={20} className="mr-2" />
                Заказать проект
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KitchenWhiteGold;