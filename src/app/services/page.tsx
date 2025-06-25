export default function Services() {
  return (
    <section className="px-8 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Services</h1>

      <div className="space-y-8">
        {/* 1. Designer IP Protection & Management */}
        <div>
          <h2 className="text-2xl font-bold">Designer IP Protection &amp; Management</h2>
          <p className="mt-2">
            We safeguard designers’ intellectual property and streamline rights administration so
            creators can focus on innovation.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>Secure registration and storage with blockchain &amp; encryption</li>
            <li>Automated monitoring and infringement alerts</li>
            <li>Integrated licensing and royalty management platform</li>
          </ul>
        </div>

        {/* 2. AI-Powered Design Support Platform */}
        <div>
          <h2 className="text-2xl font-bold">AI-Powered Design Support Platform</h2>
          <p className="mt-2">
            Our AI tools accelerate the creative process, freeing designers from repetitive tasks
            and enhancing collaboration.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>Image &amp; model generation, plus style recommendations</li>
            <li>Workflow automation for repetitive tasks and resource optimization</li>
            <li>Real-time collaboration and feedback features</li>
          </ul>
        </div>

        {/* 3. Personalized Consumer Experience & Marketplace */}
        <div>
          <h2 className="text-2xl font-bold">Personalized Consumer Experience &amp; Marketplace</h2>
          <p className="mt-2">
            We connect designers directly with consumers through AI-driven personalization and
            immersive shopping experiences.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>AI-curated recommendations for content and products</li>
            <li>AR/VR/MR-enabled interactive shopping</li>
            <li>Designer-to-consumer direct marketplace</li>
          </ul>
        </div>
      </div>
    </section>
  )
}