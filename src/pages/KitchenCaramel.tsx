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

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Тающая карамель</h1>
            <p className="text-lg text-gray-600">Элегантное сочетание бежевых и карамельных оттенков создает атмосферу тепла и уюта. Открытые витрины с LED-подсветкой, трековое освещение и темная столешница добавляют современности и изысканности интерьеру.</p>
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
                    <span className="text-4xl font-bold text-[#2C5F2D]">155 000 ₽</span>
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
                    Фасады из МДФ в эмали в бежевых тонах. Карамельные оттенки ЛДСП Egger на верхних шкафах. Открытые витрины со стеклянными полками. Темная столешница из искусственного камня. Черная матовая фурнитура и смесители.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-[#2C5F2D]" />
                    Функциональность
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Трековое освещение для акцентов. LED-подсветка в открытых витринах. Премиум-фурнитура Blum с доводчиками. Встроенные ручки-профили. Организация для хранения в каждом шкафу.
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
                    При заказе кухни "Тающая карамель" дарим премиум набор органайзеров для специй и сыпучих продуктов. Всё для идеального порядка!
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

export default KitchenCaramel;