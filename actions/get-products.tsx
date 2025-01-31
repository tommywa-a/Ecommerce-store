import { Product } from '@/types' 
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
	categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    }
  })

  try {
    const res = await fetch(url, { cache: 'no-cache' })

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`)
    }

    return res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getProducts

