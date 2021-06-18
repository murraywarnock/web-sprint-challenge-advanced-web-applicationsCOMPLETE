import axiosWithAuth from '../helpers/axiosWithAuth';

const editColorService = (editColor) => {
    const { id } = editColor;
    axiosWithAuth()
      .put(`api/colors/${id}`, editColor)
    //   .then(res=>{console.log("Response from editColorService API call: ", res)});
}
const deleteColorService = (colorToDelete) => {
    axiosWithAuth()
      .delete(`api/colors/${colorToDelete}`)
    //   .then(res=>{console.log("Response from deleteColorService API call: ", res)});
}

export { editColorService, deleteColorService };