import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { User } from '../types/UserSchema'

interface UserStore {
  user: User
  setUser: (user: User) => void
}

export const useUserStore = create<UserStore>()(devtools(immer((set) => ({
    user: null,
    setUser: (user) =>
      set((state) => {
          state.user = user
      }),
  }))))
