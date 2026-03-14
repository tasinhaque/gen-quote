import { useState, useEffect } from "react"

function App() {

  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(true)

  const url = "https://dummyjson.com/quotes/random"


  const fetchQuote = async () => {

    setLoading(true)

    try{
      const res = await fetch(`${url}`);

      if(!res.ok){
        throw new Error("Failed to get data. Try again.");
        
      }
      
      const data = await res.json()
      setQuote(data)
    }
    catch(error){ 
      setQuote({
        quote: `${error.message}`,
        author: 'Error'
      })

    }
    finally{

      setLoading(false)
    }


  }

  useEffect(() => {
    fetchQuote()



  }, [])

  return (
    <>
    {
      loading ? <p>Loading...</p> : 
      <div className="quoteBox">
          <h1><span>"</span> {quote.quote}<span>"</span></h1>
          <h2>~ {quote.author}</h2>
          <div className="buttonContainer">

          <button onClick={fetchQuote} disabled={loading}>
            {loading ? "Loading..." : "Generate New !"}</button>
          </div>
        
      </div>
    }
    </>
  )
}

      export default App
