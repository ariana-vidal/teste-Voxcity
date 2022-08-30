import { Route, Routes } from 'react-router-dom';
import Register from '../screens/register';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Register /> } />
    </Routes>
  );
}