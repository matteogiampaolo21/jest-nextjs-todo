


export default function NestLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-4xl">This is a nested layout.</h1>  
      {children}
    </>
        

  );
}
