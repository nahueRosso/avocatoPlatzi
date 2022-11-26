
import { NextApiRequest,NextApiResponse } from "next";
import DB from "@database";

const dynamicApi = async (req: NextApiRequest, res: NextApiResponse) => {
  
   const db = new DB()

   const id = req.query.id

   const IDApi = await db.getById(id as string)

    res.status(200).json({data:IDApi})
}
export default dynamicApi 
