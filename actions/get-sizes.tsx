import {Size} from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
  try {
    const res = await fetch(URL, {cache: 'no-cache'})

    if (!res.ok) {
      throw new Error(`Failed to fetch sizes: ${res.status} ${res.statusText}`)
    }

    return res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getSizes
