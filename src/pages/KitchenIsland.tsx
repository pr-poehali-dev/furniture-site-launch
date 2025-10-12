import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenIsland = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/f401c10f-8d7b-472d-871a-e5e936fcb206.png',
      alt: 'Общий вид кухни с белым островом'
    },
    {
      url: 'https://cdn.poehali.dev/files/0a483c81-bd73-43d8-b5b4-a9724faf6b86.png',
      alt: 'Остров с обеденным столом'
    },
    {
      url: 'https://cdn.poehali.dev/files/ab49af5e-b2d6-4e1b-b551-aaa2f2679991.png',
      alt: 'Вид на обеденную зону'
    },
    {
      url: 'https://cdn.poehali.dev/files/62491bee-714f-4554-a25c-7bbf516fb4e8.png',
      alt: 'Рабочая зона кухни'
    },
    {
      url: 'https://cdn.poehali.dev/files/d0b87735-ab3f-4fc3-a454-d40da0c6495b.png',
      alt: 'Остров с барными стульями'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Бежевые фасады + чёрные акценты' },
    { icon: 'Box', title: 'Материалы', text: 'ЛДСП, белый камень' },
    { icon: 'Hammer', title: 'Столешница', text: 'Белый камень на острове' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Трековое + подвесные светильники' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная чёрная техника' },
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
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Хит продаж
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Белоснежный Остров
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Белоснежный остров и огромный обеденный стол — настоящий центр притяжения. 
              Утренний кофе, семейные ужины, вечерние посиделки — всё выдержит и останется 
              таким же безупречным. Фасады в спокойном, тёплом оттенке — идеальный фон для 
              гармонии. Чёрные акценты (техника, вытяжка, смеситель) держат интерьер в 
              тонусе и добавляют ему характера.
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
              Особенности кухни Белоснежный Остров
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Дизайн и материалы
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Белоснежный остров из искусственного камня</li>
                  <li>• Огромный обеденный стол на 6-8 персон</li>
                  <li>• Фасады в спокойном тёплом бежевом оттенке</li>
                  <li>• Чёрные акценты: техника, вытяжка, смеситель</li>
                  <li>• Витрины с подсветкой для красивой посуды</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Функциональность
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Многофункциональный остров с барной зоной</li>
                  <li>• Встроенная чёрная техника премиум-класса</li>
                  <li>• Дизайнерские подвесные светильники</li>
                  <li>• Трековое освещение на потолке</li>
                  <li>• Чёрный матовый смеситель</li>
                  <li>• Рифлёная текстура на торцах острова</li>
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
                Кухня, которая вдохновляет
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                В итоге — кухня, которая вдохновляет не только готовить, но и наслаждаться жизнью. 
                Витрины с подсветкой — секретное оружие нашей команды. Они превращают любой бокал 
                в предмет экспозиции. Гости будут рассматривать, как в галерее, и восхищаться.
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

export default KitchenIsland;
