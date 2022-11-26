import {NextApiRequest,NextApiResponse} from 'next'
// import { IncomingMessage,ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (request:NextApiRequest ,response: NextApiResponse) => {
const db = new DB()
const hola = await db.getAll()
const length:number = await hola.length

response.status(200).json({data:hola,length:length})
response.end({hola:length})
}

export default allAvos
