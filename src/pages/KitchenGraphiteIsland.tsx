import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenGraphiteIsland = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/d0bf1be3-5f3e-4fcf-9639-311d5d93cb75.png',
      alt: 'Общий вид кухни Графитовый Остров'
    },
    {
      url: 'https://cdn.poehali.dev/files/33c6d4df-6673-4a28-8526-dfe47f30fccc.png',
      alt: 'Встроенная посудомоечная Bosch'
    },
    {
      url: 'https://cdn.poehali.dev/files/0f3cfea7-10c1-484c-a41a-70714d05a6f7.png',
      alt: 'Остров с винной стойкой'
    },
    {
      url: 'https://cdn.poehali.dev/files/6f2e58e4-5f56-4837-9bb8-68eba217244c.png',
      alt: 'Встроенная техника Bosch'
    },
    {
      url: 'https://cdn.poehali.dev/files/f51a0f04-d841-4309-b523-4e417a6cd667.png',
      alt: 'Встроенный высокий холодильник'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Графит+беж+черный' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ матовая эмаль премиум' },
    { icon: 'Hammer', title: 'Столешница', text: 'Черный камень High Gloss' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Трековое LED+подсветка' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная Bosch премиум' },
    { icon: 'Ruler', title: 'Размеры', text: 'Прямая + остров 6 м' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Графитовый Остров</h1>
            <p className="text-lg text-gray-600">Минимализм премиум-класса с островом и винной стойкой. Техника Bosch и глянцевый черный!</p>
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
              {images.length > 4 && (
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
              )}
            </div>

            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-[#2C5F2D]">320 000 ₽</span>
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
                    Графитовые матовые фасады в сочетании с бежевыми вставками и черным глянцевым фартуком создают ультрасовременный образ. Верхние шкафы с LED-подсветкой и открытые ниши для декора. Трековое освещение добавляет атмосферности.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-[#2C5F2D]" />
                    Комплектация премиум
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Встроенная техника Bosch: высокий холодильник, духовой шкаф, микроволновая печь, посудомоечная машина с выдвижением, индукционная варочная панель. Черная вытяжка с сенсорным управлением. Все с интеграцией в фасады.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Wine" size={18} className="text-[#2C5F2D]" />
                    Остров-бар
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Остров с черной глянцевой столешницей и встроенной винной стойкой на 16 бутылок. Ромбовидные ячейки для элегантного хранения вина. Дополнительная рабочая поверхность и зона для завтраков.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Ruler" size={18} className="text-[#2C5F2D]" />
                    Планировка
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Прямая кухня с островом общей длиной 6 метров. Верхние шкафы до потолка с точечной подсветкой. Push-to-open без ручек. Встроенный высокий холодильник за фасадами. Максимальная функциональность в минималистичном дизайне.
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
                    Получите набор премиум-бокалов для вина + аксессуары для винной стойки в подарок! Плюс бесплатная установка трекового освещения (стоимость 45 000 ₽).
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

export default KitchenGraphiteIsland;
