import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenOliva = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/d0c03c80-2de5-404c-9969-52bc86e9a6c2.jpg',
      alt: 'Общий вид кухни Олива'
    },
    {
      url: 'https://cdn.poehali.dev/files/6f734b8c-fbe9-49b6-b317-44c018b6ebd6.png',
      alt: 'Шкафы с подсветкой'
    },
    {
      url: 'https://cdn.poehali.dev/files/d115e1a0-09e9-4f40-90b1-43eaf5c70c03.png',
      alt: 'Детали столешницы и фартука'
    },
    {
      url: 'https://cdn.poehali.dev/files/f013d086-4d95-4247-9b33-8f890e62409d.png',
      alt: 'Встроенная техника'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Оливковый+белый+древесный' },
    { icon: 'Box', title: 'Материалы', text: 'ЛДСП Egger, МДФ в Эмали' },
    { icon: 'Hammer', title: 'Столешница', text: 'Искусственный камень' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'LED-подсветка полок' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная Electrolux' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Пряная Олива</h1>
            <p className="text-lg text-gray-600">Элегантное сочетание оливковых нижних фасадов и белых верхних шкафов. Фасады пеналов с текстурой дуба, столешница из искусственного камня, премиум-фурнитура и встроенная подсветка создают атмосферу современного комфорта.</p>
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
                    <span className="text-4xl font-bold text-[#2C5F2D]">145 000 ₽</span>
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
                    Фасады пеналов с текстурой дуба из ЛДСП Egger. Оливковый оттенок нижних шкафов - модный тренд 2025. Белые верхние шкафы визуально расширяют пространство. Столешница из искусственного камня повышенной прочности.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-[#2C5F2D]" />
                    Функциональность
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Встроенная LED-подсветка открытых полок. Премиум-фурнитура Blum с доводчиками. Скрытые ручки на нажимных механизмах. Организация для хранения в каждом шкафу.
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
                    При заказе кухни Пряная Олива дарим премиум набор органайзеров для специй и сыпучих продуктов. Всё для идеального порядка!
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

export default KitchenOliva;