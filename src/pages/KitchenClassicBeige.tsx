import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenClassicBeige = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/82f0c0a0-4582-4381-9377-6e71b78a5ff5.png',
      alt: 'Общий вид кухни Классический Беж'
    },
    {
      url: 'https://cdn.poehali.dev/files/1a92b2e7-ccca-4605-bbd5-a5fe13262c9b.png',
      alt: 'Рабочая зона у окна'
    },
    {
      url: 'https://cdn.poehali.dev/files/fe8b2d5d-147b-4345-abb3-594a9aefe967.png',
      alt: 'Выдвижные ящики'
    },
    {
      url: 'https://cdn.poehali.dev/files/6f025c1b-3007-48de-b224-ddfa884374a9.png',
      alt: 'Угловая часть кухни'
    },
    {
      url: 'https://cdn.poehali.dev/files/8273de32-ef90-444a-9e74-61720e649fb6.png',
      alt: 'Системы хранения'
    },
    {
      url: 'https://cdn.poehali.dev/files/576b1608-8c7b-4fa1-ab0e-b6a166e44409.png',
      alt: 'Угловые ящики'
    },
    {
      url: 'https://cdn.poehali.dev/files/4b8f5461-e0f2-431e-9ece-c79235f10433.png',
      alt: 'Встроенная техника Samsung'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Беж+дерево+белый' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ с рамочными фасадами' },
    { icon: 'Hammer', title: 'Столешница', text: 'Деревянная текстура' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Точечные светильники' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная Samsung' },
    { icon: 'Ruler', title: 'Размеры', text: 'Угловая 2,7×2,5 м' }
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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Классический Беж</h1>
            <p className="text-lg text-gray-600">Элегантные рамочные фасады и изысканный геометрический фартук. Классика премиум!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="mb-4 rounded-lg overflow-hidden shadow-lg bg-white">
                <img 
                  src={images[selectedImage].url}
                  alt={images[selectedImage].alt}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-[#2C5F2D] scale-95' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {images.slice(4).map((img, idx) => (
                  <button
                    key={idx + 4}
                    onClick={() => setSelectedImage(idx + 4)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx + 4 ? 'border-[#2C5F2D] scale-95' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-[#2C5F2D]">245 000 ₽</span>
                    <span className="text-gray-500">от</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-6">Цена под ключ с установкой</p>
                  <div className="space-y-3">
                    <Button className="w-full bg-[#2C5F2D] hover:bg-[#234a24] text-white">
                      Заказать расчёт
                    </Button>
                    <Button variant="outline" className="w-full">
                      Задать вопрос
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#E8F5E9] p-2 rounded-lg">
                          <Icon name={feature.icon as any} size={20} className="text-[#2C5F2D]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                          <p className="text-xs text-gray-600">{feature.text}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Sparkles" size={28} className="text-[#2C5F2D]" />
                Особенности кухни
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-[#2C5F2D]" />
                    Дизайн и стиль
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Классические бежевые фасады с рамочным декором создают атмосферу уюта и элегантности. Изысканный фартук с геометрическим узором в серо-бежевых тонах. Деревянная столешница добавляет тепла и природной красоты.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-[#2C5F2D]" />
                    Комплектация
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Встроенная техника Samsung премиум-класса: духовой шкаф и микроволновая печь, индукционная варочная панель. Множество выдвижных ящиков с внутренними органайзерами. Доводчики на всех дверцах и ящиках.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={18} className="text-[#2C5F2D]" />
                    Системы хранения
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Верхние шкафы до потолка в два яруса обеспечивают огромное количество мест для хранения. Угловая планировка с максимальным использованием пространства. Умные системы выдвижения для легкого доступа.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Ruler" size={18} className="text-[#2C5F2D]" />
                    Планировка
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Просторная угловая кухня 2,7×2,5 метра. Рабочая зона расположена у окна — готовьте с видом на природу. Глубокие выдвижные ящики. Встроенная вытяжка и продуманная эргономика.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#E8F5E9] to-white border-[#2C5F2D]/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#2C5F2D] p-3 rounded-full">
                  <Icon name="Gift" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Бонус при заказе в этом месяце!</h3>
                  <p className="text-gray-700 mb-4">
                    Получите полный набор внутренних органайзеров для всех ящиков + разделители для столовых приборов премиум-класса. Идеальный порядок гарантирован!
                  </p>
                  <Button className="bg-[#2C5F2D] hover:bg-[#234a24]">
                    Узнать подробнее
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KitchenClassicBeige;
