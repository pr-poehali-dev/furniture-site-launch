import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function KitchenMarbleWave() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Мраморная Волна</h1>
          <p className="text-xl text-muted-foreground mb-8">Белоснежные матовые фасады с роскошным мраморным фартуком. Для ценителей чистоты и элегантности!</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <img 
                src="https://cdn.poehali.dev/files/d676c13c-97fa-4498-a670-42f8d4dee382.png" 
                alt="Кухня Мраморная Волна - вид 1" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://cdn.poehali.dev/files/7e65a22a-8d5b-45d2-a970-1a542ed65091.png" 
                alt="Кухня Мраморная Волна - вид 2" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-4">
              <img 
                src="https://cdn.poehali.dev/files/5a6b0db2-1821-40bf-bafb-125f31cdec76.png" 
                alt="Кухня Мраморная Волна - вид 3" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://cdn.poehali.dev/files/44b068de-32e1-4c35-98a7-e7387501158b.png" 
                alt="Кухня Мраморная Волна - вид 4" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold">от 215 000 ₽</h2>
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
                  <p className="text-muted-foreground">Безупречно белые матовые фасады без ручек. Фартук и столешница из искусственного мрамора с золотисто-бежевыми разводами. LED-подсветка под шкафами создаёт эффект парения.</p>
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
                  <p className="text-muted-foreground">Встроенная посудомоечная машина с доводчиком. Сушилка для посуды в верхнем шкафу. Выдвижные ящики на доводчиках с системой Blum Tandembox. Push-to-open — открытие касанием.</p>
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
                  <p className="text-muted-foreground">Встроенная техника: духовой шкаф, микроволновая печь, индукционная варочная панель. Посудомоечная машина 45 см. Современное освещение — встроенные точечные светильники.</p>
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
                  <p className="text-muted-foreground">Угловая планировка 2,4×2,0 метра. Идеально для компактных пространств. Верхние шкафы в два яруса до потолка — максимум хранения. Глубина столешницы 60 см.</p>
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
                <span>Роскошный мраморный фартук — каждый узор уникален, как произведение искусства</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Система Push-to-open — никаких ручек, чистота линий и современность</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Множество выдвижных ящиков — доступ к каждому сантиметру</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Встроенная сушилка для посуды — всё под рукой, ничего лишнего</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Компактное решение — максимум функционала в минимуме пространства</span>
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
