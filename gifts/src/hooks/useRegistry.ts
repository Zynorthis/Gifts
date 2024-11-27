import { useEffect, useState } from "react";
import { Gift } from "../models";

export const useRegistry = () => {
    const giftRegistryPath = './giftRegistry.json';
    const [gifts, setGifts] = useState<Gift[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(giftRegistryPath);
                if (!response.ok) {
                    throw new Error(`Failed to fetch gift registry data: ${response.statusText}`);
                }
                const result: Gift[] = await response.json();
                setGifts(result);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An unknown error occurred')
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return { gifts, isLoading, error };
}
