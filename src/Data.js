export const API_KEY='AIzaSyBZDvZmT1PFWHp4Gm73La2wzapWKIKdP1k';


export const value_converter=(value)=>{
        if(value>=1000000){
            return Math.floor(value/1000000) + "M"
        }
        else  if(value>=1000){
            return Math.floor(value/1000) + "K"
        }
        else return value;
}

export  const daysAgo=(dateString)=> {
    // Parse the input date string into a Date object
    const inputDate = new Date(dateString);
  
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = currentDate - inputDate;
  
    // Convert the difference to days (1000 ms * 60 sec * 60 min * 24 hours)
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInADay);
  
    return differenceInDays;
  }