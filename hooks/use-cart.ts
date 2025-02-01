import { create } from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'

import { Product, CartItem } from '@/types'
import toast from 'react-hot-toast'

interface CartStore {
	items: CartItem[]
	addItem: (data: Product) => void
	removeItem: (id: string) => void
	updateQuantity: (id: string, quantity: number) => void
	removeAll: () => void
}

const useCart = create(
	persist<CartStore>((set, get) => ({
		items: [],
		addItem: (data: Product) => {
			const currentItems = get().items
			const existingItem = currentItems.find((item) => item.id === data.id)

			if (existingItem) {
				return toast.error('Item already in cart')
			}

			const cartItem: CartItem = {
				...data,
				quantity: 1
			}

			set({ items: [...currentItems, cartItem] })
			toast.success('Item added to cart')
		},
		removeItem: (id: string) => {
			set({ items: get().items.filter((item) => item.id !== id) })
			toast.success('Item removed from cart')
		},
		updateQuantity: (id: string, quantity: number) => {
			const currentItems = get().items
			const updatedItems = currentItems.map(item => 
				item.id === id 
					? { ...item, quantity: Math.max(1, quantity) }
					: item
			)
			set({ items: updatedItems })
		},
		removeAll: () => set({ items: [] }),
	}), {
		name: "cart-storage",
		storage: createJSONStorage(() => localStorage),
	})
)

export default useCart
