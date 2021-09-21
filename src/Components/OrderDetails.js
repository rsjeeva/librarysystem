import React, {useEffect, useState} from "react";
import classes from "../UI/OrderDetails.module.css";


function OrderDetails(){

    // let[getuserdetail, setUserDetail] = useState([]);


    // console.log(getuserdetail);
    return <div className={classes.orderdetailstyle}>
        {/* {getuserdetail.map((i)=>{
            let x = i.bookDetails.length;
            // console.log(x,'x');
           return <li key={i.id} className={classes.userlist}>
               <div><span>User Name: </span>{i.Name.toUpperCase()}</div>
               {
                x?   
                   <div className={classes.bookliststyle}>{
                   i.bookDetails.map((item)=>{
                       return <li>
                           <div><span>Book Name: </span>{item.name}</div>
                       </li>
                   })
                    }
                   </div>
                   :
                   <div className={classes.bookliststyle}><span>Book Name: </span>No Book</div>
               }
           </li>
        })} */}
    </div>
}

export default OrderDetails;