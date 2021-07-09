
import React, { useEffect } from "react";

const Pagination = ({ postPerPage, totalPost, pag}) => {

    const pageNumber = []

    for(let i = 1; i <= Math.ceil(totalPost/postPerPage); i++){
       pageNumber.push(i)
    }

    useEffect(()=>{
      const handleclick = () =>{
          
      }
    },[])

    return(
        <nav >
          <ul className='pagination'>
          {pageNumber.map(number=>{
              return(
                  <li key={number} className='page-item'>
                      <a onClick={()=>pag(number)} href='!#' className='page-link'>{number}</a>
                  </li>
              )
          })}
          </ul>
        </nav>
    )
}

export default Pagination