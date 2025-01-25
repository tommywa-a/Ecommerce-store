import { Product } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id: string): Promise<Product> => {
	try {
		const res = await fetch(`${URL}/${id}`, { cache: 'no-cache' })

		if (!res.ok) {
			throw new Error(`Failed to fetch product: ${res.status} ${res.statusText}`)
		}

		return res.json()
	} catch (error) {
		console.error(error)
		throw error
	}
}

export default getProduct

