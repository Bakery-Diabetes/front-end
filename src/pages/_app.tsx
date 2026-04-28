import type { AppProps } from "next/app";
// STYLES
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// CONTEXT
import { AuthUserProvider } from "@/context/authUserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <div className="bg-primary-beige min-h-screen">
        <ToastContainer 
          autoClose={5000}
        />
          
        <Component {...pageProps} />;      
      </div>
      
    </AuthUserProvider>    
  )
}
