import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading}= useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            //console.log('is instructor response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;