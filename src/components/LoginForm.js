import {useState} from 'react'
import axios from 'axios'

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const authObject = {
            'Project-ID': '89a8aea6-f50a-4924-b5d9-fa16037c7513',
            'User-Name': username,
            'User-Secret': password,
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch(error) {
            return (
                setError('Incorrect Credentials')
            )
        }
            
    }

  return (
    <div className='wrapper'>
        <div className="form">
            <h1 className='title'>Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className='input' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" className='input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <div align="center">
                    <button type='submit' className='button'>
                        <span>Start Chatting</span>
                        </button>
                </div>
                <h2 className='error'>{error}</h2>
        </form>
        </div>
    </div>
  )
}

export default LoginForm