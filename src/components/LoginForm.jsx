import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': '0d1c4f48-3a59-4abf-8cfe-dd9d83f08462', 'User-Name': username, 'User-Secret': password };

        try {
            // username / password => chatengine => give messages
            await axios.get('https://api.chatengine.io/chats/', { headers: authObject });

            // stores creds to the local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            setError('Oops, Incorrect credentials...');
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Sky Chat</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='input'
                        required
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='input'
                        required
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;