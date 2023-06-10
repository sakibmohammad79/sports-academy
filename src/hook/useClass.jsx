import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useClass = () => {
    const {user, loading} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: classes = []} = useQuery({
        queryKey: ['class', user?.email],
        enabled : !loading && !!user?.email,
        queryFn: async () => {
            if(!loading && user?.email){
                const res = await axiosSecure(`/class?email=${user?.email}`)
            
            return res.data;
            }
            
        }

      })
      return [classes, refetch]
}
export default useClass;