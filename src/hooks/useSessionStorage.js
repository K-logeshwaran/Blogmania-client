import { useEffect, useState } from "react";

export function useSessionStorage(key, initialValue) {
        const [value, setValue] = useState(() => {
          const jsonValue = sessionStorage.getItem(key)
          if (jsonValue != null) return JSON.parse(jsonValue)
          return initialValue
        })
      
        useEffect(() => {
          sessionStorage.setItem(key, JSON.stringify(value))
        }, [key, value])
      
        return [value, setValue]
}