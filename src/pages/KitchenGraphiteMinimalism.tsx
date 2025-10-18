import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenGraphiteMinimalism = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/7d42ad80-ab7c-47f4-a6c5-7c03bc353e00.png',
      alt: 'Общий вид кухни Графитовый Минимализм'
    },
    {
      url: 'https://cdn.poehali.dev/files/8af497b8-a832-4d22-9fde-4128931717e9.png',
      alt: 'Угловая планировка с чёрным мрамором'
    },
    {
      url: 'https://cdn.poehali.dev/files/6a3f400d-8c7e-4281-8ba9-fc2f421be05e.png',
      alt: 'Пенал-витрина с подсветкой'
    },
    {
      url: 'https://cdn.poehali.dev/files/765a2f74-55b4-4f5a-9f13-41a8b8c9e43a.png',
      alt: 'Встроенная техника и столешница'
    },
    {
      url: 'https://cdn.poehali.dev/files/43d30da5-8b42-43b0-93ec-72b234d52684.png',
      alt: 'Световые линии и чёрная отделка'
    },
    {
      url: 'https://cdn.poehali.dev/files/59ceb0c6-04f3-4530-a365-06d3f68ed55a.png',
      alt: 'Детали планировки'
    },
    {
      url: 'https://cdn.poehali.dev/files/d17fb4ab-de00-4420-96c0-45a679774225.png',
      alt: 'Встроенная сушилка для посуды'
    },
    {
      url: 'https://cdn.poehali.dev/files/d2ae1ad3-a731-43ff-8d94-ddd7a9c243a2.png',
      alt: 'Встроенная техника с открытыми дверцами'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Белый+чёрный+бетон' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ матовая эмаль' },
    { icon: 'Hammer', title: 'Столешница', text: 'Чёрный мрамор' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'LED линии + витрина' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная премиум' },
    { icon: 'Ruler', title: 'Размеры', text: 'Угловая 3,2×2,8 м' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Графитовый Минимализм</h1>
            <p className="text-lg text-gray-600">Строгая угловая кухня со встроенным пеналом-витриной. Современная архитектура в интерьере!</p>
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
                    <span className="text-4xl font-bold text-[#2C5F2D]">285 000 ₽</span>
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
                    Драматичный контраст белоснежных матовых фасадов и чёрного мрамора с белыми прожилками. Бетонные текстуры на стенах создают индустриальный шик. Архитектурные световые линии по периметру потолка — настоящая инсталляция света.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={18} className="text-[#2C5F2D]" />
                    Пенал-витрина
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Встроенный высокий пенал со стеклянными полками и интегрированной LED-подсветкой. Чёрные матовые внутренние стенки создают глубину. Идеально для красивой посуды и декора — функциональная витрина премиум-класса.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-[#2C5F2D]" />
                    Комплектация
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Полностью встроенная премиум техника в чёрном цвете: духовой шкаф, микроволновая печь, индукционная панель, вытяжка скрытого монтажа. Встроенная посудомоечная машина с доводчиком. Хромированная выдвижная сушилка для посуды с LED-подсветкой.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Ruler" size={18} className="text-[#2C5F2D]" />
                    Планировка
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Просторная угловая планировка 3,2×2,8 метра. Верхние шкафы с чёрным горизонтальным профилем до потолка — максимум хранения. Глубокие выдвижные ящики на направляющих Blum с push-to-open. Чёрная окантовка создаёт графичные рамки.
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
                    Получите систему организации выдвижных ящиков премиум-класса в подарок + встроенную LED-подсветку рабочей зоны. Создаём идеальную кухню для вас!
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

export default KitchenGraphiteMinimalism;
