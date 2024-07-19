import React,{useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';




const Booklist = () => {
   
    const {Books}=useContext(BookContext);
    const {islightTheme,dark,light}=  useContext(ThemeContext);
    const theme= islightTheme ? dark: light;

    return ( 
        <div className="book-list" style={{
            background:theme.bg,color:theme.syntax
        }}>
            <ul>
                {
                    Books.map((book)=>{
                        return (
                              <li key={book.id} style={{background:theme.ui}}>{book.title}</li>
                        )
                    })
                }

            </ul>
        </div>
     );
}
 
export default Booklist;
 

