import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenChampagne = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/115b8b2f-e7a6-40fa-80ba-5faec267adf3.png',
      alt: 'Общий вид кухни Игристое Шампанское'
    },
    {
      url: 'https://cdn.poehali.dev/files/f88538e7-5bfd-4c06-bbd1-667e82835133.png',
      alt: 'Барная стойка с мраморной отделкой'
    },
    {
      url: 'https://cdn.poehali.dev/files/70f76940-009d-44c1-8cf6-11da79a4eb1e.png',
      alt: 'Детали острова и фартука'
    },
    {
      url: 'https://cdn.poehali.dev/files/115b8b2f-e7a6-40fa-80ba-5faec267adf3.png',
      alt: 'Встроенная техника'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Шампань+серый+белый мрамор' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ в эмали, ЛДСП с текстурой' },
    { icon: 'Hammer', title: 'Столешница', text: 'Белый мрамор (искусственный камень)' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Подвесные светильники + LED' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная черная премиум' },
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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Игристое Шампанское</h1>
            <p className="text-lg text-gray-600">Изысканное сочетание шампань и серых оттенков. Барная стойка с рифленой текстурой, мраморный фартук и остров, дизайнерские подвесные светильники и витрина со стеклом создают атмосферу роскоши и элегантности.</p>
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
                    <span className="text-4xl font-bold text-[#2C5F2D]">165 000 ₽</span>
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
                    Дизайн и материалы
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Фасады шампань из МДФ в эмали матовой. Серые фасады верхних шкафов - современный тренд. Барная стойка с рифленой текстурой дерева. Мраморный остров и фартук из искусственного камня.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-[#2C5F2D]" />
                    Функциональность
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Дизайнерские подвесные светильники над барной стойкой. Витрина со стеклом и внутренней LED-подсветкой. Встроенная черная техника премиум-класса. Премиум-фурнитура Blum с доводчиками. Барная стойка для 2-3 человек.
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
                    При заказе кухни Игристое Шампанское дарим премиум набор барных аксессуаров для коктейлей. Всё для идеального порядка!
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

export default KitchenChampagne;