import { create } from 'zustand'

type globalStoreType = {
  isRefresh: boolean,
  setIsRefresh: (data: boolean) => void
}


export const useGlobalStore = create<globalStoreType>()((set) => ({
  isRefresh: false,
  setIsRefresh: (data: boolean) => {
    set({ isRefresh: data})
  }
}))