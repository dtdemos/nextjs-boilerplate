import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
    <main>
      <h1>Index Page</h1>
      <Image src="/dynatrace.svg" alt="Dynatrace Logo" width={100} height={100} priority></Image>
      <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={100} priority/>
      <br></br>
      <Link href="/demopage1">Link to Demo Page 1</Link>

      <br></br>
      <Link href="/demopage2">Link to Demo Page 2</Link>
    </main>
    )
  }