import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenModernClassic = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/89c84c38-a757-4178-84d6-7d8db7b94630.png',
      alt: 'Кухня Современная Классика - общий вид'
    },
    {
      url: 'https://cdn.poehali.dev/files/48d965db-c0b0-4929-8b44-258f43f25d04.png',
      alt: 'Столешница и витрина с подсветкой'
    },
    {
      url: 'https://cdn.poehali.dev/files/4cb43c37-4936-4d68-8d25-d67daf7fb990.png',
      alt: 'Встроенный холодильник'
    },
    {
      url: 'https://cdn.poehali.dev/files/dba327c3-1ac3-4cc4-a672-2a20edc97b4e.png',
      alt: 'Выдвижные ящики премиум'
    },
    {
      url: 'https://cdn.poehali.dev/files/8b9c06d1-fbda-4ddc-92ac-2021fe7cb117.png',
      alt: 'Шкаф с LED-подсветкой'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Серо-бежевый + белый' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ эмаль матовый' },
    { icon: 'Hammer', title: 'Столешница', text: 'Декор под дерево' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'LED-подсветка в шкафах + золотые люстры' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная серебристая' },
    { icon: 'Ruler', title: 'Размеры', text: 'Индивидуальный проект' }
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
            
            <div className="grid grid-cols-5 gap-2 md:gap-3">
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
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Современная классика
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Современная Классика
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Сдержанная элегантность в серо-бежевых тонах. Матовые фасады, деревянная столешница 
              с чёрными варочными зонами, золотые дизайнерские люстры создают атмосферу современного 
              комфорта. Витрина с золотой рамой и LED-подсветкой, выдвижные системы хранения премиум-класса, 
              встроенный холодильник — всё продумано до мелочей для вашего удобства.
            </p>

            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 md:p-8 rounded-2xl mb-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm opacity-90">Цена от</span>
                <span className="text-4xl md:text-5xl font-bold">255 000 ₽</span>
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
              Особенности кухни Современная Классика
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Дизайн и материалы
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Серо-бежевые матовые фасады премиум</li>
                  <li>• Столешница с декором под натуральное дерево</li>
                  <li>• Белоснежный фартук с чистыми линиями</li>
                  <li>• Витрина с золотой рамой и тёмным стеклом</li>
                  <li>• Золотые дизайнерские люстры</li>
                  <li>• LED-подсветка внутри шкафов</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Функциональность
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Угловая L-образная планировка</li>
                  <li>• Встроенная техника премиум-класса</li>
                  <li>• Выдвижные системы Hettich с плавным закрыванием</li>
                  <li>• Встроенный высокий холодильник</li>
                  <li>• Открытые полки в витрине с подсветкой</li>
                  <li>• Керамическая плитка «ёлочка» на полу</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-50 to-amber-50 border-gray-200">
          <CardContent className="p-6 md:p-10">
            <div className="text-center">
              <Icon name="Crown" size={48} className="mb-4 text-amber-600 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#474931]">
                Сдержанная элегантность
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Современная Классика — это про баланс между функциональностью и эстетикой. 
                Серо-бежевая палитра успокаивает, золотые акценты добавляют роскоши, а умные 
                системы хранения делают каждый день комфортным. Выдвижные ящики с плавным 
                закрыванием, LED-подсветка в каждом шкафу, встроенная техника — всё работает на ваш комфорт.
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

export default KitchenModernClassic;