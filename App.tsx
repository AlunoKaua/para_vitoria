import  { useState, useEffect } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-yellow-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Floating Hearts */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <Heart className="w-6 h-6 text-pink-400/30" />
      </div>
      <div className="absolute top-32 right-16 animate-bounce delay-2000">
        <Sparkles className="w-5 h-5 text-yellow-400/30" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-3000">
        <Star className="w-4 h-4 text-pink-400/30" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce delay-1500">
        <Heart className="w-5 h-5 text-red-400/30" />
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-2000 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            
            {/* Header Icon */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-full">
                  <Heart className="w-16 h-16 text-white animate-pulse" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
              Para Você,
              <br />
              Meu Grande Amor
            </h1>

            {/* Declaration Text */}
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-pink-500/20 relative overflow-hidden mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-yellow-500/5"></div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                  Desde o primeiro momento em que nossos olhares se cruzaram, soube que você era especial. 
                  Seu sorriso ilumina meus dias mais escuros, sua voz é a melodia mais doce que já ouvi, 
                  e seu coração é o lugar onde encontrei minha paz.
                </p>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                  Você não é apenas a pessoa que eu amo, você é minha melhor amiga, minha confidente, 
                  minha parceira de aventuras e sonhos. Com você, descobri que o amor verdadeiro existe 
                  e que pode ser ainda mais lindo do que eu imaginava.
                </p>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                  Cada dia em que pude estar ao seu lado. Cada risada compartilhada, cada abraço apertado, 
                  cada momento... tudo isso constrói a história mais bonita 
                  que eu poderia viver.
                </p>
                
                <div className="border-t border-pink-500/20 pt-8 mt-8">
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent mb-4">
                    Eu te amo não apenas pelo que você é,
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                    mas por quem eu me torno quando estou com você.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-4 text-pink-400">
                <Star className="w-8 h-8 animate-pulse" />
                <span className="text-2xl md:text-3xl font-bold">Para sempre seu</span>
                <Star className="w-8 h-8 animate-pulse" />
              </div>
              
              <div className="flex items-center space-x-2 text-yellow-400">
                <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
                <span className="text-xl md:text-2xl font-semibold">Com todo meu amor</span>
                <Heart className="w-6 h-6 animate-pulse" fill="currentColor" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
    </div>
  );
}

export default App;