export function useImagePath(path: Ref<string>) {
  const runtimeConfig = useRuntimeConfig();

  const imagePath = computed(() => {
    return `${runtimeConfig.public.serverUrl}${path.value}`;
  });

  return {
    imagePath,
  };
}
