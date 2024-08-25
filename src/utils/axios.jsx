import axios from 'axios'


const instance=axios.create({
  baseURL:'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGExN2MwNjZiMzhhYTc0NjBiYTkwNDg1NjgzZWI2OCIsIm5iZiI6MTcyNDYwNjY0Ni42ODE2OTEsInN1YiI6IjY2Y2I2NmZlN2RkNTRmMThmNjc0OWM5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AVjCtiKwbZj7odrhGCOBFpOdqqCLAhsqI8feJ-HNYVs'
  }
})

export default instance