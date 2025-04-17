// src/pages/Login.tsx
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full p-8 space-y-8 bg-white rounded-lg shadow-md flex flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        
        {/* Custom styles for the Authenticator */}
        <style>
          {`
          [data-amplify-authenticator] {
            width: 100%;
            max-width: 100%;
            --amplify-components-authenticator-router-box-shadow: 0 0 16px var(--amplify-colors-overlay-10);
            --amplify-components-authenticator-router-border-width: 0;
            --amplify-components-authenticator-form-padding: var(--amplify-space-medium) var(--amplify-space-xl) var(--amplify-space-xl);
            
            /* Primary button (amber-600) */
            --amplify-components-button-primary-background-color: #d97706; /* amber-600 */
            --amplify-components-button-primary-hover-background-color: #b45309; /* amber-700 */
            --amplify-components-button-primary-focus-background-color: #b45309; /* amber-700 */
            
            /* Form field focus color */
            --amplify-components-fieldcontrol-focus-box-shadow: 0 0 0 2px #d97706; /* amber-600 */
            
            /* Tabs styling */
            --amplify-components-tabs-item-active-border-color: #d97706; /* amber-600 */
            --amplify-components-tabs-item-color: var(--amplify-colors-neutral-80);
            --amplify-components-tabs-item-active-color: #92400e; /* amber-800 for better contrast */
            
            /* Links color */
            --amplify-components-button-link-color: #d97706; /* amber-600 */
            --amplify-components-button-link-hover-color: #b45309; /* amber-700 */
            
            /* Additional customizations */
            --amplify-components-button-border-radius: 0.375rem; /* rounded-md */
          }
          `}
        </style>
        
        <Authenticator>
          {({ signOut }) => (
            <div className="mt-6 space-y-6">
              <div className="text-center">
                {/* <h2 className="text-xl font-semibold text-gray-900">
                  Hello, {user?.username}
                </h2> */}
                <p className="mt-2 text-sm text-gray-600">
                  You've successfully signed in
                </p>
              </div>
              
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => navigate('/')}
                  className="w-full py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md"
                >
                  Go to home
                </button>
                
                <button
                  onClick={signOut}
                  className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </Authenticator>
      </div>
    </div>
  );
};

export default Login;