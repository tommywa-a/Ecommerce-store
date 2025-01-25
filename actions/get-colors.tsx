import {Color} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch(URL, { cache: 'no-cache' });

    if (!res.ok) {
      throw new Error(`Failed to fetch colors: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getColors
