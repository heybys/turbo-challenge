import { create } from 'zustand';

interface ItemsState {
  selectedItems: string[];
  select: (depth: number, label: string) => void;
}

const useItems = create<ItemsState>((setState) => {
  return {
    selectedItems: [],
    select: (depth, label) =>
      setState((state) => ({
        selectedItems: state.selectedItems.includes(label)
          ? state.selectedItems
          : [...state.selectedItems.slice(0, depth), label],
      })),
  };
});

export default useItems;
