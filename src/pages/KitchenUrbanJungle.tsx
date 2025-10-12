import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenUrbanJungle = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/b60b6ebc-9285-400a-9ca5-16237ea0fe85.png',
      alt: 'Общий вид кухни Урбан Джангл'
    },
    {
      url: 'https://cdn.poehali.dev/files/0a3bbeff-84ae-4932-97d0-b0a6cf092371.png',
      alt: 'Изумрудные фасады и барная стойка'
    },
    {
      url: 'https://cdn.poehali.dev/files/1bbeb171-e28c-4b0c-bbba-6afc88591cab.png',
      alt: 'Встроенная техника и витрина'
    },
    {
      url: 'https://cdn.poehali.dev/files/9714cc0c-cffa-489a-be2c-53fc8e15e31a.png',
      alt: 'Зона острова с живыми растениями'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Изумруд+графит+дерево' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ матовая эмаль премиум' },
    { icon: 'Hammer', title: 'Столешница', text: 'Темный камень с мрамором' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Трековые светильники+LED' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная премиум-класса' },
    { icon: 'Ruler', title: 'Размеры', text: 'Угловая + остров 5,2 м' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Урбан Джангл</h1>
            <p className="text-lg text-gray-600">Изумрудная элегантность с островом. Живые растения и мраморная столешница!</p>
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
                    <span className="text-4xl font-bold text-[#2C5F2D]">275 000 ₽</span>
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
                    Изумрудные матовые фасады в сочетании с глубокими черными панелями создают роскошный контраст. Деревянная зона острова с барной стойкой и живые растения в деревянных кашпо добавляют свежести и природной энергии.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-[#2C5F2D]" />
                    Комплектация
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Встроенная премиум-техника: духовой шкаф, микроволновая печь, вытяжка и варочная панель. Витрина со стеклянными полками для красивой посуды. Push-to-open система открывания без ручек.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Lightbulb" size={18} className="text-[#2C5F2D]" />
                    Освещение
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Современная система трековых светильников на потолке и встроенная LED-подсветка в витрине и под верхними шкафами. Многоуровневое освещение создаёт уютную атмосферу в любое время суток.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Ruler" size={18} className="text-[#2C5F2D]" />
                    Планировка
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Угловая кухня с островом общей длиной 5,2 метра. Остров размером 2,4×1,2 м служит рабочей зоной и барной стойкой. Шкафы до потолка обеспечивают максимум места для хранения.
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
                    Получите набор живых растений для вашей кухни в подарок + деревянные кашпо премиум-класса. Создайте атмосферу урбан-джунглей у себя дома!
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

export default KitchenUrbanJungle;
