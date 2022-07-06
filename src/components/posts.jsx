import TopRight from './UtilComps';
import {Posts} from './styled/container.styled'

function DispPosts({userName,created_at,title,content}) {
    return ( 
        <Posts>
                <TopRight
                            userName={userName}
                />
               <h1>{title}</h1>
                <p>{content}</p>
                <h5>{created_at}</h5>
                    
                              
        </Posts>   
     );
}

export default DispPosts; 