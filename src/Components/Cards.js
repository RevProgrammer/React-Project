import React from 'react'
// import Grid from '@mui/material/Grid';
// import cardData  from './cardData';


// import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material'

// const css = {
//     moviecard:{
//         width: "179.22px",
//         height: "243.382px",
//         flexShrink: "0",
//         borderRadius: "20px",
//         border:"solid 2px",
       

//     } ,

//     category:{
//         color:"#fff",
//         zIndex:"99",
//     },

//     body:{
//       backgroundColor: "#111411",
//       paddingTop:"140px"
//     }

// }


// const category = [
//     {
//         name:"Movie/TV"
//     },
//     {
//         name:"Anime/Manga"
//     },
//     {
//         name:"Comedians"
//     },
//     {
//         name:"History"
//     },
//     {
//         name:"Cartoons"
//     }
// ]


const Cards = () => {
  return (
    <>
      <div className='Cards'>
        <div className='Card'>
          <img src={require('../images/movie.png')} alt="mypic" className="card_img" />
          <div className='Card-Info'>
            <span className='card_category'>Card Description</span>
            <h3 className = "card_Title">Dark</h3>
            <a href = "$" target='_blank'>
              <button>Watch Now</button>
            </a>

          </div>
        </div>
      </div>

    </>
  )
}

export default Cards;