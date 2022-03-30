import sql from 'sql';

export const Product = sql.define({
  name: 'product',
  columns: [
    'id',
    'title',
    'price',
    'discount_price',
    'short_description',
    'stock',
    'category',
    'brand',
    'image_urls',
    'created_at',
    'updated_at',
  ]
} as any);

export const Category = sql.define({
  name: 'category',
  columns: [
    'id',
    'category_name'
  ]
} as any);

export const Brand = sql.define({
  name: 'brand',
  columns: [
    'id',
    'brand_name'
  ]
} as any);
