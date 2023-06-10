import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useClass = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: classes = []} = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://wolves-server.vercel.app/class?email=${user?.email}`, {headers: {
                authorization: `bearer ${token}`
            }})
            return res.json();
        }

      })
      return [classes, refetch]
}
export default useClass;