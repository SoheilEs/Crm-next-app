import { useRouter } from "next/router";
import { useState } from "react";
import Form from "../modules/Form";
import ItemList from "../modules/ItemList";
import moment from "moment";

export default function EditPage({customer,id}) {
    const date = customer.date ? moment(customer.date).utc().format("YYYY-MM-DD"):""
    const router = useRouter()
    const [form, setForm] = useState({
        firstname: customer.firstname,
        lastname: customer.lastname,
        email: customer.email,
        phone: customer.phone || "",
        address: customer.address||"",
        postalCode: customer.postalCode || "",
        date : date || "",
        products: customer.products ||"",

    })
    const changeHandler = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const saveHandler = async()=>{

        const res = await fetch(`/api/customer/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({data:form})
        })
        const result = await res.json()
        if(result.status==="success") router.push("/")
    }
    const cancelHandler = () =>{
        router.push("/")
    }
    console.log(form)
  return (
    <div className="editPage-container">
      <h3>Edit Customer : {form.firstname}</h3>
      <Form
        label="Firstname"
        name="firstname"
        type="text"
        value={form.firstname}
        onChange={changeHandler}
      />
      <Form
        label="Lastname"
        name="lastname"
        type="text"
        value={form.lastname}
        onChange={changeHandler}
      />
      <Form
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={changeHandler}
      />
      <Form
        label="Phone"
        name="phone"
        type="text"
        value={form.phone}
        onChange={changeHandler}
      />
      <Form
        label="Address"
        name="address"
        type="text"
        value={form.address}
        onChange={changeHandler}
      />
      <Form
        label="PostalCode"
        name="postalCode"
        type="number"
        value={form.postalCode}
        onChange={changeHandler}
      />
      <Form
        label="Date"
        name="date"
        type="date"
        value={form.date}
        onChange={changeHandler}
      />
      <ItemList data={form} setData={setForm}/>
      <div className="btnContainer">
        <button className="saveBtn" onClick={saveHandler}>Save</button>
        <button className="cancelBtn" onClick={cancelHandler}>Cancel</button>
      </div>
    </div>
  );
}
