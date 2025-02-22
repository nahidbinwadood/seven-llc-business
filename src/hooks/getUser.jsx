import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"


function getUser() {

    const axiosSecure = useAxiosSecure()
    const {setCurrentUser} = useAuth()

   useEffect(() => {
    (async () => {
        const res = axiosSecure.get('/api/users/data')
        setCurrentUser(res.data.data)
    })()
   },[])

}

export default getUser