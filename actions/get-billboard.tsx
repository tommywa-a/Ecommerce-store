import {Billboard} from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const res = await fetch(`${URL}/${id}`)
    if (!res.ok) {
      throw new Error(`Failed to fetch billboard: ${res.status} ${res.statusText}`)
    }
    return res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getBillboard