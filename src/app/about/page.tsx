import Image from 'next/image'

export default function About() {
  return (
    <section className="px-8 py-16 max-w-3xl mx-auto space-y-6">
      <div className="w-full aspect-[3/2] relative mb-8">
  <Image
    src="/images/about.jpg"
    alt="About REALIVA AI"
    fill
    style={{ objectFit: 'cover' }}
    priority
  />
</div>
      <h1 className="text-3xl font-bold">About</h1>
      <p>
        <strong>REALIVA AI</strong> is a name born from the fusion of “Realize” and “Viva,” carrying a philosophy of
        bringing passion and imagination into the light of reality. Under our slogan, “For Designer,
        For Everyone,” we develop technology that empowers every designer and creates value for all.
      </p>

      <p>
        Our founding team—CEO Junseok Ma, COO &amp; CFO Sion Cha, and CTO Hyeonho Kook—holds
        advanced degrees in electrical, electronic, and computer engineering. Drawing on years of
        cutting-edge research in Smart Materials &amp; Devices, Human–Computer Interaction, Efficient AI,
        and Neuromorphic AI, we established Realiva out of a shared belief that technology can drive
        positive transformation in people’s lives.
      </p>

      <p>
        We believe we live in an age where the paradigm of value creation is shifting. Simple,
        inefficient repetitive tasks can now be automated by technology, and creativity and
        sensibility have become the true center of innovation. Yet, designers’ intellectual property
        (IP) faces unprecedented challenges in a rapidly evolving technological landscape—too often
        unprotected and vulnerable. Realiva responds to this paradox with both technology and
        philosophy.
      </p>

      <p>
        Our mission is to safeguard designers’ IP, generate added value through AI-based systems,
        and create an environment where designers can focus solely on genuine creativity. By
        delivering AI-enhanced creations tailored to consumers, we aim to pioneer a more efficient,
        healthier market. <strong>REALIVA AI</strong> is redefining the future of design and leading the way toward a
        world where individual creativity is both respected and celebrated.
      </p>
    </section>
  )
}