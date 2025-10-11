import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

export default function KitchenSnow() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <Icon name="ArrowLeft" size={20} />
            На главную
          </Button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://cdn.poehali.dev/files/d65e0e32-8c5f-4bb3-8a64-c4c5800f99a8.png"
              alt="Кухня Чистый Снег - общий вид"
              className="rounded-2xl shadow-2xl w-full h-[300px] object-cover col-span-2"
            />
            <img 
              src="https://cdn.poehali.dev/files/638640b2-a926-40bf-b162-b8c4f2e9b5d3.png"
              alt="Кухня Чистый Снег - детали"
              className="rounded-2xl shadow-lg w-full h-[200px] object-cover"
            />
            <img 
              src="https://cdn.poehali.dev/files/7873bff5-e8cf-4d84-9f98-193d7ff78f2e.png"
              alt="Кухня Чистый Снег - столешница"
              className="rounded-2xl shadow-lg w-full h-[200px] object-cover"
            />
            <img 
              src="https://cdn.poehali.dev/files/14269f91-3968-45de-9ad5-2a82771f2a37.png"
              alt="Кухня Чистый Снег - кофейная зона"
              className="rounded-2xl shadow-lg w-full h-[200px] object-cover col-span-2"
            />
          </div>

          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Минимализм и чистота
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#474931]">
              Кухня "Чистый Снег"
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-2 leading-relaxed">
              Идеальное воплощение минимализма. Белоснежные матовые фасады без ручек, 
              светлая столешница из искусственного камня, встроенная техника премиум-класса 
              и открытые полки для декора создают атмосферу чистоты и простора.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              * Данный проект можно менять под ваши предпочтения
            </p>

            <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-6 md:p-8 rounded-2xl mb-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm opacity-90">Цена от</span>
                <span className="text-4xl md:text-5xl font-bold">135 000 ₽</span>
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
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Icon name="Ruler" size={24} className="text-primary mb-2" />
                <h3 className="font-semibold mb-1">Размеры</h3>
                <p className="text-sm text-gray-600">По вашим параметрам</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Icon name="Package" size={24} className="text-primary mb-2" />
                <h3 className="font-semibold mb-1">Комплектация</h3>
                <p className="text-sm text-gray-600">Индивидуальная</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Icon name="Truck" size={24} className="text-primary mb-2" />
                <h3 className="font-semibold mb-1">Доставка</h3>
                <p className="text-sm text-gray-600">3-5 дней</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <Icon name="Wrench" size={24} className="text-primary mb-2" />
                <h3 className="font-semibold mb-1">Монтаж</h3>
                <p className="text-sm text-gray-600">1-2 дня</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Особенности кухни "Чистый Снег"</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Безупречная белизна</h3>
              <p className="text-sm text-gray-600">Матовые белые фасады визуально расширяют пространство</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Minimize2" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Минимализм</h3>
              <p className="text-sm text-gray-600">Встроенные ручки и чистые линии без лишних деталей</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Много света</h3>
              <p className="text-sm text-gray-600">Светлая палитра и встроенная подсветка создают уют</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-orange-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Готовы обсудить вашу кухню?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Оставьте заявку, и наш дизайнер свяжется с вами для обсуждения проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
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
            <Button size="lg" variant="outline">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
