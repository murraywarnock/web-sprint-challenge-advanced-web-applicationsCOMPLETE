import axiosWithAuth from '../helpers/axiosWithAuth';

const editColorService = (editColor) => {
    const { id } = editColor;
    axiosWithAuth()
      .put(`api/colors/${id}`, editColor)
      .then(res=>{console.log("Response from saveEdit API call: ", res)});
}

export { editColorService };