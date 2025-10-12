import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function ObsidianKitchen() {
  const photos = [
    'https://cdn.poehali.dev/files/2c599069-0fcb-44b5-a269-0b943724bff1.png',
    'https://cdn.poehali.dev/files/e4f869ae-36d4-47c0-a2cd-678f0cd3f0a5.png',
    'https://cdn.poehali.dev/files/e7803993-9883-402a-99b2-08f49f23bc50.png',
    'https://cdn.poehali.dev/files/7221a7ea-3653-4ca5-be91-7451d9db71ff.png',
    'https://cdn.poehali.dev/files/42f4f305-09dc-432f-adcc-f80636b56a43.png'
  ];

  const features = [
    'Столешница и фартук из черного мрамора с белыми прожилками',
    'Дубовые фасады в натуральном оттенке',
    'Рифленые панели на верхних шкафах',
    'Винный шкаф с подсветкой и стеклянными дверцами',
    'Встроенная техника черного цвета',
    'Архитектурное освещение в потолке',
    'Остров с черной столешницей под мрамор',
    'Открытые полки с LED-подсветкой'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          <Icon name="ArrowLeft" size={20} />
          <span>Назад к каталогу</span>
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Завораживающий Обсидиан
              </h1>
              <p className="text-3xl font-semibold text-orange-600 mb-6">
                от 340 000 ₽
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Роскошная кухня с черным мрамором и белыми прожилками, создающими завораживающий узор на столешнице и фартуке. 
                Натуральный дуб и рифленые панели добавляют теплоту и текстуру. Винный шкаф с подсветкой и архитектурное 
                освещение в потолке создают атмосферу премиального ресторана.
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Особенности:</h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Icon name="MessageCircle" size={24} />
                Получить консультацию
              </button>
            </div>

            <div className="space-y-4">
              {photos.map((photo, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img 
                    src={photo} 
                    alt={`Завораживающий Обсидиан - фото ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
