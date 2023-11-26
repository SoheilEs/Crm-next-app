import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";
export default async function handler(req, res){
    const {customerId} = req.query
    try {
        await connectDB();
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .json({ status: "Error", message: "Fail to connecting DB..." });
        return;
      }
    if(req.method==="GET"){
        try {
        const customer = await Customer.findById({_id:customerId});
        res.status(200).json({
            status: "success",
            message: "Data sucessfully fetched from DB...",
            data:customer
          });
        } catch (err) {
          console.log(err);
          res
            .status(500)
            .json({ status: "Faild", message: "Error in fetching data..." });
        }
    }else if(req.method==="DELETE"){
        try {
              await Customer.findOneAndDelete({_id:customerId});
            res.status(200).json({
              status: "success",
              message: "Data sucessfully deleted from DB...",
            });
          } catch (err) {
            console.log(err);
            res
              .status(500)
              .json({ status: "Faild", message: "Error in deleting data..." });
          }
    }else if(req.method ==="PATCH"){
        const {data} = req.body
       
        try {
            const customer = await Customer.findById(customerId)
                    customer.firstname=data.firstname
                    customer.lastname=data.lastname
                    customer.email = data.email
                    customer.phone = data.phone,
                    customer.address = data.address
                    customer.postalCode = data.postalCode
                    customer.date = data.date,
                    customer.products = data.products,
                    customer.updatedAt =Date.now()
                    await customer.save()
            
            res.status(200).json({
                status: "success",
                message: "Data sucessfully updated from DB...",
                data:customer
              });
        } catch (err) {
              console.log(err);
              res
                .status(500)
                .json({ status: "Faild", message: "Error in updateing data..." });
            }

    }
    
    
}