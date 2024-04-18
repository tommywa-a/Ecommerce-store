'use client'

import Image from 'next/image'
import {toast} from 'react-hot-toast'
import {X} from 'lucide-react'

import IconButton from '@/components/ui/icon-button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import {Product} from '@/types'

interface CartItemProps {
  data: Product
}

const CartItem: React.FC<CartItemProps> = ({
  data
}) => {
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
      div
    </li>
  )
}

export default CartItem