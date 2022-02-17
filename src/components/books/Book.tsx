import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import coverBook from '../../assets/images/coverBook.jpg'
import {styled} from '@mui/material/styles'
import "../../assets/styles/Book.css"

interface Props{
  title: string
}



function Book({title}: Props) {
  return (
    <Card sx={{ maxWidth: 350, height:350, '&:hover': "scale(1rem)" }} className="book" >
      <CardMedia 
        component="img"
        height="250"
        image={coverBook}
        alt={title}
      />
      <CardContent>
        <Typography sx={{
                      fontSize: 15,
                      fontWeight: "600"
                    }} 
                    component="div">
          {title}

        </Typography>
      </CardContent>

    </Card>
  )
}



export default Book
