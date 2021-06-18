import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (setColors) => {
    console.log("Hit fetchColorService");
    axiosWithAuth()
    .get("/api/colors")
    .then(res=> {
      setColors(res.data)
    })
    .catch(err=> {
      console.log(err);
    })
};

export default fetchColorService;