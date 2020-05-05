const Mustache = require('mustache')
var template=`
    <head>
    <style>
    .container{
        display: grid;
        grid-template-areas: 
                    
                   "b c c"
                   "b c c"
                   
                    "b a a";
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-columns: 1fr 2fr 1fr;
         
       }
       .main{
         grid-area: c;
       }
       .questions{
         min-height:100vh;
         grid-area: b;
       }
       .summary{
         grid-area: a;
       }
       div{
       
         border: 1px solid black;
         display:inline-block;
         width: 100%;
       }
       li{
        display:inline;
       }
       .timeStamp{
         font-size:11px;
         color:grey;
         
       }
    
    </style>
    </head>
  

    {{#sections}}
    <h1>Video Note</h1>
    <div class="container">
        <div class="questions">
        Questions:
        <ul>
            {{#questions}}
            <br>
            <span class="time-stamp">--{{timeStamp}}</span>
            <li>
                {{text}}</li>
              
            {{/questions}}
        </ul>
        </div>
       
        <div class="main">
        Informations:
            <ol>
              {{#informations}}
        
              <span class="time-stamp">--{{timeStamp}}</span>
              <li>{{text}}</li>
              <br><br><br>
              {{/informations}}
            </ol>
        </div>
      
        <div class="summary">
        summary
       
         </div>
    </div>   
    {{/sections}}


`
var viewObjectLookLike={
    sections:[
        {questions:[{text:"hello",timeStamp:1}],
        informations : {}},
        {questions:[{text:"hi",timeStamp:1}],
        informations : {}},
        {questions:[{text:"hello",timeStamp:1}],
        informations : {}},
        {questions:[{text:"hello",timeStamp:1}],
        informations : {}},
        {questions:[{text:"hello",timeStamp:1}],
        informations : {}}
    
    ]
    
}
function Render(view){
    return Mustache.render(template,view);

}
module.exports=Render;