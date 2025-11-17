import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://via.placeholder.com/80x80.png?text=Logo" alt="Barnes Pharmaceutical Logo" className="w-12 h-12 rounded-lg object-contain" />
            <div>
              <h1 className="text-lg font-semibold">Barnes Pharmaceutical</h1>
              <p className="text-sm text-gray-500">Trusted pharmaceutical repackaging & labeling</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#quality" className="hover:text-blue-600">Quality & Compliance</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-blue-600 text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-white to-sky-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Pharmaceutical Repackaging with Precision & Care</h2>
            <p className="mt-4 text-gray-600 max-w-xl">Barnes Pharmaceutical provides GMP-compliant repackaging, relabeling, kitting and distribution services for pharmacies, clinics, clinical trials, and specialty drug providers — prioritizing safety, traceability, and on-time delivery.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium">Request a Quote</a>
              <a href="#services" className="inline-block px-6 py-3 border border-gray-200 rounded-md">Our Services</a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <li>✓ GMP-compliant facilities</li>
              <li>✓ Batch-level traceability</li>
              <li>✓ 24–72 hour turnaround for standard projects</li>
              <li>✓ Secure chain-of-custody & cold-chain handling</li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1584367369847-8f50f3d7c09a?q=80&w=1200&auto=format&fit=crop" alt="pharmaceutical repackaging" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold">Services</h3>
        <p className="mt-2 text-gray-600 max-w-2xl">End-to-end repackaging services built for accuracy, compliance, and scale.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h4 className="font-semibold">Repackaging & Relabeling</h4>
            <p className="mt-2 text-sm text-gray-600">Custom unit-of-use repackaging, unit-dose blistering, vial/ampoule relabeling, barcode and lot printing.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h4 className="font-semibold">Kitting & Fulfillment</h4>
            <p className="mt-2 text-sm text-gray-600">Bespoke kits for clinical trials, patient starter packs, and subscription medication bundles with secure packaging.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h4 className="font-semibold">Cold-Chain & Controlled Substances</h4>
            <p className="mt-2 text-sm text-gray-600">Validated cold-chain handling and DEA-compliant procedures for controlled medications.</p>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section id="quality" className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Quality & Compliance</h3>
            <p className="mt-4 text-gray-600 max-w-xl">We maintain rigorous quality systems, full batch-level documentation, and validated processes to meet regulatory expectations. Our operations follow GMP, and we support audit access and routine stability testing when needed.</p>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• ISO-aligned quality management systems</li>
              <li>• Electronic batch records & serialization</li>
              <li>• Temperature-controlled storage & shipment tracking</li>
              <li>• Full COA and chain-of-custody reporting</li>
            </ul>
          </div>

          <div className="p-6 bg-sky-50 rounded-2xl">
            <h4 className="font-semibold">Certifications</h4>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white rounded-lg shadow">GMP Ready</div>
              <div className="p-3 bg-white rounded-lg shadow">ISO & Regulatory</div>
              <div className="p-3 bg-white rounded-lg shadow">DEA-compliant</div>
              <div className="p-3 bg-white rounded-lg shadow">Cold Chain Validated</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold">About Barnes Pharmaceutical</h3>
        <p className="mt-2 text-gray-600 max-w-3xl">Barnes Pharmaceutical is a family-led contract repackaging partner focused on accuracy, reliability, and transparent communication. We work with independent pharmacies, hospital systems, clinical research organizations, and specialty distributors to deliver compliant products on schedule.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h5 className="font-semibold">Mission</h5>
            <p className="mt-2 text-sm text-gray-600">To make medication delivery safer and more reliable through meticulous repackaging and modern quality systems.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h5 className="font-semibold">Vision</h5>
            <p className="mt-2 text-sm text-gray-600">Trusted nationwide partner for regulated repackaging and patient-centric packaging solutions.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h5 className="font-semibold">Values</h5>
            <p className="mt-2 text-sm text-gray-600">Compliance, transparency, speed, and patient safety.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-r from-white to-sky-50">
        <div className="max-w-4xl mx-auto px-6 py-14 rounded-2xl">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <p className="mt-2 text-gray-600">Request a quote or ask about a project — we usually respond within one business day.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 rounded-md border" placeholder="Full name" />
            <input className="p-3 rounded-md border" placeholder="Email address" />
            <input className="p-3 rounded-md border" placeholder="Company" />
            <input className="p-3 rounded-md border" placeholder="Phone (optional)" />
            <textarea className="p-3 rounded-md border md:col-span-2" placeholder="Project details: product types, volumes, timelines"></textarea>

            <div className="md:col-span-2 flex items-center gap-3">
              <button type="button" className="px-6 py-3 bg-blue-600 text-white rounded-md">Send Message</button>
              <a href="mailto:info@barnespharmaceutical.com" className="text-sm text-gray-600 underline">Or email us directly</a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Barnes Pharmaceutical — All rights reserved.</div>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="hover:text-blue-600">Privacy</a>
            <a href="#terms" className="hover:text-blue-600">Terms</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
