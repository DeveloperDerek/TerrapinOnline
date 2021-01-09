import axios from "axios";

const login = async (response) => {
    axios({
        method: "POST",
        url: "http://localhost:8000/api/google/login",
        withCredentials : true,
        data: {tokenId: response}
    })
    .then((res) => {
        console.log(res)
    });
};

export { login };