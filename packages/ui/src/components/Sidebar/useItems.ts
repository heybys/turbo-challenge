import { create } from 'zustand';
import { useLocation, useParams } from 'react-router-dom';

interface ItemsState {
  selectedItems: string[];
  select: (depth: number, label: string) => void;
}

const useItems = create<ItemsState>((setState) => {
  const location = useLocation();

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
