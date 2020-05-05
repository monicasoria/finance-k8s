import axios from 'axios'

export default {
  namespaced: true,

  actions: {
    uploadFile(file) {
      if (file) {
        let formData = new FormData();
        formData.append("file", file);
        axios
            .post('/api/kickstarter/upload', formData)
            .then(response => {
                console.log("Success!");
                console.log({ response });
            })
            .catch(error => {
                console.log({ error });
            });
    } else {
        console.log("There are no files.");
    }
    }
  },
}