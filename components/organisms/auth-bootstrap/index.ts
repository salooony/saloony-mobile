import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bootstrapAuth } from '@/services/authBootstrap';

export default function AuthBootstrap() {
  const dispatch = useDispatch();

  useEffect(() => {
    bootstrapAuth(dispatch as any);
  }, [dispatch]);

  return null;
}
