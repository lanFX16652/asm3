export const PRODUCT_STORAGE_KEY = "PRODUCT_STORAGE_KEY";

export const LocalStorageService = {
  store: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  load: (key) => {
    const items = JSON.parse(localStorage.getItem(key));
    if (items) {
      return items;
    } else {
      return null;
    }
  },
  remove: (key) => localStorage.removeItem(key)
};


export const parseCurrency = (number) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return formatter.format(number)
}

