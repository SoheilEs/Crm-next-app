import Link from "next/link"
import { useRouter } from "next/router"

export default function CustomerList({customer}) {
    const router = useRouter()
    const{_id,firstname, lastname, email} = customer
    const deleteHandler =async id =>{
      console.log(id)
      const response = await fetch(`/api/customer/${id}`,{
        method:"DELETE",
      }) 
      const result = await response.json()
      if(result.status ==="success") router.reload();
    }
  return (
    <div className="customer-list">
    <div className="name-section">
        <p>{firstname} {lastname}</p>
        <p>{email}</p>
    </div>
    <div className="link-container">
        <Link href={`/edit/${_id}`} className="edit-btn">Edit</Link>
        <Link href={`/customer/${_id}`} className="detail-btn">Detail</Link>
        <button onClick={()=>deleteHandler(_id)} className="delete-btn">Delete</button>
    </div>
    </div>
  )
}
