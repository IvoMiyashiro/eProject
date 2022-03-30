export interface ICategory {
  id: string;
  category_name: CategoryList;
}

export type CategoryList = 
  | 'CPU / Processors'
  | 'Motherboard'
  | 'Memory'
  | 'Video Cards'
  | 'Case'
  | 'Power Supply'
  | 'Storage'
  | 'CPU Cooler'
  | 'Operating System'
