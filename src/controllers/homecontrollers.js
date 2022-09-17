import db from '../db.js'
import { listProducts } from '../listprodutcs.js';


async function getListProd(req, res){
  
    try{
      let prods = await  db.collection('listProducts').find().toArray();
      if(prods.length === 0){
        await db.collection('listProducts').insertMany(listProducts);
        prods = await db.collection('listProducts').find().toArray();
      }else{
          await db.collection('listProducts').deleteMany({});
          await db.collection('listProducts').insertMany(listProducts);
        prods =  await db.collection('listProducts').find().toArray();
      }
      return res.send(prods);
      }catch(error){
          res.send(error);
      }
  }

  async function getproductsSelecteds (req, res){
    const user = res.locals.user;
    console.log(user)
    try{
      const selecteds = await db.collection('productsSelected').find({userId:user._id}).toArray();
      return res.send(selecteds);
    }catch(error){
      return res.send(error);
    }
    
  }


async function postProductBuying(req, res){
const {_id, img, name, description} = req.body;

const user = res.locals.user;


const objSelected = {
  idProduct:_id,
  img,
  name,
  description,
  userId: user._id
}

try{
  const selected = await db.collection('productsSelected').insertOne(objSelected);
  const selecteds = await db.collection('productsSelected').find({userId:user._id}).toArray();
  console.log(selecteds);
  return res.status(201).send(selecteds);
}catch(error){
return res.send(error)
}
}

export {getListProd, postProductBuying, getproductsSelecteds}
