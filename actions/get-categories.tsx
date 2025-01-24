import {Category} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL, { cache: 'no-cache' })

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`)
    }

    return res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getCategories
