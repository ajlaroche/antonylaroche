import axios from "axios";

export default {

    sendMessage: function(messageData){
        return axios.post("/api/contact", messageData);
    }
};