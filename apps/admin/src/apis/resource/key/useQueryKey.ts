const useQueryKey = (imageName: string) => {
  return ['image', { name: imageName }];
};

export default useQueryKey;
