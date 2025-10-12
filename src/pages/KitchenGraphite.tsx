import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenGraphite = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/390dba13-37d5-4e59-93b2-c62cd34877f7.png',
      alt: 'Кухня Графитовый Шик - общий вид'
    },
    {
      url: 'https://cdn.poehali.dev/files/acdc3ba7-b060-4ea1-8a4a-03e9b0e12f95.png',
      alt: 'Белоснежный остров с рифлёными панелями'
    },
    {
      url: 'https://cdn.poehali.dev/files/0bf3e2d4-41f0-45be-a558-c4d6f1956d60.png',
      alt: 'Дизайнерские светильники'
    },
    {
      url: 'https://cdn.poehali.dev/files/59fa43e9-5aa4-4d28-a862-7714aff3b0ca.png',
      alt: 'Безручные фасады премиум'
    },
    {
      url: 'https://cdn.poehali.dev/files/d020d16d-f412-462a-bff7-1b81e3dff075.png',
      alt: 'Интегрированные ручки'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Графит + белоснежный' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ эмаль премиум' },
    { icon: 'Hammer', title: 'Столешница', text: 'Искусственный камень' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'LED + дизайнерские светильники' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная чёрная премиум' },
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
              Премиум-класс
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Графитовый Шик
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Монохромная элегантность в современном исполнении. Благородный графитовый цвет 
              верхних шкафов контрастирует с белоснежным островом, украшенным изысканными 
              рифлёными панелями. Дизайнерские арочные светильники, стеклянная витрина 
              и встроенная премиум-техника — для тех, кто ценит безупречный стиль.
            </p>

            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 md:p-8 rounded-2xl mb-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm opacity-90">Цена от</span>
                <span className="text-4xl md:text-5xl font-bold">245 000 ₽</span>
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
              Особенности кухни Графитовый Шик
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Дизайн и материалы
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Графитовые верхние шкафы с интегрированными ручками</li>
                  <li>• Белоснежный остров с рифлёными декоративными панелями</li>
                  <li>• Столешница из искусственного камня премиум</li>
                  <li>• Стеклянная витрина с чёрной рамой</li>
                  <li>• Дизайнерские арочные светильники</li>
                  <li>• Фартук из керамогранита под бетон</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Функциональность
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• П-образная планировка с островом</li>
                  <li>• Встроенная техника премиум-класса</li>
                  <li>• Скрытые LED-ленты под шкафами</li>
                  <li>• Безручные фасады с системой Push-to-Open</li>
                  <li>• Профессиональный смеситель с выдвижным изливом</li>
                  <li>• Встроенная вытяжка потолочная</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
          <CardContent className="p-6 md:p-10">
            <div className="text-center">
              <Icon name="Award" size={48} className="mb-4 text-primary mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#474931]">
                Монохромная элегантность
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Чёрно-белая гамма — это вечная классика, которая никогда не выходит из моды. 
                Графитовый Шик — это про сдержанную роскошь, где каждая деталь продумана 
                до мелочей. Рифлёные панели, арочное освещение и премиум-материалы создают 
                атмосферу настоящего бутика.
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

export default KitchenGraphite;