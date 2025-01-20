export interface IProduct {
  title: string;
  description?: string;
  key_features?: string[];
  images: string[];
  hero_images?: string[];
  model_name: string;
  dimension: string;
  motor: string;
  water_tank: string;
  fan: string;
  speed_control: string;
  oscillating_louvers: string;
  cooling_pad: string;
  noise_level?: string;
  power_consumption?: string;
  air_throw_distance?: string;
  airflow_capacity?: string;
  cooling_area?: string;
  warranty: string;
  safety_features?: string[];
  user_friendly_features?: string[];
  suitable_for?: string[];
  available_colors: string[];
  inverter_compatible: boolean;
}
