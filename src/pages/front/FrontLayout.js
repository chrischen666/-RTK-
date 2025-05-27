import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import MessageToast from '../../components/MessageToast';


function FrontLayout() {
  const [cartData, setCartData] = useState({});

  const getCart = async () => {
    try {
      const res = await axios.get(
        `/v2/api/${process.env.REACT_APP_API_PATH}/cart`,
      );
      console.log('購物車內容:', res);
      setCartData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCart();
  }, [])

  return (
    <>  
      <Navbar cartData={cartData} />
      <MessageToast/>
      <Outlet context={{ getCart, cartData }}></Outlet>
      <div className='bg-dark'>
        <div className='container'>
          <div className='d-flex align-items-center justify-content-between text-white py-4'>
            <p className='mb-0'>© 2020 LOGO All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontLayout;