import axios from 'axios'
import React, { createContext, ReactNode, useEffect, useState } from 'react'


interface CatsAPIProviderProps {
  children: ReactNode
}

interface CatAPIDataType {
  width: number;
  height: number;
  id: string;
  url: string;
}

interface CatsAPIPContextProps {
  catAPIData: CatAPIDataType[];
  handleRandomizeImage: () => void;
}

export const CatsAPIContext = createContext({} as CatsAPIPContextProps)

export function CatsAPIProvider({children}: CatsAPIProviderProps) {

  const [catAPIData, setCatAPIData] = useState<CatAPIDataType[]>([])

  function handleRandomizeImage() {
    setCatAPIData([])
    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(response => response.data)
    .then(data => setCatAPIData(data))
  }

  useEffect(() => {
    handleRandomizeImage()
  }, [])

  return (
    <CatsAPIContext.Provider value={{
      catAPIData,
      handleRandomizeImage
    }}>
      {children}
    </CatsAPIContext.Provider>
  )
}
