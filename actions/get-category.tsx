import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategory = async (id: string): Promise<Category> => {
	try {
		const res = await fetch(`${URL}/${id}`, { cache: 'no-cache' })

		if (!res.ok) {
			throw new Error(`Failed to fetch category: ${res.status} ${res.statusText}`)
		}

		return res.json()
	} catch (error) {
		console.error(error)
		throw error
	}
}

export default getCategory


