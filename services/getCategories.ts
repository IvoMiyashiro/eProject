import { CategoryList } from 'interfaces';

interface Response {
  ok: boolean;
  categories: {category_name: CategoryList}[]
}

export const getCategories = async ()=> {
  
  const resp = await fetch('/api/categories');
  const { ok, categories }: Response = await resp.json();

  if (!ok) return [];

  return categories;
};
