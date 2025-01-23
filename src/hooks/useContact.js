import { useMutation } from '@tanstack/react-query';
import { contactPost } from '../services/contact.post';

const useContact = () => {
  const { mutate, isLoading, error } = useMutation({
    mutationKey: ['contact-send'],
    mutationFn: (data) => contactPost(data),
  });

  return { mutate, isLoading, error };
};

export default useContact;
