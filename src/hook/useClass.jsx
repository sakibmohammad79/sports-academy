import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useClass = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: classes = []} = useQuery({
        queryKey: ['class', user?.email],
        // queryFn: async () => {
        //     const res = await fetch(`https://wolves-server.vercel.app/class?email=${user?.email}`, {headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // }
        queryFn: async () => {
            const res = await axiosSecure(`/class?email=${user?.email}`)
            
            return res.data;
        }

      })
      return [classes, refetch]
}
export default useClass;