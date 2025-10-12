import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenMarbleWave = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/d676c13c-97fa-4498-a670-42f8d4dee382.png',
      alt: 'Общий вид кухни Мраморная Волна'
    },
    {
      url: 'https://cdn.poehali.dev/files/7e65a22a-8d5b-45d2-a970-1a542ed65091.png',
      alt: 'Белоснежные фасады'
    },
    {
      url: 'https://cdn.poehali.dev/files/5a6b0db2-1821-40bf-bafb-125f31cdec76.png',
      alt: 'Мраморный фартук'
    },
    {
      url: 'https://cdn.poehali.dev/files/44b068de-32e1-4c35-98a7-e7387501158b.png',
      alt: 'Встроенная техника'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Белый+мрамор' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ матовая эмаль' },
    { icon: 'Hammer', title: 'Столешница', text: 'Искусственный мрамор' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'LED под шкафами' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная Samsung' },
    { icon: 'Ruler', title: 'Размеры', text: 'Угловая 2,4×2,0 м' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Мраморная Волна</h1>
            <p className="text-lg text-gray-600">Белоснежные матовые фасады с роскошным мраморным фартуком. Push-to-open и компактность!</p>
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
                {images.map((img, idx) => (
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
            </div>

            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-[#2C5F2D]">215 000 ₽</span>
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
                    Безупречно белые матовые фасады без ручек создают чистоту линий. Роскошный фартук и столешница из искусственного мрамора с золотисто-бежевыми разводами. LED-подсветка под шкафами создаёт эффект парения.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-[#2C5F2D]" />
                    Комплектация
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Встроенная техника Samsung: духовой шкаф, микроволновая печь, индукционная варочная панель. Встроенная посудомоечная машина 45 см с доводчиком. Сушилка для посуды в верхнем шкафу.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={18} className="text-[#2C5F2D]" />
                    Система открывания
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Push-to-open — открывание касанием без ручек. Выдвижные ящики на доводчиках с системой Blum Tandembox. Множество выдвижных ящиков — доступ к каждому сантиметру пространства.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Ruler" size={18} className="text-[#2C5F2D]" />
                    Планировка
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Компактная угловая планировка 2,4×2,0 метра — идеально для небольших пространств. Верхние шкафы в два яруса до потолка для максимума хранения. Глубина столешницы 60 см.
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
                    Получите встроенную сушилку для посуды премиум-класса в подарок + набор внутренних разделителей для ящиков. Всё для идеального порядка!
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

export default KitchenMarbleWave;
