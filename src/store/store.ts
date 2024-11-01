import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TStoreUser } from "../types";

interface UserState {
  name: string | null;
  profileImg: string | null;
  uid: string | null;
  id: number | null;
  setUser: (data: TStoreUser) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: null,
      profileImg: null,
      uid: null,
      id: null,
      setUser: (data: TStoreUser) =>
        set({
          name: data.name,
          profileImg: data.profileImg,
          uid: data.uid,
          id: data.id,
        }),
      clearUser: () => set({ name: null, profileImg: null, uid: null }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
