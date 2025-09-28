import React from 'react'

// Define the proper interface
interface PageProps {
  params: Promise<{
    lol: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  // Await the params object first
  const { lol } = await params;
  
  return (
    <div style={{height: "500px"}}>
      <p>ahhh {lol}</p>
      <p>Debug info:</p>
      <ul>
        <li>Raw value: "{lol}"</li>
        <li>Type: {typeof lol}</li>
        <li>Length: {lol?.length}</li>
        <li>URL decoded: "{decodeURIComponent(lol)}"</li>
      </ul>
    </div>
  )
}

export default Page