import {axiosInstance} from "@/shared/services/axios.js";


export const getData = async () => {
    await axiosInstance.get("something-else");
}
