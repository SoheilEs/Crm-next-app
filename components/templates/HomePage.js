import CustomerList from "../modules/CustomerList";

export default function HomePage({customers}) {
  return (
    <div className="home-container">
        {customers.map(customer=>(
            <CustomerList key={customer._id} customer={customer} />
        ))}
    </div>
  )
}
