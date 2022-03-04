import { Hono } from 'hono'
//import { bodyParse } from 'hono/src/middleware/body-parse'
const app = new Hono()
const { StorageArea } =require( './kv')
const storage = new StorageArea()
//const tgph = require('./it/th')


    
    //app.use('/', bodyParse())
 //var re = await c.json()
 // await storage.put("J",c)
B = {
    method: "sendmessage",
    chat_id: 1236040571,
   //caption: c,
   // photo: "https://o8.o6.workers.dev/7K-01-29",
    reply_markup: {
        inline_keyboard: [
            [{
                "text": "▶️",
                "switch_inline_query_current_chat": ""
            }, {
                "text": "➖",
                "switch_inline_query_current_chat": "-"
            }]
        ]
    }
}
  app.post('/x', (c) => c.json(B))

      app.post('/', async (c) => {
 // B.caption = c.req.parsedBody||"00"
try{
B.text = await c.req.json()

//await storage.put("J",Date.now())

} 
catch (err){
B.text = err.stack
}
          return c.json(B)
          
  
})
  

app.get('/:name', async (c) => {
    const name = c.req.param('name')
   //await tgph(["50.4825,30.4887", "FEEE FUUU", "https://i.ibb.co/whfQZbG/file-193.jpg"])

  
  
               const image = await fetch(`https://11t.netlify.app/https%3A%2F%2Ftelegra.ph%2F${name}`)

            const {
                readable,
                writable
            } = new TransformStream()
            image.body.pipeTo(writable)
            const r = new Response(readable, image)
            //r.headers.set('Cache-Control', 'max-age=0')
            return r
  
})
app.fire()
