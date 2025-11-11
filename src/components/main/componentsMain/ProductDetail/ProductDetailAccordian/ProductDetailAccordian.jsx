import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { productDetailinfoAccordian } from '../productDetailinfo';

function ProductDetailAccordian() {
  return (
    <>
      <Accordion
        sx={  (theme) => ({
          background: 'inherit',
         borderBottom: 'none',
          boxShadow: 'none',
          '&::before': {
            display: 'none'
          },
          [theme.breakpoints.up('lg')] : {
              borderBottom: '3px solid #EC7755'
          }
        })}
      >
        <AccordionSummary
          
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiAccordionSummary-content': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin : 0,
              gap : '4px'
            }
          }}
        >
          <Typography component="span" 
          sx={{
            fontSize: '20px',
            lineHeight: '140%',
            fontFamily: 'Lato Regular'
          }}
          >Load More Reviews</Typography>
          <ExpandMoreIcon sx={{ fontSize: 30}}/>
        </AccordionSummary>
        <AccordionDetails>
          {productDetailinfoAccordian.map(item => (
          <div className='mb-8' key={item.id}>
            <div className='flex items-center mb-4 gap-4'>
              <img src={item.img} className='rounded-15px' alt="slide image" />
              <h6 className='font-bold font-Lato-Bold text-xl'>{item.title}</h6>
            </div>
            <p className='leading-[150%] text-base tracking-tightest4 mb-4'>
              {item.desc}
            </p>
          </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default ProductDetailAccordian