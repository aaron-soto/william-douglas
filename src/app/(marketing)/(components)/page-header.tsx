export const PageHeader = ({ title }: { title: string }) => {
  return (
    <h1 className="text-white text-3xl w-fit font-extralight font-sans animate-slidein opacity-0 scale-0 [--slidein-delay:100ms]">
      {title}
    </h1>
  );
};
