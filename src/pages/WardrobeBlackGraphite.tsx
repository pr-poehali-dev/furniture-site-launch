import { useState } from 'react';
import { ArrowLeft, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const WardrobeBlackGraphite = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://cdn.poehali.dev/files/20bfb000-4d27-450c-bf3f-e3d77ae3d809.png',
    'https://cdn.poehali.dev/files/5234f152-e646-416d-a2e2-ce3fc5aad57a.png',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 hover:bg-white/60 transition-all"
        >
          <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
          Назад к каталогу
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt="Чёрный Графит"
              className="w-full h-[600px] object-cover"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white w-8' : 'bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Чёрный Графит
              </h1>
              <p className="text-3xl font-semibold text-primary mb-6">от 165 000 ₽</p>
            </div>

            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Встроенный шкаф в современном стиле с фасадами ЛДСП EGGER в цвете "Чёрный Графит". 
                Минималистичный дизайн с торцевыми ручками создаёт элегантный и строгий образ.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md space-y-4">
              <h3 className="font-semibold text-xl mb-4 text-gray-900">Особенности:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Фасады ЛДСП EGGER "Чёрный Графит"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Минималистичные торцевые ручки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Фурнитура с доводчиками</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Выдвижные ящики для мелочей</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Штанги для одежды</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-gray-700">Вместительные полки</span>
                </li>
              </ul>
            </div>

            <a
              href="tel:+79123456789"
              className="block w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Icon name="Phone" className="h-5 w-5" />
              Заказать расчёт
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardrobeBlackGraphite;