import React from "react";
import BookDetail from "../components/BookDetail";
import BookService from "../service/BookService";
import { UpdateBook } from "./UpdateBook";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
interface Book{
    id:number;
    name:string;
    author:string;
}
interface BookListProps{

   
}
interface BookListState{
    books:Array<Book>;
    isLoading: boolean;
}
export class BookList extends React.Component<BookListProps,BookListState>{
    constructor(props:BookListProps){
        super(props);
        this.state={
            books:[],
            isLoading:true
        };
        this.remove=this.remove.bind(this);
        // this.getState=this.getState.bind(this);
    }
     componentDidMount(){
        this.setState({isLoading:true});
        BookService.getBook().then((res)=>{
            this.setState({books:res,isLoading:false})
        });
        
    }
   async remove(id:number){
       BookService.deleteBook(id).then(
           response=>{
               this.setState({})
           }
       )
        //  await fetch('http://localhost:8080/delBook',{
        //      method: 'DELETE',
        //      headers:{
        //         'Accept':'application/json',
        //          'Content-Type':'application/json'
        //      }
        //  }).then(()=> {
        //      let updatedBooks=[...this.state.books].filter(i=> i.id !==id);
        //      this.setState({books:updatedBooks});
        //  });
        
     }
     
    //  getState(bid:number){

        
    //      return <BookDetail id={bid}/>
    //  }
    //  getUpdate(id:number){
    //      return <UpdateBook id={id}/>
    //  }
    render(){
        const {books,isLoading}=this.state;
        if(isLoading){
            return <p> Loading.....</p>
        }
        
        return( <div>
                <h2>
                    ProfileList
                </h2>
                {books.map((book:Book)=>
                <div key={book.id}>
                    {book.name}<br/>
                    {book.author}<br/>

                    <Button variant="contained" color="secondary"  onClick={() => this.remove(book.id)}>Delete</Button>
                    {/* {<button color="green" onClick={() => this.getState(book.id)}>Details</button>}
                    {<button color="green" onClick={() => this.getUpdate(book.id)}>Update</button>} */}
                    <Button variant="contained" color="primary"><Link className="link" to='/BookDetail/:{book.id}' >Detail</Link></Button>
                    <Button variant="contained" color="secondary"><Link className="link" to='/updateBook/:{book.id}' >update</Link></Button>

                    </div>)}
                 
          
            </div>
       );
      
    }
}
export default BookList