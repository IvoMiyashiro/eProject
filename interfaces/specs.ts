export interface ISpecs {
  specs: IGpuSpects
}

export type IGpuSpects = {
  id: string;
  category_id: string;
  product_id: string;
  brand: string;
  series: string;
  model: string;
  interface: string;
  chipset_manufactor: string;
  gpu: string;
  cuda_cores: number;
  effective_memory_clock: string;
  memory_size: string;
  memory_interface: string;
  memory_type: string;
  multi_monitor_support: number;
  hdmi: string;
  display_port: string;
  max_resolution: string;
  cooler: string;
  thermal_design_power: string;
  power_connector: string;
  max_length: string;
  dimentions: string;
}
