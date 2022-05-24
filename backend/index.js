// require('dotenv').config();
// const express = require("express");
// const bodyparser = require("body-parser");
// const cors = require("cors");
// const app = express();
// const mongoose = require('mongoose');
// const userModel = require('./model/users')
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken")


// app.use(cors());
// app.use(bodyparser.json());

// // connect database
// mongoose.connect(process.env.mongodburl, {
//     useNewUrlParser: true
//   })
//   .then(() => console.log('MongoDb connected'))
//   .catch(err => console.log(err));

// //router path
// const routes = require("./router/router");
// //const controllers = require("./controller/controller")
// app.use("/api", routes);




// app.post('/api', async (req,res)=>{
//   console.log(req.body,'postdata');

//   const chkdataexit = await userModel.findOne({$or:[{uemail:req.body.email},{upassword:req.body.password}] })
// if(chkdataexit){
//   if(chkdataexit.uemail===req.body.email)
//     res.send({
//       msg:"Така електнонна пошта вже зареєстрована"
// })
//   }else{
//     const data = new userModel({
//       uname:req.body.name,
//       uemail:req.body.email,
//       upassword:req.body.password
//     }
// );
//     data.save((err,result)=>{
//       if(err){
//         console.log('create db failed',err);
//       }else{
//         res.send({
//           msg:'data created',
//           data:result 
//       });
//     }
//   })
// }
// })

// app.get('/api', async (req,res)=>{
//   console.log('getdata');
//   const data =await userModel.find();

//   if(data){
//     res.send({
//       msg:"all user data",
//             result:data
//         });
//   }else{
//     res.send({
//       msg:"No data"
//   });
//   }
// })

// app.get('/:id',async (req,res)=>{
//   console.log(req.param.id,'ids');
//   if(req.params.id){
//     const chkid = mongoose.isValidObjectId(req.params.id);
//         if(chkid===true){
//             const iddata = await userModel.findById({_id:req.params.id});
//             if(iddata==null){
//                 res.send({
//                     msg:'single data not data',
//                     result:iddata
//                 })
//             }
//             else{
//                 res.send({
//                     msg:"single data ",
//                     result:iddata
//                 });
//               }} else{
//                   res.send({
//                       msg:"invalid user id"
//                   })
//               }
//   }
// })
// app.delete('/:id',async (req,res)=>{
   
//   console.log('remove data',req.params.id);
  
//   const chkvalidid = mongoose.isValidObjectId(req.params.id);
//   if(chkvalidid==true)
//   {
//       const iddata = await userModel.remove({_id:req.params.id});
//       if(iddata==null)
//       {
//           res.send({
//               msg:"data not found"
//           });
//       }
//       else
//       {
//           res.send({
//               msg:"data remove"
//           });
//       }
//   }else
//   {
//       res.send({
//           msg:"invalid id please enter valid id"
//       });
//   }


// });app.put('/:id',async (req,res)=>{
//   console.log(req.params.id)
//   const updatedata = await userModel.updateOne({_id:req.params.id},{$set:{uemail:req.body.email}});
  
//   if(updatedata)
//   {
//       res.send({ 
//           msg:"data updated"
//       });
//   }

// });



// //listen server
// const PORT = process.env.PORT | 3000;
// app.listen(PORT, ()=>{
//   console.log(`server running ... ${PORT}`)
// })



