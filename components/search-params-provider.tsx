"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

type SearchParamsContextType = {
  searchParams: URLSearchParams
  setParam: (name: string, value: string) => void
  removeParam: (name: string) => void
  resetParams: () => void
}

const SearchParamsContext = createContext<SearchParamsContextType | undefined>(undefined)

export function SearchParamsProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const setParam = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set(name, value)
    router.push(`${pathname}?${params.toString()}`)
  }

  const removeParam = (name: string) => {
    const params = new URLSearchParams(searchParams)
    params.delete(name)
    router.push(`${pathname}?${params.toString()}`)
  }

  const resetParams = () => {
    router.push(pathname)
  }

  return (
    <SearchParamsContext.Provider
      value={{
        searchParams: new URLSearchParams(searchParams.toString()),
        setParam,
        removeParam,
        resetParams,
      }}
    >
      {children}
    </SearchParamsContext.Provider>
  )
}

export function useSearchParamsContext() {
  const context = useContext(SearchParamsContext)
  if (context === undefined) {
    throw new Error("useSearchParamsContext must be used within a SearchParamsProvider")
  }
  return context
}
