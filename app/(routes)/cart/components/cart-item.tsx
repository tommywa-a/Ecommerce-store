'use client'

import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { X, Plus, Minus } from 'lucide-react'

import IconButton from '@/components/ui/icon-button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import { CartItem as CartItemType } from '@/types'

interface CartItemProps {
	data: CartItemType
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
	const cart = useCart()

	const onRemove = () => {
		cart.removeItem(data.id)
	}

	const onIncreaseQuantity = () => {
		cart.updateQuantity(data.id, data.quantity + 1)
	}

	const onDecreaseQuantity = () => {
		if (data.quantity > 1) {
			cart.updateQuantity(data.id, data.quantity - 1)
		}
	}

	return (
		<li className='flex py-6 border-b'>
			<div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
				<Image
					src={data.images[0].url}
					alt=''
					fill
					className='object-cover object-center'
				/>
			</div>
			<div className='relative ml-4 flex-1 flex flex-col justify-between sm:ml-6'>
				<div className='absolute z-10 right-0 top-0'>
					<IconButton
						onClick={onRemove}
						icon={<X size={15} />}
					/>
				</div>
				<div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
					<div className='flex justify-between'>
						<p className='text-lg font-semibold text-black'>{data.name}</p>
					</div>

					<div className='mt-1 flex text-sm'>
						<p className='text-gray-500'>{data.color?.name}</p>
						<p className='text-gray-500 ml-4 border-l border-gray-200 pl-4'>
							{data.size?.name}
						</p>
					</div>
					<div className='flex items-center mt-2'>
						<IconButton
							onClick={onDecreaseQuantity}
							icon={<Minus size={15} />}
						/>
						<span className='mx-2 text-gray-600'>{data.quantity}</span>
						<IconButton
							onClick={onIncreaseQuantity}
							icon={<Plus size={15} />}
						/>
					</div>
					<Currency value={Number(data.price) * data.quantity} />
				</div>
			</div>
		</li>
	)
}

export default CartItem
