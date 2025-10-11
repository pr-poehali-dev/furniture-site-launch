import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenCaramel = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/23fb84e3-dfd3-4ae4-9c11-14a8ca467e8c.png',
      alt: 'Общий вид кухни Тающая карамель'
    },
    {
      url: 'https://cdn.poehali.dev/files/52fed4ac-dd7c-47f9-9072-123e979c34a5.png',
      alt: 'Рабочая зона и витрины с подсветкой'
    },
    {
      url: 'https://cdn.poehali.dev/files/3859d0f8-bace-4664-a572-f0902d8ce2e0.png',
      alt: 'Обеденная зона и гостиная'
    },
    {
      url: 'https://cdn.poehali.dev/files/23fb84e3-dfd3-4ae4-9c11-14a8ca467e8c.png',
      alt: 'Детали интерьера'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Бежевый+карамельный+серый' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ в эмали, ЛДСП Egger' },
    { icon: 'Hammer', title: 'Столешница', text: 'Искусственный камень темный' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Трековые светильники + LED' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная премиум-класса' },
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
            
            <div className="grid grid-cols-4 gap-2 md:gap-3">
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
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Премиум-серия
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Тающая карамель
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-2 leading-relaxed">
              Элегантное сочетание бежевых и карамельных оттенков создает атмосферу тепла и уюта. 
              Открытые витрины с LED-подсветкой, трековое освещение и темная столешница 
              добавляют современности и изысканности интерьеру.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              * Данный проект можно менять под ваши предпочтения
            </p>

            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 md:p-8 rounded-2xl mb-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm opacity-90">Цена от</span>
                <span className="text-4xl md:text-5xl font-bold">155 000 ₽</span>
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
              Особенности кухни "Тающая карамель"
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Дизайн и материалы
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Фасады из МДФ в эмали в бежевых тонах</li>
                  <li>• Карамельные оттенки ЛДСП Egger на верхних шкафах</li>
                  <li>• Открытые витрины со стеклянными полками</li>
                  <li>• Темная столешница из искусственного камня</li>
                  <li>• Черная матовая фурнитура и смесители</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Функциональность
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Трековое освещение для акцентов</li>
                  <li>• LED-подсветка в открытых витринах</li>
                  <li>• Премиум-фурнитура Blum с доводчиками</li>
                  <li>• Встроенные ручки-профили</li>
                  <li>• Организация для хранения в каждом шкафу</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-orange-50 border-primary/20">
          <CardContent className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <Icon name="Gift" size={48} className="mb-4 text-primary md:mx-0 mx-auto" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#474931] md:text-left text-center">
                  Бонус при заказе!
                </h3>
                <p className="text-lg text-gray-700 mb-6 md:text-left text-center">
                  При заказе кухни "Тающая карамель" дарим премиум набор органайзеров<br />для специй и сыпучих продуктов
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 w-full md:w-auto"
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('калькулятор')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Заказать со скидкой
                </Button>
              </div>
              <div className="w-full md:w-80 flex-shrink-0">
                <img 
                  src="https://cdn.poehali.dev/files/b2bce252-7c0f-4c78-b272-d3e817aa6428.jpg"
                  alt="Органайзеры для специй"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KitchenCaramel;