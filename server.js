const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); //다른도메인도 허락해줄게
app.get('/', (req,res)=>{
    res.json({
        success:true,
    });
})

app.listen(3000,()=>{
    console.log('sever start port:3000');
})