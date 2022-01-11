 const db=require('../db/db')
module.exports={
  getStaff: async (req, res, next) => {
        const results = await db.exec("getStaff")
        if (!results){
          throw new HttpException(500, "Something went wrong");
        }
        res.status(201).send(results.recordsets[0]);
        console.log(results.recordsets[0]);
  }
}