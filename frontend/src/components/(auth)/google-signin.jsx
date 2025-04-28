import { useState } from 'react';
import axios from 'axios';

export default function GoogleSignIn() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      // Call NestJS backend to generate Google Auth URL
      const response = await axios.get('http://localhost:3000/api/auth/google');
      window.location.href = response.data.url; // Redirect to Google OAuth page
    } catch (err) {
      setError('Error redirecting to Google Auth');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Google SignIn</h1>
      <button onClick={handleGoogleSignIn} disabled={loading}>
        {loading ? 'Redirecting to Google...' : 'Sign in with Google'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
