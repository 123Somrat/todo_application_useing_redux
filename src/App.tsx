
import { Mail} from "lucide-react"
import { Button } from '@/components/ui/button'

import './App.css'

function App() {
 

  return (
    <>
      <h1 className='border-2 border-rounded border-gray-500 text-cyan-300 text-center p-4 mx-auto'>Todo application</h1>
      
      <Button >
      <Mail className="mr-2 h-4 w-4 text-white" /> <span className="text-white">Login with Email</span>
    </Button>
    
    </>
  )
}

export default App
