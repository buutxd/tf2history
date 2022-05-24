import React from 'react';
import './css/style.css';
import background from './css/background.module.css';
import estilo from './css/style.module.css';
import estilo2 from './css/style2.module.css';
import estilo3 from './css/style3.module.css';
import './css/title.css'
import second from './css/img/medal-second-40px.png';
import third from './css/img/medal-third-40px.png';



function App() {
  return (
    <div className="App">
<div className={background.bgImage}>

<div className="shade"></div>
<h1 className="title-site">TF2 Comp. history</h1> 
<div className="bg-text">
  <div className="container">
    <div className="hidden-text">
    <div className="container-line"></div>
    <div className="timeline">

         
      
          <h3 className="date">20 de maio, 2021</h3>
      <ul>
        <li>    
          <div className="timeline-content">
            <h1>FBTF S18 <span>6s</span></h1>
            <p>
             
              <span style={{marginLeft:'0px',color:'white'}}>INVITE <span style={{marginLeft:'7px'}}></span>- </span><span style={{fontSize:'8px'}}>{'\   '} {/* CARáCTER INVISIVEL NÃO APAGUE  */}
             </span> <span style={{marginLeft:'0px', color:'white'}}>Taste the secret</span> {'\  '}<span style={{marginLeft:'7px', color:'white'}}>ACESSO -</span> {'\ '}
             <span style={{marginLeft:'6px',color:'white'}}> Dream hunter</span>
             
             </p>
             
            
             
             
             <div className="open-inside-block">
             <span style={{marginLeft:'9px',color:'white'}}>{'\   '}ABERTA - {'\ '} <div className='aberta-pos'>Tejota bombs</div></span>
             </div>

   
          <div className="medal"></div>
          <div className="medal2"></div>  
          <div className="medal3"></div>  
          <div className="medal4"></div> 
          
          <div className="hidden-inside">
          
          
          <div className="central-inside-block">
             <span style={{marginLeft:'5px',color:'white' ,fontSize:'14px'}}>CENTRAL -{'\ '}<div className='central-pos'> Holando solutions </div></span>
             </div>
          </div>     
                     
          </div>
          {/* medalha segundo lugar invite  */}
          <div className='invite-appear'>
          <img src={second} className='watson'></img>
            </div> 
            <div className='second-text'>Taste the second</div>  
          {/* medalha terceiro lugar invite  */}
            <div className='invite-appear3'>
          <img src={third} className='watson'></img>
            </div> 
            <div className='third-text'>Taste the third</div>  
                {/* medalha segundo lugar acess  */}
            <div className='acesso-second'>
          <img src={second} ></img>
            </div> 
            <div className='second-acess-text'>Dream second</div>  
          {/* medalha terceiro lugar acess */}
            <div className='acesso-third'>
          <img src={third} className='watson'></img>
            </div> 
            <div className='third-acess-text'>Dream third</div>  
          {/* medalha seg lugar cent */}
            <div className='central-second'>
          <img src={second} ></img>
            </div> 
            <div className='second-central-text'>Dream second</div>
          {/* medalha third lugar cent */}
            <div className='central-third'>
          <img src={third} ></img>
            </div> 
            <div className='third-central-text'>Dream third</div>
          {/* medalha second lugar open */}
            <div className='open-second'>
          <img src={second} ></img>
            </div> 
            <div className='second-open-text'>Tejota second</div>
            {/* medalha third lugar cent */}
            <div className='open-third'>
          <img src={third} ></img>
            </div> 
            <div className='third-open-text'>Dream third</div>
            

        </li>
      </ul>
    </div>
   
  </div>
  </div>
  
  
 <h1 style={{fontSize:'50px'}}></h1>
    
  </div>
  
      
  
  <div className={estilo.bgImage}>
  <div className={estilo.shade}></div>
  <div className={estilo.container}>
  <div className={estilo.hiddenText}>
  <div className={estilo.containerLine}></div>
    <div className={estilo.timeline}>
      
      <ul>
        <li>
          <div className={estilo.timelineContent}>
            <h3 className={estilo.date}>20 de maio, 2021</h3>
          <h1>FBTF S18 <span>6s</span></h1>
            <p>
             
              <span style={{marginLeft:'0px',color:'white'}}>INVITE <span style={{marginLeft:'7px'}}></span>- </span><span style={{fontSize:'8px'}}>{'\   '} {/* CARáCTER INVISIVEL NÃO APAGUE  */}
             </span> <span style={{marginLeft:'0px', color:'white'}}>Taste the secret</span> {'\  '}<span style={{marginLeft:'7px', color:'white'}}>ACESSO -</span> {'\ '}
             <span style={{marginLeft:'6px',color:'white'}}> Dream hunter</span>
             
             </p>
             
            
             
             
             <div className={estilo.openInsideBlock}>
             <span style={{marginLeft:'9px',color:'white'}}>{'\   '}ABERTA - {'\ '} <div className={estilo.abertaPos}>Tejota bombs</div></span>
             </div>


          <div className={estilo.medal}></div>
          <div className={estilo.medal2}></div>  
          <div className={estilo.medal3}></div>  
          <div className={estilo.medal4}></div> 
          
          <div className={estilo.hiddenInside}>
          
          
          <div className={estilo.centralInsideBlock}>
             <span style={{marginLeft:'5px',color:'white' ,fontSize:'14px'}}>CENTRAL -{'\ '}<div className={estilo.centralPos}> Holando solutions </div></span>
             </div>
          </div>    
          
          
        
          </div>
         {/* medalha segundo lugar invite  */}
         <div className={estilo.inviteAppear}>
          <img src={second} className='watson'></img>
            </div> 
            <div className={estilo.secondText}>Taste the second</div>  
          {/* medalha terceiro lugar invite  */}
            <div className={estilo.inviteAppear3}>
          <img src={third} className='watson'></img>
            </div> 
            <div className={estilo.thirdText}>Taste the third</div>  
                {/* medalha segundo lugar acess  */}
            <div className={estilo.acessoSecond}>
          <img src={second} ></img>
            </div> 
            <div className={estilo.secondAcessText}>Dream second</div>  
          {/* medalha terceiro lugar acess */}
            <div className={estilo.acessoThird}>
          <img src={third} className='watson'></img>
            </div> 
            <div className={estilo.thirdAcessText}>Dream third</div>  
          {/* medalha seg lugar cent */}
            <div className={estilo.centralSecond}>
          <img src={second} ></img>
            </div> 
            <div className={estilo.secondCentralText}>Dream second</div>
          {/* medalha third lugar cent */}
            <div className={estilo.centralThird}>
          <img src={third} ></img>
            </div> 
            <div className={estilo.thirdCentralText}>Dream third</div>
          {/* medalha second lugar open */}
            <div className={estilo.openSecond}>
          <img src={second} ></img>
            </div> 
            <div className={estilo.secondOpenText}>Tejota second</div>
            {/* medalha third lugar cent */}
            <div className={estilo.openThird}>
          <img src={third} ></img>
            </div> 
            <div className={estilo.thirdOpenText}>Dream third</div>
            
        
        </li>
      </ul>
    </div>

  </div>
    </div>
 <h1 style={{fontSize:'50px'}}></h1>
 
 
  

  
 <div className={estilo2.bgImage}>
  <div className={estilo2.shade}></div>
  <div className={estilo2.container}>
  <div className={estilo2.hiddenText}>
  <div className={estilo2.containerLine}></div>
    <div className={estilo2.timeline}>
      
      <ul>
        <li>
          <div className={estilo2.timelineContent}>
            <h3 className={estilo2.date}>20 de maio, 2021</h3>
          <h1>FBTF S18 <span>6s</span></h1>
            <p>
             
              <span style={{marginLeft:'0px',color:'white'}}>INVITE <span style={{marginLeft:'7px'}}></span>- </span><span style={{fontSize:'8px'}}>{'\   '} {/* CARáCTER INVISIVEL NÃO APAGUE  */}
             </span> <span style={{marginLeft:'0px', color:'white'}}>Taste the secret</span> {'\  '}<span style={{marginLeft:'7px', color:'white'}}>ACESSO -</span> {'\ '}
             <span style={{marginLeft:'6px',color:'white'}}> Dream hunter</span>
             
             </p>
             
            
             
             
             <div className={estilo2.openInsideBlock}>
             <span style={{marginLeft:'9px',color:'white'}}>{'\   '}ABERTA - {'\ '} <div className={estilo2.abertaPos}>Tejota bombs</div></span>
             </div>


          <div className={estilo2.medal}></div>
          <div className={estilo2.medal2}></div>  
          <div className={estilo2.medal3}></div>  
          <div className={estilo2.medal4}></div> 
          
          <div className={estilo2.hiddenInside}>
          
          
          <div className={estilo2.centralInsideBlock}>
             <span style={{marginLeft:'5px',color:'white' ,fontSize:'14px'}}>CENTRAL -{'\ '}<div className={estilo2.centralPos}> Holando solutions </div></span>
             </div>
          </div>    
          
          
        
          </div>
         {/* medalha segundo lugar invite  */}
         <div className={estilo2.inviteAppear}>
          <img src={second} className='watson'></img>
            </div> 
            <div className={estilo2.secondText}>Taste the second</div>  
          {/* medalha terceiro lugar invite  */}
            <div className={estilo2.inviteAppear3}>
          <img src={third} className='watson'></img>
            </div> 
            <div className={estilo2.thirdText}>Taste the third</div>  
                {/* medalha segundo lugar acess  */}
            <div className={estilo2.acessoSecond}>
          <img src={second} ></img>
            </div> 
            <div className={estilo2.secondAcessText}>Dream second</div>  
          {/* medalha terceiro lugar acess */}
            <div className={estilo2.acessoThird}>
          <img src={third} className='watson'></img>
            </div> 
            <div className={estilo2.thirdAcessText}>Dream third</div>  
          {/* medalha seg lugar cent */}
            <div className={estilo2.centralSecond}>
          <img src={second} ></img>
            </div> 
            <div className={estilo2.secondCentralText}>Dream second</div>
          {/* medalha third lugar cent */}
            <div className={estilo2.centralThird}>
          <img src={third} ></img>
            </div> 
            <div className={estilo2.thirdCentralText}>Dream third</div>
          {/* medalha second lugar open */}
            <div className={estilo2.openSecond}>
          <img src={second} ></img>
            </div> 
            <div className={estilo2.secondOpenText}>Tejota second</div>
            {/* medalha third lugar cent */}
            <div className={estilo2.openThird}>
          <img src={third} ></img>
            </div> 
            <div className={estilo2.thirdOpenText}>Dream third</div>
            
        
        </li>
      </ul>
    </div>

  </div>
    </div>
 <h1 style={{fontSize:'50px'}}></h1>
 
 </div>



 <div className={estilo3.bgImage}>
  <div className={estilo3.shade}></div>
  <div className={estilo3.container}>
  <div className={estilo3.hiddenText}>
  <div className={estilo3.containerLine}></div>
    <div className={estilo3.timeline}>
      
      <ul>
        <li>
          <div className={estilo3.timelineContent}>
            <h3 className={estilo3.date}>20 de maio, 2021</h3>
          <h1>FBTF S18 <span>6s</span></h1>
            <p>
             
              <span style={{marginLeft:'0px',color:'white'}}>INVITE <span style={{marginLeft:'7px'}}></span>- </span><span style={{fontSize:'8px'}}>{'\   '} {/* CARáCTER INVISIVEL NÃO APAGUE  */}
             </span> <span style={{marginLeft:'0px', color:'white'}}>Taste the secret</span> {'\  '}<span style={{marginLeft:'7px', color:'white'}}>ACESSO -</span> {'\ '}
             <span style={{marginLeft:'6px',color:'white'}}> Dream hunter</span>
             
             </p>
             
            
             
             
             <div className={estilo3.openInsideBlock}>
             <span style={{marginLeft:'9px',color:'white'}}>{'\   '}ABERTA - {'\ '} <div className={estilo3.abertaPos}>Tejota bombs</div></span>
             </div>


          <div className={estilo3.medal}></div>
          <div className={estilo3.medal2}></div>  
          <div className={estilo3.medal3}></div>  
          <div className={estilo3.medal4}></div> 
          
          <div className={estilo3.hiddenInside}>
          
          
          <div className={estilo3.centralInsideBlock}>
             <span style={{marginLeft:'5px',color:'white' ,fontSize:'14px'}}>CENTRAL -{'\ '}<div className={estilo3.centralPos}> Holando solutions </div></span>
             </div>
          </div>    
          
          
        
          </div>
         {/* medalha segundo lugar invite  */}
         <div className={estilo3.inviteAppear}>
          <img src={second} className='watson'></img>
            </div> 
            <div className={estilo3.secondText}>Taste the second</div>  
          {/* medalha terceiro lugar invite  */}
            <div className={estilo3.inviteAppear3}>
          <img src={third} className='watson'></img>
            </div> 
            <div className={estilo3.thirdText}>Taste the third</div>  
                {/* medalha segundo lugar acess  */}
            <div className={estilo3.acessoSecond}>
          <img src={second} ></img>
            </div> 
            <div className={estilo3.secondAcessText}>Dream second</div>  
          {/* medalha terceiro lugar acess */}
            <div className={estilo3.acessoThird}>
          <img src={third} className='watson'></img>
            </div> 
            <div className={estilo3.thirdAcessText}>Dream third</div>  
          {/* medalha seg lugar cent */}
            <div className={estilo3.centralSecond}>
          <img src={second} ></img>
            </div> 
            <div className={estilo3.secondCentralText}>Dream second</div>
          {/* medalha third lugar cent */}
            <div className={estilo3.centralThird}>
          <img src={third} ></img>
            </div> 
            <div className={estilo3.thirdCentralText}>Dream third</div>
          {/* medalha second lugar open */}
            <div className={estilo3.openSecond}>
          <img src={second} ></img>
            </div> 
            <div className={estilo3.secondOpenText}>Tejota second</div>
            {/* medalha third lugar cent */}
            <div className={estilo3.openThird}>
          <img src={third} ></img>
            </div> 
            <div className={estilo3.thirdOpenText}>Dream third</div>
            
        
        </li>
      </ul>
    </div>

  </div>
    </div>
 <h1 style={{fontSize:'50px'}}></h1>
 
 </div>

{/* BACKGROUND DO ESTILO.BG-IMAGE */}
 </div>
 </div>

  

  

  


 
   
 
 
 
  </div>
  );
}

export default App;
