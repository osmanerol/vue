import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://vue-axios-be169-default-rtdb.firebaseio.com'
})

instance.defaults.headers.common["Authorization"] = "osman_erol_auth_key"
instance.defaults.headers.get["Accepts"] = "application/json"

export default instance