import React ,{useState , useEffect} from 'react'
import axios from "axios"
import { Container, Grid} from '@material-ui/core'
import Box from './Box'


const Home = () => {

    const planets_API = "https://findfalcone.herokuapp.com/planets"

    const[planets , setPlanet] = useState([])

      useEffect(()=>{
            axios.get(planets_API).then(res =>{
            console.log(res.data)
            setPlanet(res.data)
          }).catch(err =>{
            console.log(err)
          })
      },[])


    return (
        <Container>
          <Grid container spacing={3}>
           {
             planets.map(planet =>(
               <Grid item xs={12} md={6} lg={4}>
                <Box planetDetails={planet}/>
               </Grid>
             ))
           }
          </Grid>
        </Container>
    )
}

export default Home
