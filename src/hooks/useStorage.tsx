import { useState, useEffect } from 'react'

export const UseStorage = (key: string, value: boolean) => {
  const [isStored, setStorage] = useState(() => {
    const ls = localStorage.getItem(key)
    if (ls) return JSON.parse(ls)
    return value
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(isStored))
  }, [key, isStored])

  return [isStored, setStorage]
}