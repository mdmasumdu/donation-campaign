
const getlocalstoarageitem =()=>{
      const savedid = localStorage.getItem('cart');

      if(savedid){
        return JSON.parse(savedid)
      }
      return []


}


const savetols = (id)=>{
const getls = getlocalstoarageitem();

const exist = getls.find(idx => idx ===id)

if(!exist){
    getls.push(id)

    const stringfied = JSON.stringify(getls)
    
    localStorage.setItem( 'cart',stringfied)
}




}








export {getlocalstoarageitem,savetols};