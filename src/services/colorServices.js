import axiosWithAuth from '../helpers/axiosWithAuth';

const editColorService = (editColor) => {
    const { id } = editColor;
    axiosWithAuth()
      .put(`api/colors/${id}`, editColor)
}
const deleteColorService = (colorToDelete) => {
    axiosWithAuth()
      .delete(`api/colors/${colorToDelete}`)
}

export { editColorService, deleteColorService };