import vegemite from 'vegemite';

interface EventMap {
  'theme:change': boolean;
}

interface State {
  next: number;
  isDarkMode: boolean;
}

export const store = vegemite<EventMap, State>({
  next: 1,
  isDarkMode: false,
});

store.on('theme:change', (state, newValue) => {
  return { next: state.next + 1, isDarkMode: newValue };
});
