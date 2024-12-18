import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Book{
    id: number;
    title: string;
    author: string;
    price: number;
    imgUrl: string;
    description: string;
}

const Home: React.FC = () => {
    const[books,setBooks]=useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const apiUrl = `${import.meta.env.VITE_BOOK_SERVICE_URL}`;
    console.log(apiUrl);
    useEffect(()=>{
        axios.get(apiUrl+"/getAllBooks").then((response)=>{
            setBooks(response.data.content || [])
            console.log(response.data.content)
        }).catch((error)=>{
            console.log('Eoor fetching books',error)
        })
    },[])

    const handleViewDetails = (book: Book) => {
        setSelectedBook(book);  // Set selected book details
      };
    
  return (
    <div className='container mx-auto px-4 py-6'>
        <h1 className='text-4xl font-bold text-center mb-6' >Welcome to SR Online Bookstore</h1>
        {/* Book Listing */}
        
        <div className='grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
       {books.map((book)=>(
        <div key={book.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
        <img src={book.imgUrl || 'https://via.placeholder.com/150'} alt={book.title} className='w-full h-4/6  object-cover' />
        <div className='p-4'>
            <h3 className='text-xl font-semibold '>{book.title}</h3>
            <p className="text-xl text-green-500 mt-2">${book.price}</p>
            <button
              onClick={() => handleViewDetails(book)}
              className="mt-2 bg-blue-500 text-white p-2 rounded"
            > View Deatils</button>
        </div>

        </div>

       ))}
        </div>
        {selectedBook && (
        <div className="mt-6 p-4 border-t">
          <h2 className="text-2xl font-bold">{selectedBook.title}</h2>
          <p className="text-sm">{selectedBook.author}</p>
          <p className="mt-2">{selectedBook.description}</p>
        </div>
      )}
    </div>
  )
}

export default Home
