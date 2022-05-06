import { useEffect, useState } from 'react';
import { localities as localitiesArr } from 'utils/data/localities';

export const useLocalities = (province: string) => {
  const [localities, setLocalities] = useState<string[]>([]);

  useEffect(() => {
    setLocalities([]);
    localitiesArr.localidades.map(locality => {
      if (locality.provincia.nombre === province) {
        setLocalities(prev => ([
          ...prev,
          locality.nombre.toLocaleLowerCase().replace(/(^\w|\s\w)/g, m => m.toUpperCase())
        ]));
      }
    });
  },[province]);

  return { localities };
};
