import { Moon, Sun } from 'react-feather';
import React, { useState } from 'react';

import { Link } from 'gatsby';
import Logo from './logo';
import { store } from '../utils';

export const DARK_MODE_CLASS_NAMES = ['dark', 'bg-gray-900'];
export const LIGHT_MODE_CLASS_NAMES = ['bg-gray-50'];

const isRunningInBrowser = () => {
  return !!(typeof window !== 'undefined');
};

export const Nav = () => {
  const [isDarkMode, setDarkMode] = useState(
    localStorage && localStorage.getItem('theme') === 'theme-dark',
  );

  const toggleTheme = () => {
    if (isRunningInBrowser()) {
      const switchToDarkMode = !isDarkMode;
      localStorage.setItem('theme', switchToDarkMode ? 'theme-dark' : 'theme-light');
      setDarkMode(switchToDarkMode);
      const toRemove = switchToDarkMode ? LIGHT_MODE_CLASS_NAMES : DARK_MODE_CLASS_NAMES;
      const toAdd = switchToDarkMode ? DARK_MODE_CLASS_NAMES : LIGHT_MODE_CLASS_NAMES;
      document.documentElement.classList.add(...toAdd);
      document.documentElement.classList.remove(...toRemove);
      store.dispatch('theme:change', switchToDarkMode);
    }
  };

  return (
    <div className="container mx-auto">
      <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <Link to="/">
            <Logo className="w-24" />
          </Link>
        </div>
        <div>Gatsby + TypeScript + TailwindCSS</div>
        <button className="outline-none" onClick={toggleTheme}>
          {isDarkMode && <Moon />}
          {!isDarkMode && <Sun />}
        </button>
      </nav>
    </div>
  );
};

export default Nav;
