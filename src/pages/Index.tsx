import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import KitchenCalculator from '@/components/KitchenCalculator';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('kitchen');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [budgetPriority, setBudgetPriority] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<{[key: string]: number}>({
    kitchen: 0,
    wardrobe: 0,
    closet: 0,
    kids: 0,
    hallway: 0,
    bathroom: 0
  });
  const [calculatorData, setCalculatorData] = useState({
    width: '',
    height: '',
    depth: '',
    category: 'kitchen'
  });

  const categories = [
    { id: 'kitchen', name: 'Кухни', icon: 'ChefHat' },
    { id: 'wardrobe', name: 'Шкафы', icon: 'Box' },
    { id: 'closet', name: 'Гардеробные', icon: 'Shirt' },
    { id: 'kids', name: 'Детские', icon: 'Baby' },
    { id: 'hallway', name: 'Прихожие', icon: 'DoorOpen' },
    { id: 'bathroom', name: 'Мебель для ванной', icon: 'Bath' }
  ];

  const products = {
    kitchen: [
      { 
        name: 'Белоснежный Остров', 
        price: 'от 195 000 ₽', 
        image: 'https://cdn.poehali.dev/files/f401c10f-8d7b-472d-871a-e5e936fcb206.png',
        description: 'Белоснежный остров и огромный обеденный стол — настоящий центр притяжения. Чёрные акценты добавляют характера.',
        link: '/kitchen/island'
      },
      { 
        name: 'Мятная Свежесть', 
        price: 'от 165 000 ₽', 
        image: 'https://cdn.poehali.dev/files/67e172e3-a2a1-485b-bc41-54b1ae520fcc.jpg',
        description: 'Нежный фисташковый и белоснежный — тренд 2025! Деревянная столешница, витрина с подсветкой. Природная гармония.',
        link: '/kitchen/mint'
      },
      { 
        name: 'Синий Сапфир', 
        price: 'от 215 000 ₽', 
        image: 'https://cdn.poehali.dev/files/d266f22f-c602-4f96-bcc6-5c985f2aec3c.png',
        description: 'Премиум-класс! Глубокий сапфировый синий, золотой фартук, винотека для коллекции. Домашний винный бутик.',
        link: '/kitchen/sapphire'
      },
      { 
        name: 'Графитовый Шик', 
        price: 'от 245 000 ₽', 
        image: 'https://cdn.poehali.dev/files/390dba13-37d5-4e59-93b2-c62cd34877f7.png',
        description: 'Монохромная элегантность! Графит и белоснежные рифлёные панели, арочное освещение, стеклянная витрина. Сдержанная роскошь.',
        link: '/kitchen/graphite'
      },
      { 
        name: 'Городские Джунгли', 
        price: 'от 275 000 ₽', 
        image: 'https://cdn.poehali.dev/files/b60b6ebc-9285-400a-9ca5-16237ea0fe85.png',
        description: 'Изумрудные фасады с чёрным гарнитуром. Трековое освещение, витрина для посуды, остров с барной стойкой. Природа встречается с урбанизмом!',
        link: '/kitchen/urban-jungle'
      },
      { 
        name: 'Завораживающий Обсидиан', 
        price: 'от 340 000 ₽', 
        image: 'https://cdn.poehali.dev/files/2c599069-0fcb-44b5-a269-0b943724bff1.png',
        description: 'Черный мрамор с белыми прожилками на столешнице и фартуке. Дубовые фасады, рифленые панели, винный шкаф с подсветкой. Архитектурное освещение в потолке!',
        link: '/kitchen/obsidian'
      },
      { 
        name: 'Современная Классика', 
        price: 'от 255 000 ₽', 
        image: 'https://cdn.poehali.dev/files/89c84c38-a757-4178-84d6-7d8db7b94630.png',
        description: 'Серо-бежевая элегантность с золотыми люстрами. Выдвижные системы премиум, LED в каждом шкафу. Умная классика!',
        link: '/kitchen/modern-classic'
      },
      { 
        name: 'Графитовый Остров', 
        price: 'от 320 000 ₽', 
        image: 'https://cdn.poehali.dev/files/d0bf1be3-5f3e-4fcf-9639-311d5d93cb75.png',
        description: 'Минимализм премиум с островом и винной стойкой. Техника Bosch, глянцевый черный фартук. Трековое LED!',
        link: '/kitchen/graphite-island'
      },
      { 
        name: 'Морской песок', 
        price: 'от 235 000 ₽', 
        image: 'https://cdn.poehali.dev/files/b64016d7-c1f1-4ca6-93dd-d28449e01dac.png',
        description: 'Акварельный фартук с серо-голубыми разводами и золотом. Витрина-музей для красивой посуды. Завтрак на «пять звёзд»!',
        link: '/kitchen/sand'
      },
      { 
        name: 'Мраморная Волна', 
        price: 'от 215 000 ₽', 
        image: 'https://cdn.poehali.dev/files/d676c13c-97fa-4498-a670-42f8d4dee382.png',
        description: 'Белоснежные матовые фасады с мраморным фартуком. Push-to-open, встроенная сушилка, LED-подсветка. Компактная элегантность!',
        link: '/kitchen/marble-wave'
      },
      { 
        name: 'Классический Беж', 
        price: 'от 245 000 ₽', 
        image: 'https://cdn.poehali.dev/files/82f0c0a0-4582-4381-9377-6e71b78a5ff5.png',
        description: 'Элегантные рамочные фасады и изысканный геометрический фартук. Шкафы до потолка, встроенная Samsung. Классика премиум!',
        link: '/kitchen/classic-beige'
      },
      { 
        name: 'Графитовый Минимализм', 
        price: 'от 285 000 ₽', 
        image: 'https://cdn.poehali.dev/files/7d42ad80-ab7c-47f4-a6c5-7c03bc353e00.png',
        description: 'Строгая угловая кухня со встроенным пеналом-витриной. Чёрный мрамор, световые линии, бетонные текстуры. Современная архитектура в интерьере!',
        link: '/kitchen/graphite-minimalism'
      },
      { 
        name: 'Воздушный зефир', 
        price: 'от 135 000 ₽', 
        image: 'https://cdn.poehali.dev/files/d65e0e32-8c5f-4bb3-8a64-c4c5800f99a8.png',
        description: 'Идеальное воплощение минимализма. Белоснежные матовые фасады без ручек, светлая столешница из искусственного камня.',
        link: '/kitchen/snow'
      },
      { 
        name: 'Нежный Миндаль', 
        price: 'от 175 000 ₽', 
        image: 'https://cdn.poehali.dev/files/585c182c-5548-42a2-af38-a57163d02fe2.png',
        description: 'Изысканная минималистичная кухня в миндальных тонах с мраморной столешницей и островом.',
        link: '/kitchen/almond'
      }
    ],
    wardrobe: [
      { 
        name: 'Буфет для кухни-гостиной', 
        price: 'от 185 000 ₽', 
        image: 'https://cdn.poehali.dev/files/1b37dd40-8570-4a17-88ab-904ebd68597f.png',
        description: 'Буфет до потолка с бронзовым стеклом в профиле Modus. Интегрированная подсветка, фурнитура Hettich push-to-open. Премиальная атмосфера!',
        link: '/wardrobe/kitchen-buffet'
      }
    ],
    closet: [],
   
    kids: [],
   
    hallway: [
      { 
        name: 'Прихожая со встроенной системой хранения', 
        price: 'от 95 000 ₽', 
        image: 'https://cdn.poehali.dev/files/cb4b5212-aaaf-45ac-97e5-1574b9ca71a3.png',
        description: 'Лаконичная прихожая с зеркальными фасадами, встроенной банкеткой и продуманной системой хранения. Вертикальные фрезеровки и точечная подсветка создают премиальную атмосферу.',
        link: '/hallway/built-in-storage'
      }
    ],
    bathroom: []
  };

  const workSteps = [
    {
      title: 'Команда «На выезд!»',
      time: 'от 1 часа',
      description: 'Приезжаем на замер с профессиональным оборудованием и образцами. Слушаем ваши пожелания, делаем точные замеры, выбираем материалы и цвета для вашей будущей мебели. Передаём документы с гарантией.',
      icon: 'MapPin'
    },
    {
      title: 'Команда «В проект!»',
      time: 'от 1 дня до 1 недели',
      description: 'Создаём 3D-проект вашей мебели. Вы увидите, как всё будет выглядеть, и сможете внести правки перед изготовлением. Работа с вами ведется онлайн. Связь с нами - ежедневно.',
      icon: 'Pencil'
    },
    {
      title: 'Команда «В цех!»',
      time: 'от 7 дней до 3 недель',
      description: 'Запускаем вашу мебель в производство. Изготавливаем каждую деталь точно по проекту на современном оборудовании, где распил материалов производится в точности до 1 мм.',
      icon: 'Hammer'
    },
    {
      title: 'Команда «По Местам!»',
      time: 'от 1 дня',
      description: 'Привозим мебель по будням в день и время, которое удобно вам. Собираем. Расставляем всё как нужно, убираем за собой и показываем вам готовый результат.',
      icon: 'Truck'
    },
    {
      title: 'Команда «Готово!»',
      time: '',
      description: 'Ваша мебель на месте — теперь в доме полный порядок!',
      icon: 'Check'
    }
  ];

  const calculatePrice = () => {
    const width = parseFloat(calculatorData.width) || 0;
    const height = parseFloat(calculatorData.height) || 0;
    const depth = parseFloat(calculatorData.depth) || 0;
    
    const volume = (width * height * depth) / 1000000;
    const pricePerCubicMeter = {
      kitchen: 120000,
      wardrobe: 80000,
      kids: 100000,
      hallway: 70000,
      bathroom: 90000
    };
    
    const basePrice = volume * pricePerCubicMeter[calculatorData.category as keyof typeof pricePerCubicMeter];
    return Math.round(basePrice);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <img 
                src="https://cdn.poehali.dev/files/9718af21-0c22-4cb5-bf92-f1740fa73509.png" 
                alt="По Местам!" 
                className="h-10 w-10 md:h-16 md:w-16"
              />
              <span className="text-lg md:text-2xl font-semibold text-primary tracking-wide">ПО МЕСТАМ!</span>
            </div>
            
            <nav className="hidden md:flex gap-6">
              {['Главная', 'Каталог', 'Акция', 'О нас', 'Этапы работы', 'Калькулятор', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-primary transition-colors font-semibold relative group text-lg"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button 
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Меню"
              >
                <span className="w-6 h-0.5 bg-foreground transition-all"></span>
                <span className="w-6 h-0.5 bg-foreground transition-all"></span>
                <span className="w-6 h-0.5 bg-foreground transition-all"></span>
              </button>
              
              <Button className="bg-primary hover:bg-primary/90 text-sm md:text-lg font-semibold px-4 py-3 md:px-8 md:py-6">
              <Icon name="Phone" size={18} className="mr-1 md:mr-2 md:hidden" />
              <Icon name="Phone" size={22} className="mr-2 hidden md:block" />
              <span className="hidden md:inline">Звонок</span>
            </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
            <nav className="container mx-auto px-4 py-4">
              {['Главная', 'Каталог', 'Акция', 'О нас', 'Этапы работы', 'Калькулятор', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase().replace(' ', '-'));
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-semibold rounded-lg"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section id="главная" className="pt-20 md:pt-32 pb-16 md:pb-32 px-4 bg-[#F9F8F4]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-3xl md:text-7xl font-light mb-4 md:mb-8 leading-tight text-[#474931]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Корпусная мебель<br />
                для тех,<br />
                кто ценит <span className="text-primary">стиль</span><br />
                и <span className="text-primary">качество</span>
              </h1>
              <p className="text-base md:text-2xl text-black mb-6 md:mb-10 leading-relaxed font-bold" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Мы не просто ставим мебель. Мы расставляем всё по местам для вашего комфорта: от нижних шкафов до верхних полок, создавая безупречную эргономику.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all px-6 py-4 text-lg font-semibold"
                  onClick={() => scrollToSection('калькулятор')}
                >
                  Рассчитать стоимость
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#A5A383] text-[#A5A383] hover:bg-[#A5A383] hover:text-white transition-all px-6 py-4 text-lg font-semibold"
                  onClick={() => scrollToSection('каталог')}
                >
                  Смотреть каталог
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.2)] transition-all duration-500 relative">
                <img 
                  src="https://cdn.poehali.dev/files/a1f8e927-882f-4e25-b734-b7ed77bd9f48.jpg"
                  alt="Мебель"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-sm p-3 md:p-6 rounded-bl-2xl shadow-lg">
                  <img 
                    src="https://cdn.poehali.dev/files/9718af21-0c22-4cb5-bf92-f1740fa73509.png" 
                    alt="По Местам!" 
                    className="h-12 w-12 md:h-24 md:w-24"
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-emerald-800 text-white p-2 md:p-4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.25)] flex items-center gap-2 md:gap-3">
                <Icon name="ShieldCheck" size={20} className="text-white md:hidden" />
                <Icon name="ShieldCheck" size={28} className="text-white hidden md:block" />
                <div>
                  <div className="text-xs md:text-sm font-bold">Проверенный</div>
                  <div className="text-xs md:text-sm font-bold">исполнитель</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="каталог" className="py-12 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-[#474931]">Каталог мебели</h2>
          <p className="text-center text-[#A5A383] mb-8 md:mb-16 text-sm md:text-lg">
            Выберите категорию и ознакомьтесь с нашими работами
          </p>

          <Tabs defaultValue="kitchen" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 md:mb-12 h-auto bg-[#F9F8F4] p-1 md:p-2 rounded-2xl">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="flex flex-col gap-1 md:gap-2 py-2 md:py-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Icon name={cat.icon as any} size={18} className="md:hidden" />
                  <Icon name={cat.icon as any} size={24} className="hidden md:block" />
                  <span className="text-[10px] md:text-sm">{cat.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => {
              const categoryProducts = products[cat.id as keyof typeof products];
              const itemsPerPage = 3;
              const totalPages = Math.ceil(categoryProducts.length / itemsPerPage);
              const currentCategoryPage = currentPage[cat.id] || 0;
              const startIdx = currentCategoryPage * itemsPerPage;
              const visibleProducts = categoryProducts.slice(startIdx, startIdx + itemsPerPage);

              return (
                <TabsContent key={cat.id} value={cat.id} className="animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                    {visibleProducts.map((product, idx) => (
                      <Card 
                        key={startIdx + idx} 
                        className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
                        onClick={() => {
                          if ((product as any).link) {
                            navigate((product as any).link);
                          }
                        }}
                      >
                        <div className="aspect-[3/2] overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-4 md:p-6">
                          <h3 className="font-bold text-base md:text-lg mb-2">{product.name}</h3>
                          {(product as any).description && (
                            <p className="text-xs md:text-sm text-muted-foreground mb-3">{(product as any).description}</p>
                          )}
                          <div className="flex items-center justify-between">
                            <span className="text-lg md:text-xl font-bold text-primary">{product.price}</span>
                            <Button 
                              size="sm" 
                              className="bg-primary hover:bg-primary/90 text-xs md:text-sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                if ((product as any).link) {
                                  navigate((product as any).link);
                                }
                              }}
                            >
                              {(product as any).link ? 'Подробнее' : 'Заказать'}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => ({
                          ...prev,
                          [cat.id]: Math.max(0, currentCategoryPage - 1)
                        }))}
                        disabled={currentCategoryPage === 0}
                        className="gap-1"
                      >
                        <Icon name="ChevronLeft" size={16} />
                        Назад
                      </Button>
                      
                      <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(prev => ({
                              ...prev,
                              [cat.id]: i
                            }))}
                            className={`w-8 h-8 rounded-full transition-all ${
                              currentCategoryPage === i
                                ? 'bg-primary text-white'
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => ({
                          ...prev,
                          [cat.id]: Math.min(totalPages - 1, currentCategoryPage + 1)
                        }))}
                        disabled={currentCategoryPage === totalPages - 1}
                        className="gap-1"
                      >
                        Вперёд
                        <Icon name="ChevronRight" size={16} />
                      </Button>
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <section id="акция" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 md:mb-16">
            <Card className="bg-gradient-to-r from-primary via-orange-500 to-primary border-none shadow-2xl rounded-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 md:w-80 md:h-80 bg-white/10 rounded-full -translate-y-20 translate-x-20 md:-translate-y-40 md:translate-x-40"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full translate-y-16 -translate-x-16 md:translate-y-32 md:-translate-x-32"></div>
              <CardContent className="py-6 px-4 md:py-8 md:px-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                  <div className="text-center md:text-left">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3 md:mb-4">
                      <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wide">🎁 Специальное предложение</span>
                    </div>
                    <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                      Закажи мебель —<br />получи порядок в подарок!
                    </h2>
                    <p className="text-white/90 text-sm md:text-lg mb-4 md:mb-6">
                      При заказе любой корпусной мебели — премиум набор органайзеров в подарок!
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all px-6 md:px-10 py-4 md:py-6 text-base md:text-xl font-bold rounded-xl hover:scale-105 w-full md:w-auto"
                      onClick={() => scrollToSection('калькулятор')}
                    >
                      <Icon name="Gift" size={24} className="mr-2" />
                      Получить подарок
                    </Button>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                        <Icon name="Truck" size={28} className="text-white md:hidden" />
                        <Icon name="Truck" size={36} className="text-white hidden md:block" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-2">+ Бесплатная бережная доставка</h3>
                        <p className="text-white/90 text-sm md:text-lg">
                          По Казани и пригороду
                        </p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      Доставим вашу мебель аккуратно и в срок — вам не придётся ни о чём беспокоиться
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 mt-4 md:mt-6">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative aspect-square">
                <img 
                  src="https://cdn.poehali.dev/files/652129ad-5045-40a4-9927-f0ef9c488fe2.jpg"
                  alt="Организация для кухни"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base font-semibold shadow-lg">
                  Для кухни
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative aspect-square">
                <img 
                  src="https://cdn.poehali.dev/files/def4ece3-07fa-4572-aff9-f28b85253525.jpg"
                  alt="Организация для шкафов"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base font-semibold shadow-lg">
                  Для шкафов
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative aspect-square">
                <img 
                  src="https://cdn.poehali.dev/files/568a41fc-0181-4d86-bb7b-1a5244eecc01.jpg"
                  alt="Организация для детских"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base font-semibold shadow-lg">
                  Для детских
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative aspect-square">
                <img 
                  src="https://cdn.poehali.dev/files/c9c4b421-84c7-40c7-871b-2d9626b6bc97.jpg"
                  alt="Организация для прихожих"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base font-semibold shadow-lg">
                  Для прихожих
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative aspect-square">
                <img 
                  src="https://cdn.poehali.dev/files/4520e25d-e2c9-4d43-8c11-9d2aab7e0d35.jpg"
                  alt="Организация для ванной"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary text-white px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-base font-semibold shadow-lg">
                  Для ванной
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-12 md:py-20 px-4 bg-[#EEECE0]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#474931]">О нас</h2>
          
          <div className="space-y-4 md:space-y-6">
            <Card className="border-none shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-3xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-4 md:p-8">
                <p className="text-base md:text-xl text-center leading-relaxed text-gray-900 mb-4 md:mb-6">
                  Зачем нужна мебель? Чтобы спрятать вещи? Нет. Ее настоящая задача — освободить энергию пространства и направить ее на вдохновение своих хозяев.
                </p>
                
                <div className="text-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-3xl font-semibold text-primary mb-2 md:mb-3">
                    «По Местам!» — это не просто название. Это наше обещание.
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <Icon name="Ruler" size={28} className="text-primary md:hidden" />
                      <Icon name="Ruler" size={32} className="text-primary hidden md:block" />
                    </div>
                    <h4 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-gray-900">Четкость</h4>
                    <p className="text-sm md:text-base text-gray-900 leading-relaxed">
                      В линиях, конструкциях и организации процесса. От эскиза до сборки — все продумано до мелочей.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Слаженность</h4>
                    <p className="text-base text-gray-900 leading-relaxed">
                      В работе нашей команды дизайнеров, инженеров и сборщиков. И, конечно, в том, как наши предметы взаимодействуют друг с другом в вашем интерьере.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Zap" size={32} className="text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">Заряд</h4>
                    <p className="text-base text-gray-900 leading-relaxed">
                      Который получает ваше пространство. Мы создаем мебель, которая мотивирует, организует и дает мощный импульс для новых свершений.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center max-w-3xl mx-auto">
              <Card className="bg-gradient-to-br from-primary via-primary to-orange-600 text-white border-none shadow-[0_20px_60px_rgba(255,128,0,0.3)] rounded-2xl md:rounded-3xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/5 rounded-full -translate-y-16 translate-x-16 md:-translate-y-32 md:translate-x-32"></div>
                <CardContent className="py-6 px-4 md:py-10 md:px-8 relative z-10">
                  <h3 className="text-xl md:text-3xl font-light mb-2 md:mb-3">
                    Пора навести порядок!
                  </h3>
                  <p className="text-base md:text-xl font-light mb-4 md:mb-6 opacity-95">
                    Командуйте - По Местам!
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all px-4 md:px-8 py-3 md:py-6 text-sm md:text-base font-semibold w-full md:w-auto"
                    onClick={() => scrollToSection('калькулятор')}
                  >
                    <Icon name="Calculator" size={18} className="mr-1 md:mr-2 md:hidden" />
                    <Icon name="Calculator" size={22} className="mr-2 hidden md:block" />
                    Рассчитать стоимость
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="этапы-работы" className="py-8 md:py-12 px-4 bg-[#A5A383]">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-white">Как мы работаем</h2>
          <p className="text-center text-white/90 mb-6 md:mb-8 text-sm md:text-xl max-w-3xl mx-auto font-medium">
            От замера до полной сборки — каждый этап продуман для вашего удобства
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6 md:mb-8">
            {workSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary bg-white">
                  <CardContent className="p-3 md:p-4 flex flex-col h-full">
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full text-white font-bold text-base md:text-lg mb-2 md:mb-3 mx-auto shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="flex items-center justify-center mb-2 md:mb-3">
                      <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                        <Icon name={step.icon as any} size={24} className="text-primary md:hidden" />
                        <Icon name={step.icon as any} size={28} className="text-primary hidden md:block" />
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 text-center text-black">{step.title}</h3>
                    <div className="text-center mb-2 md:mb-3">
                      <span className="inline-block bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 text-center leading-snug flex-grow font-medium">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {idx < workSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-2 w-4 h-4 z-10">
                    <Icon name="ChevronRight" size={16} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <Card className="max-w-6xl mx-auto shadow-xl bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Почему выбирают нас</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                      <Icon name="Heart" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Заинтересованы в вас</h4>
                    <p className="text-sm text-muted-foreground">также, как в самих себе</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
                    ⚡ Скорость
                  </div>
                  <CardContent className="p-4 text-center">
                    <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                      <Icon name="Clock" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Срок изготовления</h4>
                    <p className="text-sm text-muted-foreground">от 1 до 4 недель</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                      <Icon name="Award" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Гарантия 2 года</h4>
                    <p className="text-sm text-muted-foreground">Мы уверенны в своем качестве</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                      <Icon name="Wrench" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Постгарантийное обслуживание</h4>
                    <p className="text-sm text-muted-foreground">Всегда поможем</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                      <Icon name="ShieldCheck" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Всегда с вами</h4>
                    <p className="text-sm text-muted-foreground">Никогда не оставим вас с проблемой одних</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
                      <Icon name="MessageCircle" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Мы на связи</h4>
                    <p className="text-sm text-muted-foreground">24/7</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="калькулятор" className="py-8 md:py-12 px-4 bg-[#F9F8F4]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-2 md:mb-3">Калькулятор стоимости</h2>
          <p className="text-center text-muted-foreground mb-4 md:mb-6 text-xs md:text-sm">
            Ответьте на несколько вопросов, и мы рассчитаем стоимость вашей мебели
          </p>

          <div className="grid grid-cols-5 gap-1 md:gap-2 mb-4 md:mb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-2 md:p-4 rounded-lg border-2 transition-all flex flex-col items-center ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white border-gray-200 hover:border-primary/50'
                }`}
              >
                <Icon name={cat.icon as any} size={16} className="mb-1 md:hidden flex-shrink-0" />
                <Icon name={cat.icon as any} size={20} className="mb-2 hidden md:block flex-shrink-0" />
                <span className="text-[10px] md:text-sm leading-tight text-center">{cat.name}</span>
              </button>
            ))}
          </div>

          {selectedCategory === 'kitchen' && (
            <KitchenCalculator onComplete={(data) => console.log('Данные кухни:', data)} />
          )}

          {selectedCategory !== 'kitchen' && (
            <Card className="shadow-xl">
              <CardContent className="p-4 md:p-8">
                {!budgetPriority ? (
                  <div className="space-y-4">
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-center">Мы можем делать мебель от эконом до премиум сегмента. Какой приоритет у Вас?</h3>
                    <div className="space-y-3">
                      {[
                        { id: 'premium', label: 'Как можно премиальнее (Максимально дорогая фурнитура и материалы)' },
                        { id: 'cheap', label: 'Как можно дешевле (Максимально дешевый материал, даже там, где экономия вредит надежности и удобству)' },
                        { id: 'optimal', label: 'ЦЕНА-КАЧЕСТВО' },
                        { id: 'unrealistic', label: 'Чтоб было красиво, удобно, надежно, дешево и как можно быстрее :)' },
                        { id: 'consultation', label: 'Затрудняюсь ответить, нужна консультация' }
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setBudgetPriority(option.id)}
                          className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                        >
                          <p className="text-sm md:text-base font-medium">{option.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 md:py-12">
                    <Icon name="Wrench" size={36} className="mx-auto mb-3 text-primary md:hidden" />
                    <Icon name="Wrench" size={48} className="mx-auto mb-4 text-primary hidden md:block" />
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Калькулятор в разработке</h3>
                    <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                      Для расчёта стоимости этой категории мебели свяжитесь с нами напрямую
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button className="bg-primary hover:bg-primary/90" onClick={() => setBudgetPriority('')}>
                        <Icon name="ArrowLeft" size={18} className="mr-2" />
                        Назад
                      </Button>
                      <Button className="bg-primary hover:bg-primary/90">
                        <Icon name="Phone" size={18} className="mr-2" />
                        Позвонить специалисту
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section id="контакты" className="py-12 md:py-20 px-4 bg-[#474931]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white">Контакты</h2>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <Card className="text-center">
              <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6">
                <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary md:hidden" />
                <Icon name="Phone" size={40} className="mx-auto mb-4 text-primary hidden md:block" />
                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Телефон</h3>
                <p className="text-sm md:text-base">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Mail" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-base">info@pomestam.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-base">г. Москва, ул. Мебельная, 10</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 md:mt-8">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Оставьте заявку</h3>
              <div className="space-y-3 md:space-y-4">
                <Input placeholder="Ваше имя" className="text-sm md:text-base p-2 md:p-3" />
                <Input placeholder="Телефон" className="text-sm md:text-base p-2 md:p-3" />
                <Input placeholder="Email" className="text-sm md:text-base p-2 md:p-3" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-sm md:text-base py-4 md:py-6">
                  Отправить заявку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/9718af21-0c22-4cb5-bf92-f1740fa73509.png" 
                  alt="По Местам!" 
                  className="h-8 w-8 md:h-10 md:w-10 brightness-0 invert"
                />
                <span className="text-base md:text-lg font-bold">ПО МЕСТАМ!</span>
              </div>
              <p className="text-white/70 text-sm md:text-base">
                Корпусная мебель на заказ с 2010 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Навигация</h4>
              <div className="space-y-1 md:space-y-2">
                {['Главная', 'Каталог', 'Этапы работы', 'О нас', 'Калькулятор', 'Контакты'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="block text-white/70 hover:text-white transition-colors text-sm md:text-base"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Контакты</h4>
              <div className="space-y-1 md:space-y-2 text-white/70 text-sm md:text-base">
                <p>+7 (495) 123-45-67</p>
                <p>info@pomestam.ru</p>
                <p>г. Москва, ул. Мебельная, 10</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2025 По Местам! Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;