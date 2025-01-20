import { useSearchParams } from "react-router-dom";
import Product from "@/data/products.json";
import { useResponsiveScreens } from "@components/mediaQuery/useResponsiveScreens";
import { useEffect, useState } from "react";
export const useProductDetails = () => {
  const [searchParams] = useSearchParams();

  // Access specific query parameters

  const model_name = searchParams.get("model_name");
  const { isSmScreen } = useResponsiveScreens();
  const productdata = Product.find((p) => p.model_name === model_name);
  const [selectImage, setSelectImage] = useState<string | undefined>(productdata?.images[0]);

  useEffect(() => {
    setSelectImage(productdata?.images[0]);
  }, [productdata]);

  const features = {
    model_name: productdata?.model_name,
    dimension: productdata?.dimension,
    motor: productdata?.motor,
    water_tank: productdata?.water_tank,
    fan: productdata?.fan,
    speed_control: productdata?.speed_control,
    oscillating_louvers: productdata?.oscillating_louvers,
    cooling_pad: productdata?.cooling_pad,
    noise_level: productdata?.noise_level,
    power_consumption: productdata?.power_consumption,
    air_throw_distance: productdata?.air_throw_distance,
    airflow_capacity: productdata?.airflow_capacity,
    cooling_area: productdata?.cooling_area,
    warranty: productdata?.warranty,
    inverter_compatible: productdata?.inverter_compatible ? "true" : "false",
  };

  return {
    variables: { productdata, features, isSmScreen, selectImage, setSelectImage },
    methods: {},
  };
};
