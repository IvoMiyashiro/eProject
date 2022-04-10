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

export const GpuSpecs = sql.define({
  name: 'specs_gpu',
  columns: [
    'id',
    'category_id',
    'product_id',
    'brand',
    'series',
    'model',
    'interface',
    'chipset_manufactor',
    'gpu',
    'cuda_cores',
    'effective_memory_clock',
    'memory_size',
    'memory_interface',
    'memory_type',
    'multi_monitor_support',
    'hdmi',
    'display_port',
    'max_resolution',
    'cooler',
    'thermal_design_power',
    'power_connector',
    'max_length',
    'dimentions',
  ]
} as any);
