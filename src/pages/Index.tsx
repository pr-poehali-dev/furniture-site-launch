import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import KitchenCalculator from '@/components/KitchenCalculator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('kitchen');
  const [calculatorData, setCalculatorData] = useState({
    width: '',
    height: '',
    depth: '',
    category: 'kitchen'
  });

  const categories = [
    { id: 'kitchen', name: 'Кухни', icon: 'ChefHat' },
    { id: 'wardrobe', name: 'Шкафы', icon: 'Shirt' },
    { id: 'kids', name: 'Детские', icon: 'Baby' },
    { id: 'hallway', name: 'Прихожие', icon: 'DoorOpen' },
    { id: 'bathroom', name: 'Мебель для ванной', icon: 'Bath' }
  ];

  const products = {
    kitchen: [
      { name: 'Кухня "Модерн"', price: '89 000 ₽', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop' },
      { name: 'Кухня "Классика"', price: '125 000 ₽', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=400&fit=crop' },
      { name: 'Кухня "Лофт"', price: '95 000 ₽', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop' }
    ],
    wardrobe: [
      { name: 'Шкаф-купе 3-дверный', price: '65 000 ₽', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=400&fit=crop' },
      { name: 'Шкаф распашной', price: '48 000 ₽', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
      { name: 'Угловой шкаф', price: '72 000 ₽', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&h=400&fit=crop' }
    ],
    kids: [
      { name: 'Детская "Радуга"', price: '78 000 ₽', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop' },
      { name: 'Детская "Космос"', price: '85 000 ₽', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop' },
      { name: 'Детская "Принцесса"', price: '92 000 ₽', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=400&fit=crop' }
    ],
    hallway: [
      { name: 'Прихожая "Компакт"', price: '32 000 ₽', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=400&fit=crop' },
      { name: 'Прихожая "Премиум"', price: '55 000 ₽', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=400&fit=crop' },
      { name: 'Прихожая угловая', price: '45 000 ₽', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop' }
    ],
    bathroom: [
      { name: 'Гарнитур "Аква"', price: '42 000 ₽', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop' },
      { name: 'Гарнитур "Элит"', price: '68 000 ₽', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&h=400&fit=crop' },
      { name: 'Тумба с зеркалом', price: '28 000 ₽', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop' }
    ]
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
      time: 'от 10 дней до 4 недель',
      description: 'Запускаем вашу мебель в производство. Изготавливаем каждую деталь точно по проекту на современном оборудовании, где распил материалов производится в точности до 1 мм.',
      icon: 'Hammer'
    },
    {
      title: 'Команда «По Местам!»',
      time: 'от 3 часов',
      description: 'Привозим мебель по будням в день и время, которое удобно вам. Собираем. Расставляем всё как нужно, убираем за собой и показываем вам готовый результат.',
      icon: 'Truck'
    },
    {
      title: 'Команда «Готово!»',
      time: '1 рабочий день',
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
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/9718af21-0c22-4cb5-bf92-f1740fa73509.png" 
                alt="По Местам!" 
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold text-primary">ПО МЕСТАМ!</span>
            </div>
            
            <nav className="hidden md:flex gap-6">
              {['Главная', 'О нас', 'Каталог', 'Этапы работы', 'Калькулятор', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-primary transition-colors font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </header>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Корпусная мебель<br />
                <span className="text-primary">на заказ</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Индивидуальный дизайн, точные размеры, качественные материалы. 
                Создаём мебель, которая идеально впишется в ваш интерьер.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection('калькулятор')}
                >
                  Рассчитать стоимость
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('каталог')}
                >
                  Смотреть каталог
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&h=800&fit=crop"
                  alt="Мебель"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">О нас</h2>
          
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-xl text-center leading-relaxed text-muted-foreground mb-8">
                  Зачем нужна мебель? Чтобы спрятать вещи? Нет. Ее настоящая задача — освободить энергию пространства и направить ее на вдохновение своих хозяев.
                </p>
                
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    «По Местам!» — это не просто название. Это наше обещание.
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Ruler" size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Четкость</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      В линиях, конструкциях и организации процесса. От эскиза до сборки — все продумано до мелочей.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Слаженность</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      В работе нашей команды дизайнеров, инженеров и сборщиков. И, конечно, в том, как наши предметы взаимодействуют друг с другом в вашем интерьере.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Zap" size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Заряд</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Который получает ваше пространство. Мы создаем мебель, которая мотивирует, организует и дает мощный импульс для новых свершений.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Card className="bg-gradient-to-r from-primary to-primary/80 text-white border-none shadow-xl">
                <CardContent className="py-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Пора навести порядок!
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold">
                    Командуйте - По Местам!
                  </p>
                  <Button 
                    size="lg" 
                    className="mt-6 bg-white text-primary hover:bg-gray-100"
                    onClick={() => scrollToSection('калькулятор')}
                  >
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: 'Award', title: 'Гарантия 5 лет', desc: 'На всю продукцию' },
              { icon: 'Ruler', title: 'Точные размеры', desc: 'Замер бесплатно' },
              { icon: 'Truck', title: 'Доставка', desc: 'По всему городу' },
              { icon: 'Wrench', title: 'Сборка', desc: 'Профессиональная' }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={item.icon as any} size={40} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="каталог" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Каталог мебели</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите категорию и ознакомьтесь с нашими работами
          </p>

          <Tabs defaultValue="kitchen" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 h-auto">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="flex flex-col gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Icon name={cat.icon as any} size={24} />
                  <span className="text-xs md:text-sm">{cat.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="animate-fade-in">
                <div className="grid md:grid-cols-3 gap-6">
                  {products[cat.id as keyof typeof products].map((product, idx) => (
                    <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow group">
                      <div className="aspect-[3/2] overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Заказать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="этапы-работы" className="py-20 px-4 bg-gradient-to-b from-white to-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Как мы работаем</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            От замера до полной сборки — каждый этап продуман для вашего удобства
          </p>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {workSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-full text-white font-bold text-xl mb-4 mx-auto shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <Icon name={step.icon as any} size={32} className="text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-center">{step.title}</h3>
                    <div className="text-center mb-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed flex-grow">
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

          <Card className="max-w-6xl mx-auto shadow-xl bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Почему выбирают нас</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Clock" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Срок изготовления</h4>
                    <p className="text-sm text-muted-foreground">от 1 до 4 недель</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Award" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Гарантия 2 года</h4>
                    <p className="text-sm text-muted-foreground">Мы уверенны в своем качестве</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Wrench" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Постгарантийное</h4>
                    <p className="text-sm text-muted-foreground">обслуживание</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name="ShieldCheck" size={28} className="text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Всегда с вами</h4>
                    <p className="text-sm text-muted-foreground">Никогда не оставим вас с проблемой одних</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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

      <section id="калькулятор" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Калькулятор стоимости</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответьте на несколько вопросов, и мы рассчитаем стоимость вашей мебели
          </p>

          <div className="grid grid-cols-5 gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white border-gray-200 hover:border-primary/50'
                }`}
              >
                <Icon name={cat.icon as any} size={20} className="mx-auto mb-2" />
                <span className="text-xs md:text-sm">{cat.name}</span>
              </button>
            ))}
          </div>

          {selectedCategory === 'kitchen' && (
            <KitchenCalculator onComplete={(data) => console.log('Данные кухни:', data)} />
          )}

          {selectedCategory !== 'kitchen' && (
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="text-center py-12">
                  <Icon name="Wrench" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-4">Калькулятор в разработке</h3>
                  <p className="text-muted-foreground mb-6">
                    Для расчёта стоимости этой категории мебели свяжитесь с нами напрямую
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить специалисту
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section id="о-нас" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">О нас</h2>
          
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-xl text-center leading-relaxed text-muted-foreground mb-8">
                  Зачем нужна мебель? Чтобы спрятать вещи? Нет. Ее настоящая задача — освободить энергию пространства и направить ее на вдохновение своих хозяев.
                </p>
                
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    «По Местам!» — это не просто название. Это наше обещание.
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Ruler" size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Четкость</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      В линиях, конструкциях и организации процесса. От эскиза до сборки — все продумано до мелочей.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Слаженность</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      В работе нашей команды дизайнеров, инженеров и сборщиков. И, конечно, в том, как наши предметы взаимодействуют друг с другом в вашем интерьере.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon name="Zap" size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Заряд</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Который получает ваше пространство. Мы создаем мебель, которая мотивирует, организует и дает мощный импульс для новых свершений.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Card className="bg-gradient-to-r from-primary to-primary/80 text-white border-none shadow-xl">
                <CardContent className="py-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Пора навести порядок!
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold">
                    Командуйте - По Местам!
                  </p>
                  <Button 
                    size="lg" 
                    className="mt-6 bg-white text-primary hover:bg-gray-100"
                    onClick={() => scrollToSection('калькулятор')}
                  >
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Phone" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-lg">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Mail" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-lg">info@pomestam.ru</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-lg">г. Москва, ул. Мебельная, 10</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
              <div className="space-y-4">
                <Input placeholder="Ваше имя" className="text-lg p-3" />
                <Input placeholder="Телефон" className="text-lg p-3" />
                <Input placeholder="Email" className="text-lg p-3" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Отправить заявку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/9718af21-0c22-4cb5-bf92-f1740fa73509.png" 
                  alt="По Местам!" 
                  className="h-10 w-10 brightness-0 invert"
                />
                <span className="text-xl font-bold">ПО МЕСТАМ!</span>
              </div>
              <p className="text-white/70">
                Корпусная мебель на заказ с 2010 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                {['Главная', 'Каталог', 'Этапы работы', 'О нас', 'Калькулятор', 'Контакты'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="block text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
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