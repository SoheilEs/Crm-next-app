import HomePage from "@/components/templates/HomePage"
import Customer from "@/models/Customer"
import connectDB from "@/utils/connectDB"

export default function index({customer}) {
  return (<HomePage customers={customer} />)
}

export async function getServerSideProps(){
  try{
    await connectDB()
    const res = await Customer.find()
    const customer = JSON.parse(JSON.stringify(res))
    return{
      props:{customer}
    }
  }catch(err){
    return{
      notFound:true
    }
  }
}
