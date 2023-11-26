import { model,models,Schema } from "mongoose";

const customerSchema = new Schema({
    firstname:{
        type: String,
        require: true,
        minLength:1,
    },
    lastname:{
        type:String,
        require: true,
        minLength:1,
    },
    email:{
        type:String,
        require:true,
        minLength:1,
    },
    phone: String,
    address: String,
    postalCode:Number,
    date: Date,
    products:{
        type:Array,
        default:[]
    },
    createdAt:{
        type: Date,
        default:() => Date.now(), 
        immutable: true,
    },
    updatedAt:{
        type: Date,
        default: () => Date.now()
    }
});

const Customer = models.Customer || model("Customer",customerSchema)

export default Customer;