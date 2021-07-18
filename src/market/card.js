import React from 'react'
import './cards.css';

import kit1 from './kit1.png';
import kit2 from './kit2.png';
import kit3 from './kit3.png';
export default function Card() {
    return (
        <div className="cards">

            <div className="cards_items">
                
             <img src={kit1} alt="pic"></img>
                
                <div className="desc">
                    <div className="titles" >
                        <div className="name">name</div>
                    <div className="code">CODE NAME</div>
                    </div>

                    <div className="price">
                        <div className="pn">Price</div>
                        <div className="pval">$0.01</div>
                    </div>
                </div>
            </div>

            
            <div className="cards_items">
               
             <img src={kit2} alt="pic"></img>
                
                <div className="desc">
                <div className="titles" >
                        <div className="name">name</div>
                    <div className="code">CODE NAME</div>
                    </div>

                    <div className="price">
                        <div className="pn">Price</div>
                        <div className="pval">$0.01</div>
                    </div>
                </div>
            </div>

            
            <div className="cards_items">
               
             <img src={kit3} alt="pic"></img>
                <div className="desc">
                <div className="titles" >
                        <div className="name">name</div>
                    <div className="code">CODE NAME</div>
                    </div>

                    <div className="price">
                        <div className="pn">Price</div>
                        <div className="pval">$0.01</div>
                    </div>
                </div>
            </div>

            <div className="cards_items">
                
             <img src={kit1} alt="pic"></img>
                
                <div className="desc">
                <div className="titles" >
                        <div className="name">name</div>
                    <div className="code">CODE NAME</div>
                    </div>
                    <div className="price">
                        <div className="pn">Price</div>
                        <div className="pval">$0.01</div>
                    </div>
                </div>
            </div>

            
            <div className="cards_items">
               
             <img src={kit2} alt="pic"></img>
                
                <div className="desc">
                <div className="titles" >
                        <div className="name">name</div>
                    <div className="code">CODE NAME</div>
                    </div>

                    <div className="price">
                        <div className="pn">Price</div>
                        <div className="pval">$0.01</div>
                    </div>
                </div>
            </div>

            
            <div className="cards_items">
                
             <img src={kit3} alt="pic"></img>
                <div className="desc">
                <div className="titles" >
                        <div className="name">name</div>
                    <div className="code">CODE NAME</div>
                    </div>

                    <div className="price">
                        <div className="pn">Price</div>
                        <div className="pval">$0.01</div>
                    </div>
                </div>
            </div>
            </div>
    )
}
