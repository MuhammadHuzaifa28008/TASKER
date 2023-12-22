import React, { createContext, useContext, useEffect, useState } from 'react';
import ErrorModal from '../../components/errorComponents/ErrorModal'; // Create an ErrorModal component
import { useNavigation } from '@react-navigation/native';
// Create the ErrorContext
export const ErrorContext = createContext();

// Create an ErrorProvider component to wrap your entire app
export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [navigate, setNavigate] = useState(false)
    const navigation = useNavigation()
    useEffect(() => {
        // console.log("navigate")
        return () => {
            setNavigate(false)
        }
    }, [navigate])

    const showErrorModal = (errorMessage) => {
        setError(errorMessage);
        // Additional logic to show the modal
    };

    const hideErrorModal = () => {
        setError(null);
        if (navigate) {
            navigation.navigate('home')
        }
        // Additional logic to hide the modal
    };

    return (
        <ErrorContext.Provider value={{ showErrorModal, hideErrorModal, setNavigate }}>
            {children}
            {error && <ErrorModal error={error} onClose={hideErrorModal} navigate={navigate} />}
        </ErrorContext.Provider>
    );
};

// Create a custom hook to easily access the error context
// export const useError = () => {
//   return useContext(ErrorContext);
// };
