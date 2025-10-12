import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const KitchenSapphire = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://cdn.poehali.dev/files/d266f22f-c602-4f96-bcc6-5c985f2aec3c.png',
      alt: 'Кухня Синий Сапфир - общий вид'
    },
    {
      url: 'https://cdn.poehali.dev/files/032ce984-9115-435d-a45a-e1f39e547949.png',
      alt: 'Угловая планировка с золотым фартуком'
    },
    {
      url: 'https://cdn.poehali.dev/files/1c738b19-9063-4ba6-88da-4957d976138c.png',
      alt: 'Рабочая зона с подсветкой'
    },
    {
      url: 'https://cdn.poehali.dev/files/d934cd18-be4c-4992-8306-735eef0f872b.png',
      alt: 'Винотека и стеклянные витрины'
    },
    {
      url: 'https://cdn.poehali.dev/files/31144495-8607-4519-8768-10114219d61d.png',
      alt: 'Винная коллекция с подсветкой'
    }
  ];

  const features = [
    { icon: 'Palette', title: 'Цветовая гамма', text: 'Глубокий синий сапфир' },
    { icon: 'Wine', title: 'Винотека', text: 'Встроенная с LED-подсветкой' },
    { icon: 'Box', title: 'Материалы', text: 'ЛДСП матовый + стекло' },
    { icon: 'Hammer', title: 'Столешница', text: 'Тёмный камень' },
    { icon: 'Lightbulb', title: 'Освещение', text: 'Золотая LED-подсветка' },
    { icon: 'Package', title: 'Техника', text: 'Встроенная чёрная премиум' }
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
            
            <div className="grid grid-cols-5 gap-2 md:gap-3">
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
              Премиум-класс
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Синий Сапфир
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Глубокий сапфировый синий — это цвет роскоши и уверенности. Матовые фасады без 
              ручек создают безупречно чистые линии, а золотистый фартук под LED-подсветкой 
              добавляет благородного сияния. Встроенная винотека с системой хранения для 
              бутылок и стеклянные витрины превращают эту кухню в настоящий винный бутик.
            </p>

            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 md:p-8 rounded-2xl mb-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm opacity-90">Цена от</span>
                <span className="text-4xl md:text-5xl font-bold">215 000 ₽</span>
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
              Особенности кухни Синий Сапфир
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Дизайн и материалы
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Глубокий сапфировый синий матовый</li>
                  <li>• Фасады без ручек с системой Push-to-Open</li>
                  <li>• Золотистый фартук под LED-подсветкой</li>
                  <li>• Стеклянные витрины для посуды</li>
                  <li>• Встроенная винотека с крестообразными ячейками</li>
                  <li>• Тёмная столешница под камень</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-green-600" />
                  Функциональность
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Угловая L-образная планировка</li>
                  <li>• Встроенная чёрная техника премиум-класса</li>
                  <li>• Винотека на 30+ бутылок с подсветкой</li>
                  <li>• Чёрный матовый смеситель</li>
                  <li>• Трековое освещение белое</li>
                  <li>• Золотая LED-подсветка рабочей зоны</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-primary/5 to-orange-50 border-primary/20">
          <CardContent className="p-6 md:p-10">
            <div className="text-center">
              <Icon name="Wine" size={48} className="mb-4 text-primary mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#474931]">
                Кухня для ценителей вина
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Это не просто кухня — это домашний винный бутик. Специальная винотека с 
                крестообразными ячейками и LED-подсветкой превращает каждую бутылку в 
                произведение искусства. Ваши гости будут восхищены коллекцией ещё до того, 
                как попробуют вино.
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

export default KitchenSapphire;
