export interface IBrand {
  id: string;
  brand_name: BrandList;
}

export type BrandList = 
  | 'Intel'
  | 'AMD'
  | 'MSI'
  | 'ASRock'
  | 'Asus'
  | 'Gigabyte'
  | 'G.Skill'
  | 'Corsair'
  | 'Kingston Technology Corp'
  | 'EVGA'
  | 'ZOTAC'
  | 'Sapphire Tech'
  | 'NZXT'
  | 'Cooler Master'
  | 'Samsung'
  | 'Noctua'
  | 'Thermaltake'
  | 'Lian li'
  | 'Western Digital'
  | 'Seagate';
