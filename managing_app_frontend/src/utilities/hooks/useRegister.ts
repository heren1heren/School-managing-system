
import { useState } from 'react';
import api from '../../data/api';

export default function useUserRegister() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const register = async ({ username, password, email }: { username: string, password: string, email: string }) => {
        setLoading(true);
        setError(null);

        try {
            const res = await api.post(
                `/auth/register`,
                { username, password, email }
            );
            return res.data;
        } catch (err: any) {
            setError(err);
            throw err; // optional: let caller handle it too
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, error };
}
