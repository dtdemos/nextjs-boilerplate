import Image from 'next/image'

export default function Page() {
    return (
    <main>
      <h1>Index Page</h1>
      <Image src="/dynatrace.svg" alt="Dynatrace Logo" width={100} height={100} priority></Image>
      <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={100} priority/>
      <br></br>
      <a href="demopage1">Link to Demo Page 1</a>
      <br></br>
      <a href="demopage2">Link to Demo Page 2</a>
    </main>
    )
  }