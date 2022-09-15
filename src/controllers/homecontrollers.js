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

export {getListProd};
