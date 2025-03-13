import { ref, onMounted } from 'vue';

export const useTheme = () => {
  const activeTheme = ref('light'); // Default to light

  const changeTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    activeTheme.value = theme;
  };

  onMounted(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    changeTheme(initialTheme);
  });

  return {
    activeTheme,
    changeTheme,
  };
};
