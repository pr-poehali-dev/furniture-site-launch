import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function KitchenClassicBeige() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            <Icon name="ChefHat" size={32} />
            <span>КухниПро</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="ArrowLeft" size={20} />
            Назад к каталогу
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Классический Беж</h1>
          <p className="text-xl text-muted-foreground mb-8">Элегантная кухня в классическом стиле с нежными бежевыми фасадами. Изысканная геометрия фартука и максимум хранения!</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <img 
                src="https://cdn.poehali.dev/files/82f0c0a0-4582-4381-9377-6e71b78a5ff5.png" 
                alt="Кухня Классический Беж - общий вид" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://cdn.poehali.dev/files/1a92b2e7-ccca-4605-bbd5-a5fe13262c9b.png" 
                alt="Кухня Классический Беж - рабочая зона" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-4">
              <img 
                src="https://cdn.poehali.dev/files/fe8b2d5d-147b-4345-abb3-594a9aefe967.png" 
                alt="Кухня Классический Беж - выдвижные ящики" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://cdn.poehali.dev/files/8273de32-ef90-444a-9e74-61720e649fb6.png" 
                alt="Кухня Классический Беж - системы хранения" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold">от 245 000 ₽</h2>
                <p className="text-muted-foreground">Цена под ключ с установкой</p>
              </div>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
                Заказать расчёт
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg p-6 shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Palette" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Дизайн</h3>
                  <p className="text-muted-foreground">Классические бежевые фасады с рамочным декором. Изысканный фартук с геометрическим узором в серо-бежевых тонах. Деревянная столешница добавляет тепла и уюта.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Lightbulb" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Особенности</h3>
                  <p className="text-muted-foreground">Угловая планировка с максимальным использованием пространства. Верхние шкафы до потолка в два яруса. Встроенная техника Samsung. Доводчики на всех дверцах и ящиках.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Package" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Комплектация</h3>
                  <p className="text-muted-foreground">Духовой шкаф и микроволновая печь Samsung. Индукционная варочная панель. Встроенная вытяжка. Множество выдвижных ящиков с внутренними органайзерами.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Ruler" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Размеры</h3>
                  <p className="text-muted-foreground">Угловая кухня 2,7×2,5 метра. Высота верхних шкафов — до потолка. Глубокие выдвижные ящики. Просторная рабочая зона под окном.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon name="Sparkles" size={28} />
              Почему эта кухня особенная?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Классический дизайн с рамочными фасадами — элегантность вне времени</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Изысканный фартук с геометрическим узором — настоящее украшение кухни</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Огромное количество систем хранения — места хватит на всё!</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Встроенная техника Samsung — качество и надёжность</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Рабочая зона у окна — готовьте с видом на природу</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Высокие шкафы до потолка — максимум места без потери эстетики</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-bold">
              <Icon name="ChefHat" size={28} />
              <span>КухниПро</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 КухниПро. Кухни вашей мечты</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
