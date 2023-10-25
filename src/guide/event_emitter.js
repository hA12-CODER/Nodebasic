function main(req, res, db){

    const EventEmitter = require('events');

    const eventEmitter = new EventEmitter();

//     eventEmitter.on('harsh', () => {
//     console.log("event is triggered 1 .");
// })
    
// eventEmitter.setMaxListeners(20);

//     for (var i=1 ; i <= 15 ; i++)
// {
//     eventEmitter.on('harsh',()=> {
//         console.log("event Triggered 3");
//     })
// }

//      eventEmitter.emit('harsh');


//      console.log(eventEmitter.getMaxListeners());
//       // res.send("eventEmitter.......");

//     // .Onceevent called one time only.filter(item => item)

    eventEmitter.once('demo', () => {

     console.log('event.once is triggered');

    })

    eventEmitter.emit('demo');


    // eventEmitter('demo');
    // evnetEmitter('demo');


    eventEmitter.on("calculate", (a,b)=> {
        console.log(a-b);
    });

     eventEmitter.on("calculate", (a,b)=> {
        console.log(a+b);
    });

    eventEmitter.on("calculate", (a,b)=>{
        console.log(a*b);
    } )

    eventEmitter.emit("calculate",5,2);
    






    //_________________________________


    const  x = ()=>
    {
        console.log("on");
    };

     const y = ()=>
    {
        console.log("OFF");
    };


    
    eventEmitter.on("onOFF",x);
    eventEmitter.on("onOFF",x);
    eventEmitter.on("onOFF",x); //it will happen because eventEmitter is on .
    eventEmitter.emit("onOFF"); 
    eventEmitter.removeAllListeners("onOFF",y) ; // make it off all on event 
    eventEmitter.on("onOFF",y);
    eventEmitter.on("onOFF",y);
    eventEmitter.on("onOFF",y);
    eventEmitter.on("onOFF",y);

    eventEmitter.off("onOFF",y); //eventEmitter is off 
    //eventEmitter.emit("onOFF");// it will happen because eventEmitter is off above line,--

      res.send("eventEmitter");

}

module.exports={
 main:main
}