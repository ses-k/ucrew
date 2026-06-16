'use client';

import Image from 'next/image';
import { Ship, Users, Compass, Anchor, Globe, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function UcrewHomepage() {
  const [lang, setLang] = useState<'en' | 'ja'>('en');
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from system preference or localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'true' || (!savedMode && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const t = {
    en: {
      nav: { about: 'About', voyages: 'Voyages', community: 'Community', join: 'Join Us' },
      hero: {
        welcome: 'Welcome Aboard',
        subtitle: 'Where every journey begins with friendship, adventure, and a fair wind',
        join: 'Join the Crew',
        explore: 'Explore Voyages'
      },
      about: {
        label: 'Our Story',
        title: 'The Sea Calls. We Answer.',
        p1: "Ucrew is more than a boating community — it's a movement of adventurers, friends, and dreamers who believe the best stories are told on the water.",
        p2: 'Founded with the spirit of the open ocean, we connect captains and crew members for unforgettable voyages across lakes, coasts, and beyond.'
      },
      voyages: {
        title: 'Upcoming Voyages',
        subtitle: 'Find your next adventure',
        cards: [
          { title: 'Sunset Cruise', location: 'Lake Michigan', date: 'Every Friday' },
          { title: 'Coastal Explorer', location: 'Pacific Northwest', date: 'July 12' },
          { title: 'Island Hopping', location: 'Caribbean', date: 'August' }
        ]
      },
      footer: {
        cta: 'Ready to chart your course?',
        button: 'Become a Crew Member',
        copyright: '© 2026 Ucrew • All Hands on Deck'
      }
    },
    ja: {
      nav: { about: 'について', voyages: '航海', community: 'コミュニティ', join: '参加する' },
      hero: {
        welcome: 'ようこそ乗船',
        subtitle: '友情と冒険、そして順風とともに始まるすべての旅',
        join: 'クルーになる',
        explore: '航海を探す'
      },
      about: {
        label: '私たちの物語',
        title: '海が呼ぶ。私たちは応える。',
        p1: 'Ucrewはただのボートコミュニティではありません — 水の上で最高の物語が生まれると信じる冒険家、友人、夢見る人々のムーブメントです。',
        p2: '大海原の精神で設立され、湖、沿岸、そしてその先へと忘れられない航海で船長とクルーを繋げます。'
      },
      voyages: {
        title: '今後の航海',
        subtitle: '次の冒険を見つけよう',
        cards: [
          { title: 'サンセットクルーズ', location: 'ミシガン湖', date: '毎週金曜日' },
          { title: '海岸探検', location: '太平洋岸北西部', date: '7月12日' },
          { title: '島巡り', location: 'カリブ海', date: '8月' }
        ]
      },
      footer: {
        cta: 'コースを決める準備はできましたか？',
        button: 'クルーメンバーになる',
        copyright: '© 2026 Ucrew • 全力で航海'
      }
    }
  };

  const current = t[lang];

  return (
    <div className="min-h-screen bg-[#FCF9F7] dark:bg-[#1A2333] font-sans overflow-x-hidden transition-colors">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-[#1A2333]/95 backdrop-blur-md z-50 border-b border-[#2E3B51]/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/ucrew-icon.jpg" alt="Ucrew Logo" width={48} height={48} className="rounded-full" />
            <span className="text-2xl font-bold text-[#2E3B51] dark:text-white tracking-tight">Ucrew</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[#34455D] dark:text-gray-300">
            <a href="#about" className="hover:text-[#C39F72] dark:hover:text-[#EBCBB5] transition-colors">{current.nav.about}</a>
            <a href="#voyages" className="hover:text-[#C39F72] dark:hover:text-[#EBCBB5] transition-colors">{current.nav.voyages}</a>
            <a href="#community" className="hover:text-[#C39F72] dark:hover:text-[#EBCBB5] transition-colors">{current.nav.community}</a>
            <a href="#join" className="hover:text-[#C39F72] dark:hover:text-[#EBCBB5] transition-colors">{current.nav.join}</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
              className="flex items-center gap-2 text-sm text-[#2E3B51] dark:text-gray-300 hover:text-[#C39F72] dark:hover:text-[#EBCBB5]"
            >
              <Globe className="w-4 h-4" /> {lang === 'en' ? '日本語' : 'English'}
            </button>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-[#2E3B51] dark:text-gray-300 hover:text-[#C39F72] dark:hover:text-[#EBCBB5] transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button className="bg-[#2E3B51] hover:bg-[#34455D] dark:hover:bg-[#C39F72] dark:bg-[#EBCBB5] dark:text-[#1A2333] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
              {lang === 'en' ? 'Set Sail' : '出航する'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        
        {/* Dark Mode Optimized Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E3B51]/80 dark:from-[#0F172A]/90 via-[#2E3B51]/60 dark:via-[#1A2333]/70 to-[#2E3B51]/75 dark:to-[#0F172A]/80" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image 
                src="/ucrew-icon.jpg" 
                alt="Ucrew" 
                width={320} 
                height={320} 
                className="drop-shadow-2xl rounded-full border-8 border-white/90 dark:border-white/70"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] tracking-tighter mb-6">
            {current.hero.welcome}
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {current.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#join" className="inline-flex items-center justify-center bg-white hover:bg-[#EBCBB5] text-[#2E3B51] dark:bg-[#EBCBB5] dark:hover:bg-white dark:text-[#1A2333] px-10 py-4 rounded-2xl text-lg font-semibold transition-all shadow-lg">
              {current.hero.join}
            </a>
            <a href="#voyages" className="inline-flex items-center justify-center border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all shadow-lg">
              {current.hero.explore}
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FCF9F7] dark:from-[#1A2333] to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-[#1A2333] text-[#34455D] dark:text-gray-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-[#EBCBB5] dark:bg-[#C39F72] text-[#2E3B51] dark:text-[#1A2333] rounded-full text-sm font-medium mb-6">
                {current.about.label}
              </div>
              <h2 className="text-5xl font-bold text-[#2E3B51] dark:text-white mb-8 leading-tight">
                {current.about.title}
              </h2>
              <p className="text-lg leading-relaxed">{current.about.p1}</p>
              <p className="text-lg mt-6 leading-relaxed">{current.about.p2}</p>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden aspect-square bg-[#ABB8C9]/10 dark:bg-[#2E3B51]/30 flex items-center justify-center">
              <Image src="/ucrew-icon.jpg" alt="Ucrew" width={280} height={280} className="rounded-full shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Voyages Section */}
      <section id="voyages" className="py-24 bg-[#FCF9F7] dark:bg-[#121A2A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2E3B51] dark:text-white">{current.voyages.title}</h2>
            <p className="text-[#34455D] dark:text-gray-400 mt-4">{current.voyages.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {current.voyages.cards.map((voyage, i) => (
              <div key={i} className="bg-white dark:bg-[#1F2A3F] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group border border-transparent dark:border-white/5">
                <div className="w-12 h-12 bg-[#EBCBB5] dark:bg-[#C39F72] rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                  <Anchor className="text-[#2E3B51] dark:text-[#1A2333]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#2E3B51] dark:text-white mb-2">{voyage.title}</h3>
                <p className="text-[#34455D] dark:text-gray-400">{voyage.location}</p>
                <p className="text-sm text-[#C39F72] dark:text-[#EBCBB5] mt-8">{voyage.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E3B51] dark:bg-[#0F172A] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Image src="/ucrew-icon.jpg" alt="Ucrew" width={80} height={80} className="mx-auto mb-8 rounded-full" />
          <p className="text-2xl mb-8">{current.footer.cta}</p>
          <button className="bg-white text-[#2E3B51] hover:bg-[#EBCBB5] dark:bg-[#EBCBB5] dark:text-[#1A2333] px-12 py-4 rounded-full text-lg font-semibold transition-colors">
            {current.footer.button}
          </button>
          <p className="mt-16 text-sm opacity-70">{current.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}