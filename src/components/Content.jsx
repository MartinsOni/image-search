import { useContext,} from 'react';
// import { createContext } from 'react'
import MyContext from '../context/MyContext'
import SearchForm from './SearchForm'


const Content = (e) => {
  const { search, data,  page,  imageList, previousPage, nextPage, description } = useContext(MyContext);
  
  return (
    <div id='input'>
      <i><h2>Images of {search}</h2></i>
      <SearchForm />

      <div className='image'>
        {imageList}
        {description}
      </div>

      <div>
        <p>Page: {page} of {data.results.total_pages} </p>
      </div>

      {console.log(page)}
      {page > 1 && <button id='btn1' onClick={previousPage}>Previous</button>}
      {page < data.results.total_pages && <button id='btn2' onClick={nextPage}>Next</button>}
      {/* <Cleanup /> */}
    </div>
  )
}

export default Content
