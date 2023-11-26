import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "Error", message: "Fail to connecting DB..." });
    return;
  }
  switch (req.method) {
    case "GET":
      res
        .status(400)
        .json({ status: "success", message: "data successfully geted..." });
      break;
    case "POST":
      const data = req.body.data;
      if (!data.firstname || !data.lastname || !data.email)
        return res
          .status(400)
          .json({ status: "Faild", message: "Invalid data" });
      try {
        const customer = await Customer.create(data);
        res.status(201).json({
          status: "success",
          message: "Data sucessfully stored in DB...",
          data: customer,
        });
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .json({ status: "Faild", message: "Error in storing data..." });
      }
      break;
   
    default:
      return;
  }
}
