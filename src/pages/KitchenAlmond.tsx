import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenAlmond = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/585c182c-5548-42a2-af38-a57163d02fe2.png',
      alt: 'Общий вид кухни Нежный Миндаль'
    },
    {
      url: 'https://cdn.poehali.dev/files/38650107-af7c-44c2-8db3-a06204b7cc84.png',
      alt: 'Встроенная ниша с деревянными полками'
    },
    {
      url: 'https://cdn.poehali.dev/files/9a26cbd2-8212-4aff-9b1d-98b655049bc5.png',
      alt: 'Рабочая зона и остров'
    },
    {
      url: 'https://cdn.poehali.dev/files/aa29577a-b119-49a3-acd0-5f7bb1dc200c.png',
      alt: 'Детали столешницы из мрамора'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Миндальный белый+дуб+мрамор' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ в эмали, ЛДСП дуб' },
    { icon: 'Hammer', title: 'Столешница', text: 'Белый мрамор (искусственный камень)' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Трековые споты белые' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная серебристая' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#2C3E2C]">Нежный Миндаль</h1>
            <p className="text-lg text-gray-600">Изысканная минималистичная кухня в миндальных тонах с мраморной столешницей и островом.</p>
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
            
            <div className="grid grid-cols-4 gap-2 md:gap-3">
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


              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-[#2C5F2D]">175 000 ₽</span>
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

        <Card className="mb-12">
          <CardContent className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#474931]">
              Особенности кухни Нежный Миндаль
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Дизайн и материалы
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Закругленные белые фасады без ручек (push-to-open)</li>
                  <li>• Открытые ниши с деревянными полками из дуба</li>
                  <li>• Мраморная столешница белого цвета</li>
                  <li>• Остров с закругленной деревянной отделкой</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Функциональность
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Трековые белые светильники на потолке</li>
                  <li>• Встроенная серебристая техника (духовка)</li>
                  <li>• Система открытия фасадов без ручек</li>
                  <li>• Рифленое стекло на витринных фасадах</li>
                  <li>• Паркетный пол елочкой</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-orange-50 border-primary/20">
          <CardContent className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <Icon name="Gift" size={48} className="mb-4 text-primary md:mx-0 mx-auto" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#474931] md:text-left text-center">
                  Бонус при заказе!
                </h3>
                <p className="text-lg text-gray-700 mb-6 md:text-left text-center">
                  При заказе кухни Нежный Миндаль дарим набор керамической посуды<br />в минималистичном стиле
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 w-full md:w-auto"
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('калькулятор')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Заказать со скидкой
                </Button>
              </div>
              <div className="w-full md:w-80 flex-shrink-0">
                <img 
                  src="https://cdn.poehali.dev/files/b2bce252-7c0f-4c78-b272-d3e817aa6428.jpg"
                  alt="Керамическая посуда"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KitchenAlmond;