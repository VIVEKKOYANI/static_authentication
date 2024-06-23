import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { LoginPage } from '../routes/elements';

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  
  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  if (!isAuthenticated) {
    console.log("requestedLocation", pathname, requestedLocation, pathname !== requestedLocation);
    
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <LoginPage />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <> {children} </>;
}
