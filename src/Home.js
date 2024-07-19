import React ,{Component} from 'react';

import { ThemeContext } from "./contexts/ThemeContext";

class Home extends Component {
   

   

    render() { 



      
        return (

            <ThemeContext.Consumer>{(context)=>{
                const {islightTheme,dark,light}=context
                const theme=islightTheme ? dark : light; 
                return(
                    <div className="home" style={{
                        background:theme.ui
                    }}>
                        <h1 style={{
                            color:theme.syntax
                        }}>This is Homepage</h1>
                    </div>
                )
            }}
         
            </ThemeContext.Consumer>
        );
    }
}
 
export default Home;