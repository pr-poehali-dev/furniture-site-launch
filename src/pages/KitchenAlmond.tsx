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

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-12">
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-4">
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
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Премиум-серия
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Нежный Миндаль
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-2 leading-relaxed">
              Изысканная минималистичная кухня в миндальных тонах. Закругленные белые фасады без ручек, 
              открытые деревянные ниши с полками, мраморная столешница и остров с деревянной отделкой 
              создают атмосферу нежности и элегантности.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              * Данный проект можно менять под ваши предпочтения
            </p>

            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 md:p-8 rounded-2xl mb-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm opacity-90">Цена от</span>
                <span className="text-4xl md:text-5xl font-bold">175 000 ₽</span>
              </div>
              <p className="text-sm opacity-90 mb-6">
                Итоговая стоимость зависит от размеров и комплектации
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 flex-1"
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('калькулятор')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 flex-1"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <Card key={idx} className="border-none shadow-md">
                  <CardContent className="p-4">
                    <Icon name={feature.icon as any} size={24} className="text-primary mb-2" />
                    <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.text}</p>
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
