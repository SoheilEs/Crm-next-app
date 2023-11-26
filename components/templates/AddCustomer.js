import { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemList from "../modules/ItemList";

export default function AddCustomer() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });
  const router = useRouter();
  const changeHandler = (e) => {
    
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const cancelHandler = () => {
    setData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };
  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    const result = await res.json();
  
    if (result.status === "success") router.push("/")
    if (result.status === "Faild") toast(result.message,{ 
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    type:"error"
  });
    
      
  };
  const mouseEnterHandler = (e) => {
    if (e.target.name === "cancel") {
      e.target.innerText = "X";
    } else if (e.target.name === "save") {
      e.target.innerText = "✓";
    }
  };
  const mouseOutHandler = (e) => {
    if (e.target.name === "cancel") {
      e.target.innerText = "Cancel";
    } else if (e.target.name === "save") {
      e.target.innerText = "Save";
    }
  };
  

  return (
    <div className="addCustomer-container">
      <h3 className="add-custome-h">Add New Summit Customer</h3>
      <Form name="firstname" label="Firstname" type="text" onChange={changeHandler} />
      <Form name="lastname" label="Lastname" type="text" onChange={changeHandler}/>
      <Form name="email" label="Email" type="email" onChange={changeHandler}/>
      <Form name="phone" label="Phone" type="text" onChange={changeHandler}/>
      <Form name="address" label="Address" type="text" onChange={changeHandler}/>
      <Form name="postalCode" label="Postalcode" type="number" onChange={changeHandler}/>
      <Form name="date" label="Date" type="date" onChange={changeHandler}/>
      <ItemList  data={data} setData={setData} />

      <div className="customer-page__buttons">
        <button
          className="first"
          name="cancel"
          onClick={cancelHandler}
          onMouseOver={mouseEnterHandler}
          onMouseOut={mouseOutHandler}
        >
          Cancel
        </button>
        <button
          className="second"
          name="save"
          onClick={saveHandler}
          onMouseOver={mouseEnterHandler}
          onMouseOut={mouseOutHandler}
        >
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
