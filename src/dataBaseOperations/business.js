import axios from '../axios/axios';

export const downloadColls = async e => {
   try {
      const res = await axios.get(`${e}/.json`);
      return res.data
   } catch (ex) {
      console.log(ex);
   }
}
export const deleteColl = async e => {
   try {
      await axios.delete(`${e}/.json`)
   } catch (ex) {
      console.log(ex)
   }
}
export const addColl = async e => {
   try {
      await axios.post(`${e.id}/.json`, e.form);
   }
   catch (ex) {
      console.log(ex)
   }
}
export const putColl = async e => {
   try {
      console.log(e)
      await axios.put(`${e.id}/.json`, e.form);
   }
   catch (ex) {
      console.log(ex)
   }
}
