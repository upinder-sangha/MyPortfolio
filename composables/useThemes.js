import { ref } from 'vue';

export const useTheme = () => {
  const activeTheme = ref('light'); // Default theme

  const changeTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    activeTheme.value = theme;
  };

  return {
    activeTheme,
    changeTheme,
  };
};