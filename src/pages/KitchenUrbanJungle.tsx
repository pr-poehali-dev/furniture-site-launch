import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function KitchenUrbanJungle() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Городские Джунгли</h1>
          <p className="text-xl text-muted-foreground mb-8">Изумрудные фасады с графитовым гарнитуром. Для тех, кто ценит природу и стиль!</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <img 
                src="https://cdn.poehali.dev/files/b60b6ebc-9285-400a-9ca5-16237ea0fe85.png" 
                alt="Кухня Городские Джунгли - вид 1" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://cdn.poehali.dev/files/0a3bbeff-84ae-4932-97d0-b0a6cf092371.png" 
                alt="Кухня Городские Джунгли - вид 2" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-4">
              <img 
                src="https://cdn.poehali.dev/files/1bbeb171-e28c-4b0c-bbba-6afc88591cab.png" 
                alt="Кухня Городские Джунгли - вид 3" 
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://cdn.poehali.dev/files/9714cc0c-cffa-489a-be2c-53fc8e15e31a.png" 
                alt="Кухня Городские Джунгли - вид 4" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold">от 275 000 ₽</h2>
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
                  <p className="text-muted-foreground">Изумрудные матовые фасады с глубокими чёрными панелями. Столешница из тёмного камня с эффектом мрамора. Трековое освещение и встроенная LED-подсветка создают атмосферу.</p>
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
                  <p className="text-muted-foreground">Витрина со стеклянными полками для посуды. Деревянная зона острова с барной стойкой. Много зелени — живые растения в деревянных кашпо. Система push-to-open.</p>
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
                  <p className="text-muted-foreground">Встроенная техника премиум-класса, духовой шкаф с микроволновкой, наклонная вытяжка, варочная панель 4 конфорки. Современный холодильник с дисплеем.</p>
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
                  <p className="text-muted-foreground">Угловая планировка с островом. Общая длина гарнитура 5,2 метра. Остров 2,4×1,2 метра с рабочей зоной и зоной отдыха. Высота шкафов до потолка — максимум хранения.</p>
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
                <span>Сочетание природы и урбанистики — изумруд, графит, дерево и живые растения</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Многоуровневое освещение: трековые светильники, LED-подсветка, акцентный свет</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Остров с зоной готовки и барной стойкой — центр притяжения</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Витрина-галерея для красивой посуды — функционально и эстетично</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Мраморный пол и тёмная столешница — практично и элегантно</span>
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
