const getFromLocalStorage = () => {
  const storedItems = localStorage.getItem("blogs");

  if (storedItems) {
    return JSON.parse(storedItems);
  } else {
    return [];
  }
};

const saveToLocalStorage = (id) => {
  return localStorage.setItem("blogs", JSON.stringify(id));
};

const setToLocalStorage = (blogs) => {
  const savedItems = getFromLocalStorage();
  const found = savedItems.find((item) => item.id === blogs.id);
  if (!found) {
    // const stored = savedItems.filter((item) => item.id !== blogs.id);
    // saveToLocalStorage(stored);
    saveToLocalStorage([...savedItems, blogs]);
  }
};

const handleDeleteFromLocalStorage = (blog) => {
  const stored = getFromLocalStorage();
  const found = stored.filter((item) => item.id !== blog.id);
  saveToLocalStorage(found);
};

export { getFromLocalStorage, setToLocalStorage, handleDeleteFromLocalStorage };
