import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { OliveTreeLogo } from './DecorativeElements';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const navLinks = [{
    name: 'Home',
    id: 'home'
  }, {
    name: 'Apartments',
    id: 'apartments'
  }, {
    name: 'Gallery',
    id: 'moments'
  }, {
    name: 'Booking',
    id: 'booking'
  }, {
    name: 'Contact Us',
    id: 'contact'
  }];
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--paper)] shadow-md py-2' : 'bg-transparent py-4'}`}>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* LOGO */}
        <button onClick={() => scrollToSection('home')} className="flex items-center group leading-none">

          <OliveTreeLogo className={`transition-all duration-300 text-[var(--sienna)]
              ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}
            `} />


          <span className={`font-script text-2xl md:text-[26px] text-[var(--sienna)]
              ml-1 tracking-wide transition-opacity duration-300
              ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}
            `}>

            WaCa - Monopoli
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => <button key={link.name} onClick={() => scrollToSection(link.id)} className="font-serif text-lg text-[var(--brown)] hover:text-[var(--sienna)] transition-colors relative group">

              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--sage)] transition-all duration-300 group-hover:w-full" />
            </button>)}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[var(--brown)]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="absolute top-full left-0 w-full bg-[var(--paper)] border-b border-[var(--sage)] shadow-lg py-4 px-4 md:hidden flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => <button key={link.name} onClick={() => scrollToSection(link.id)} className="font-serif text-xl text-[var(--brown)] py-2 border-b border-[var(--sage)] border-opacity-20 last:border-0 text-left">

              {link.name}
            </button>)}
        </div>}
    </nav>;
}