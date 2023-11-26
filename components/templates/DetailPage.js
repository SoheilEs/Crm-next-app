import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
export default function DetailPage({customer}) {
    const router = useRouter()
    const deleteHandler =async () =>{
    
        const response = await fetch(`/api/customer/${customer._id}`,{
          method:"DELETE",
        }) 
        const result = await response.json()
        if(result.status ==="success") router.push("/");
      }
  return (
    <div className="detial-page__container">
        <h3>Customers's Detail</h3>
        <div className="customer-detail__main">
            <div className="customer-detail__item">
                <span>Firstname: </span>
                <p>{customer.firstname}</p>
            </div>
            <div className="customer-detail__item">
                <span>Lastname: </span>
                <p>{customer.lastname}</p>
            </div>
            <div className="customer-detail__item">
                <span>Email: </span>
                <p>{customer.email}</p>
            </div>
            <div className="customer-detail__item">
                <span>Phone: </span>
                <p>{customer.phone}</p>
            </div>
            <div className="customer-detail__item">
                <span>Address: </span>
                <p>{customer.address}</p>
            </div>
            <div className="customer-detail__item">
                <span>PostalCode: </span>
                <p>{customer.postalCode}</p>
            </div>
            <div className="customer-detail__item">
                <span>Date: </span>
                <p>{moment(customer.date).utc().format("YYYY-MM-DD")}</p>
            </div>
        </div>
        <div className="customer-detail__products">
            <p>Name</p>
            <p>Price</p>
            <p>Qty</p>
            {customer.products?.map((product,index)=>(
                <React.Fragment key={index}>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                    <span>{product.qty}</span>
                </React.Fragment>
            ))}
        </div>
        <div className="customer-detail__buttons">
            <p>Edit or Delete</p>
            <button onClick={deleteHandler}>Delete</button>
            <Link href={`/edit/${customer._id}`}>Edit</Link>
        </div>
    </div>
  )
}
