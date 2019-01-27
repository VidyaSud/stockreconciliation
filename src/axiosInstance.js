import axios from 'axios'

const instance=axios.create({
    baseURL: 'https://react-my-burger-5f686.firebaseio.com/'
});

export default instance;