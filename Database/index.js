import express from 'express';
import mongoose from 'mongoose';
import { User } from './kitabishModel.js';
import cors from 'cors';
import { Book } from './bookModel.js';

const app=express();
app.use(cors())
app.use(express.json());

const connectDb=()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/kitabish');//toyota
        console.log("Database connection created !");
    
    }catch(error){
        console.log(error);
    }
}

app.get("/user",async(request,response)=>{ //
    try{
        const Allusers=await User.find();
        response.send({user:Allusers})
    }catch(error){
        response.send({message:'something went wrong'});
    }
})

app.get("/user/:username",async(request,response)=>{ //
    try{
        const user=await User.findOne({username:request.params.username});
        if(user==null){
            response.send({message:"Sorry! user not found"});
        }
        else{
            response.send({User:user});
        }
    }catch(error){
        response.send({message:'something went wrong'});
    }
})

app.delete("/user/:username",async(request,response)=>{ //
    try{
        await User.deleteOne({username:request.params.username});
        response.send({message:"Deleted Successfull"})
    }catch(error){
        response.send({message:'something went wrong'});
    }
})

app.get("/book",async(request,response)=>{ //
    try{
        const Allbooks=await Book.find();
        response.send({book:Allbooks})
    }catch(error){
        response.send({message:'something went wrong'});
    }
})

app.post("/user",async(request,response)=>{
    try{
        const reqData=request.body;
        const user=new User(reqData);
        await user.save();
        response.send({message:'User inserted'});

    }catch(error){
        response.send({message:'something went wrong'});

    }
})

app.post("/book",async(request,response)=>{
    try{
        const reqData=request.body;
        const book=new Book(reqData);
        await book.save();
        response.send({message:'Book inserted'});

    }catch(error){
        response.send({message:'something went wrong'});

    }
})

app.put("/user/:username",async(request,response)=>{ //
    try{
        await User.updateOne({username:request.params.username},request.body);
        response.send({message:"Update Successfull"})
    }catch(error){
        response.send({message:'something went wrong'});
    }
})

app.listen(5900,()=>{
    console.log("Server has started on 5900");
    connectDb();
})