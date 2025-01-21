import { useAuth } from '@/hooks/auth/use-auth';

export const useGetMe = () => {
  const { session } = useAuth();

  const user = session?.user;

  const userMetadata = user?.user_metadata as Record<string, unknown>;

  const {
    email,
    first_name: firstName,
    last_name: lastName,
    username,
  } = userMetadata || {};

  return {
    id: user?.id,
    email,
    firstName,
    lastName,
    username,
  };
};
