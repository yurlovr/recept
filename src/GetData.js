
export default function getData(id) {
    try {
        // const stringData = JSON.stringify(data);
        let dataString = localStorage.getItem(id);
        return JSON.parse(dataString);
       // console.log(data);
       //  return ;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}