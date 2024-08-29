import mongoose from "mongoose"

export const connectDB = async() =>{
    await mongoose.connect(
      "mongodb+srv://gowthami:abcd1234@cluster0.kkd89.mongodb.net/food-delivery-APP").then(()=> console.log("DB Connected")   
    );
}