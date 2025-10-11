import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

interface KitchenCalculatorProps {
  onComplete?: (data: any) => void;
}

const KitchenCalculator = ({ onComplete }: KitchenCalculatorProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    kitchenType: '',
    length: '',
    height: '',
    materials: [] as string[],
    upperCabinets: '',
    handleType: '',
    contact: ''
  });

  const kitchenTypes = [
    { id: 'straight', label: 'Прямая' },
    { id: 'corner', label: 'Угловая' },
    { id: 'u-shaped', label: 'П-образная' },
    { id: 'island', label: 'С островом' },
    { id: 'undecided', label: 'Пока не решил(а)' }
  ];

  const lengthOptions = [
    { id: '1-3', label: '1-3 м.' },
    { id: '3-5', label: '3-5 м.' },
    { id: '6-8', label: '6-8 м.' },
    { id: '9+', label: 'от 9 м.' }
  ];

  const heightOptions = [
    { id: 'up-2.4', label: 'до 2,4 м.' },
    { id: '2.4-2.5', label: 'от 2,4 до 2,5 м.' },
    { id: '2.5-2.7', label: 'от 2,5 до 2,7 м.' },
    { id: '2.7-3', label: 'от 2,7 до 3 м.' },
    { id: '3+', label: 'выше 3 м.' }
  ];

  const materialOptions = [
    { id: 'ldsp', label: 'ЛДСП' },
    { id: 'mdf-pvc', label: 'МДФ в ПВХ-плёнке' },
    { id: 'mdf-enamel', label: 'МДФ в Эмали' },
    { id: 'mdf-plastic', label: 'МДФ в пластике (AGT)' },
    { id: 'combined', label: 'Комбинированный вариант' },
    { id: 'consultation', label: 'Затрудняюсь ответить, нужна консультация' }
  ];

  const upperCabinetsOptions = [
    { id: 'tall', label: 'Да, высотой с пеналы' },
    { id: 'lower', label: 'Да, но ниже пеналов' },
    { id: 'no', label: 'Нет, предпочитаю только нижние' },
    { id: 'undecided', label: 'Затрудняюсь ответить' }
  ];

  const handleTypes = [
    {
      id: 'edge',
      label: 'Лаконичные торцевые',
      image: 'https://cdn.poehali.dev/files/c9471d4f-26db-4702-9172-960ebb58110d.jpg'
    },
    {
      id: 'bracket',
      label: 'Ручки-скобы',
      image: 'https://cdn.poehali.dev/files/6b1d6bad-c4b9-4b51-9474-117c230d592f.jpg'
    },
    {
      id: 'gola',
      label: 'Современный скрытый Gola-профиль',
      image: 'https://cdn.poehali.dev/files/0c82e2d9-b3cf-4cd5-82e0-e38833d766ee.jpg'
    },
    {
      id: 'integrated',
      label: 'Интегрированные ручки в фасаде',
      image: 'https://cdn.poehali.dev/files/7cdd201c-659b-4eab-8e80-92e70934277a.jpg'
    }
  ];

  const toggleMaterial = (materialId: string) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.includes(materialId)
        ? prev.materials.filter(m => m !== materialId)
        : [...prev.materials, materialId]
    }));
  };

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      onComplete?.(formData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.kitchenType !== '';
      case 2:
        return formData.length !== '';
      case 3:
        return formData.height !== '';
      case 4:
        return formData.materials.length > 0;
      case 5:
        return formData.upperCabinets !== '';
      case 6:
        return formData.handleType !== '';
      case 7:
        return formData.contact !== '';
      default:
        return false;
    }
  };

  return (
    <Card className="shadow-xl">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Шаг {step} из 7</span>
            <span className="text-sm font-semibold text-primary">{Math.round((step / 7) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 7) * 100}%` }}
            />
          </div>
        </div>

        <div className="min-h-[400px]">
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Какой вариант кухни вам нужен?</h3>
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/97d7c634-a131-4812-b0ee-79a12ffad119.jpg"
                  alt="Варианты планировки кухни"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 gap-3">
                {kitchenTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFormData({ ...formData, kitchenType: type.id })}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.kitchenType === type.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Укажите примерную длину кухни:</h3>
              <div className="grid grid-cols-1 gap-3">
                {lengthOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormData({ ...formData, length: option.id })}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.length === option.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Укажите примерную высоту кухни:</h3>
              <div className="grid grid-cols-1 gap-3">
                {heightOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormData({ ...formData, height: option.id })}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.height === option.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Материал для фасадов (дверок)</h3>
              <p className="text-sm text-muted-foreground mb-4">Можно выбрать несколько вариантов</p>
              <div className="space-y-3">
                {materialOptions.map((material) => (
                  <div
                    key={material.id}
                    className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.materials.includes(material.id)
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => toggleMaterial(material.id)}
                  >
                    <Checkbox
                      checked={formData.materials.includes(material.id)}
                      onCheckedChange={() => toggleMaterial(material.id)}
                    />
                    <label className="flex-1 cursor-pointer">{material.label}</label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Будут ли верхние шкафы?</h3>
              <div className="grid grid-cols-1 gap-3">
                {upperCabinetsOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormData({ ...formData, upperCabinets: option.id })}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.upperCabinets === option.id
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Какие ручки вы бы предпочли:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {handleTypes.map((handle) => (
                  <button
                    key={handle.id}
                    onClick={() => setFormData({ ...formData, handleType: handle.id })}
                    className={`border-2 rounded-lg overflow-hidden transition-all ${
                      formData.handleType === handle.id
                        ? 'border-primary'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={handle.image}
                        alt={handle.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`p-3 text-center font-medium ${
                      formData.handleType === handle.id ? 'bg-primary/5' : ''
                    }`}>
                      {handle.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Почти готово!</h3>
              <p className="text-muted-foreground mb-6">
                Мы рассчитаем стоимость мебели по вашим указанным данным. 
                Оставьте, пожалуйста, свой номер телефона или электронную почту, 
                куда направить расчёт.
              </p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="contact" className="text-base mb-2 block">
                    Телефон или Email
                  </Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="+7 (999) 123-45-67 или email@example.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="text-lg p-3"
                  />
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Icon name="Info" size={20} className="text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Наш специалист свяжется с вами в течение дня и отправит 
                      подробный расчёт стоимости вашей кухни
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-8">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex-1"
            >
              <Icon name="ChevronLeft" size={20} className="mr-2" />
              Назад
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            {step === 7 ? 'Получить расчёт' : 'Далее'}
            {step < 7 && <Icon name="ChevronRight" size={20} className="ml-2" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default KitchenCalculator;