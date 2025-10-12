import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenSand = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/b64016d7-c1f1-4ca6-93dd-d28449e01dac.png',
      alt: 'Кухня Морской песок - общий вид'
    },
    {
      url: 'https://cdn.poehali.dev/files/ae3daaeb-ed4d-4179-a283-d38ff7b423c1.png',
      alt: 'Акварельный фартук крупным планом'
    },
    {
      url: 'https://cdn.poehali.dev/files/ba98e44a-00c6-4a1a-99e3-9123871fd59d.png',
      alt: 'Обеденная зона с синими креслами'
    },
    {
      url: 'https://cdn.poehali.dev/files/517f679f-24d7-4fcb-a68e-1e8eb5b1fb5c.png',
      alt: 'LED-подсветка и витрина'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Бежевый + морской акварель' },
    { icon: 'Box', title: 'Материалы', text: 'МДФ эмаль матовый' },
    { icon: 'Hammer', title: 'Столешница', text: 'Белый искусственный камень' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'LED-ленты + дизайнерские люстры' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная серебристая' },
    { icon: 'Ruler', title: 'Размеры', text: 'Индивидуальный проект' }
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
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Морская роскошь
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Морской песок
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Фартук из керамогранита будто нарисован акварелью: серо-голубые разводы с золотыми 
              акцентами создают ощущение, что готовить вы будете не суп, а какой-то эликсир. 
              Витрина с подсветкой — как мини-музей. Тут и бокалы, и красивые тарелки, которые 
              обычно «для гостей», но теперь хочется доставать их каждый день. Много мест для 
              хранения — баночки с приправами стоят чинно, как солдаты на построении.
            </p>

            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 md:p-8 rounded-2xl mb-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm opacity-90">Цена от</span>
                <span className="text-4xl md:text-5xl font-bold">235 000 ₽</span>
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
              Особенности кухни Морской песок
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Дизайн и материалы
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Бежевые матовые фасады песочного оттенка</li>
                  <li>• Фартук из керамогранита с акварельным рисунком</li>
                  <li>• Серо-голубые разводы с золотыми акцентами</li>
                  <li>• Витрина с LED-подсветкой и декоративным наполнением</li>
                  <li>• Римские шторы под цвет фартука</li>
                  <li>• Дизайнерские люстры с бело-золотыми плафонами</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Функциональность
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• П-образная планировка с обеденной зоной</li>
                  <li>• Встроенная серебристая техника премиум-класса</li>
                  <li>• Множество мест хранения с органайзерами</li>
                  <li>• LED-подсветка рабочей зоны</li>
                  <li>• Бархатные синие кресла для обеденной зоны</li>
                  <li>• Открытые полки с декоративной подсветкой</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-amber-50 border-blue-200">
          <CardContent className="p-6 md:p-10">
            <div className="text-center">
              <Icon name="Waves" size={48} className="mb-4 text-blue-600 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#474931]">
                Завтрак в отеле уровня «пять звёзд»
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Даже обычная утренняя яичница здесь будет ощущаться как завтрак в отеле уровня «пять звёзд». 
                Акварельный фартук напоминает морской прибой, золотые акценты добавляют роскоши, 
                а витрина превращает вашу посуду в музейную коллекцию. Хотите, чтобы и ваша кухня 
                производила такое же впечатление?
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('калькулятор')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Заказать проект
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KitchenSand;