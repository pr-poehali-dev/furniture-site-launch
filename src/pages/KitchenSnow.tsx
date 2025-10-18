import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenSnow = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/d65e0e32-8c5f-4bb3-8a64-c4c5800f99a8.png',
      alt: 'Общий вид кухни Воздушный зефир'
    },
    {
      url: 'https://cdn.poehali.dev/files/638640b2-a926-40bf-b162-b8c4f2e9b5d3.png',
      alt: 'Рабочая зона и столешница'
    },
    {
      url: 'https://cdn.poehali.dev/files/7873bff5-e8cf-4d84-9f98-193d7ff78f2e.png',
      alt: 'Островная часть кухни'
    },
    {
      url: 'https://cdn.poehali.dev/files/14269f91-3968-45de-9ad5-2a82771f2a37.png',
      alt: 'Встроенная техника и открытые полки'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Белоснежный матовый' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ в эмали, массив дуба' },
    { icon: 'Hammer', title: 'Столешница', text: 'Искусственный камень светлый' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Встроенная LED-подсветка' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Воздушный зефир</h1>
            <p className="text-lg text-gray-600">Идеальное воплощение минимализма. Белоснежные матовые фасады без ручек, светлая столешница из искусственного камня, встроенная техника премиум-класса и открытые полки для декора создают атмосферу чистоты и простора.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
              <div className="mb-4 rounded-lg overflow-hidden shadow-lg bg-white">
              <img 
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-full object-cover"
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
                    <span className="text-4xl font-bold text-[#2C5F2D]">135 000 ₽</span>
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
                    Матовые белые фасады из МДФ в эмали. Безручечная система push-to-open. Встроенные ручки-профили на островной части. Столешница из светлого искусственного камня. Элементы из натурального массива дуба.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-[#2C5F2D]" />
                    Функциональность
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Встроенная LED-подсветка рабочей зоны. Премиум-фурнитура Blum с доводчиками. Открытые полки с подсветкой для декора. Островная часть с барной стойкой. Организация для хранения в каждом шкафу.
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
                    При заказе кухни "Воздушный зефир" дарим премиум набор органайзеров для специй и сыпучих продуктов. Всё для идеального порядка!
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

export default KitchenSnow;