import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/shared/lib/redux/store.ts';

type SystemSlice = {
  openedModals: Array<string>;
};

const initialState: SystemSlice = {
  openedModals: [],
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    openModal(
      state,
      action: PayloadAction<{
        key: string;
      }>
    ) {
      if (state.openedModals.includes(action.payload.key)) return;
      const newArray = state.openedModals.slice();
      newArray.push(action.payload.key);
      state.openedModals = newArray;
    },
    closeModalByKey(state, action: PayloadAction<string>) {
      state.openedModals = state.openedModals.filter(
        (key) => key !== action.payload
      );
    },
    closeAllModals(state) {
      state.openedModals = [];
    },
  },
});


export const checkModalStatusByKey = (state: RootState, modalKey: string) => {
  return state.system.openedModals.includes(modalKey);
};
