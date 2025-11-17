import React from "react";

// Barnes Pharmaceutical - Single-file React component
// Tailwind CSS utility classes assumed to be available in the host project.
// This component is a complete landing + info site for a pharmaceutical repackaging company.

export default function BarnesPharmaceuticalSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col">
      {/* Top Announcement Bar */}
      <div className="w-full bg-sky-900 text-sky-50 text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>Specialized unit-dose and pharmaceutical repackaging services for hospital systems, nursing homes, long‑term care, and high‑volume pharmacies.</span>
          <a href="#contact" className="underline underline-offset-2 font-medium">
            Talk with Barnes Pharmaceutical
          </a>
        </div>
      </div>

      {/* Header / Navigation */}
      <header className="bg-white border-b sticky top-0 z-30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/src/assets/bp-logo.jpeg"
              alt="Barnes Pharmaceutical Logo"
              className="w-11 h-11 rounded-lg object-contain"
            />
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.14em] text-sky-700 font-semibold">Pharmaceutical Repackaging</p>
              <h1 className="text-base md:text-lg font-semibold text-slate-900">Barnes Pharmaceutical</h1>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#solutions" className="hover:text-sky-700">Solutions</a>
            <a href="#quality" className="hover:text-sky-700">Quality</a>
            <a href="#operations" className="hover:text-sky-700">Operations</a>
            <a href="#about" className="hover:text-sky-700">About</a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-sky-700 text-white shadow-sm hover:bg-sky-800"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="bg-gradient-to-br from-sky-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Hero Copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-700 uppercase">
              Repackaging · Relabeling · Kitting
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Turnkey pharmaceutical repackaging for busy pharmacy teams.
            </h2>
            <p className="mt-4 text-slate-600 text-sm md:text-base max-w-xl">
              Barnes Pharmaceutical partners with hospital health systems, nursing homes, long‑term care facilities, and high‑volume pharmacies to deliver GMP‑aligned unit‑dose, strip, and unit‑of‑use repackaging that supports safety, survey readiness, and med‑pass efficiency.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-sky-700 text-white text-sm font-semibold shadow-sm hover:bg-sky-800"
              >
                Request a repackaging consult
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-200 text-sm font-medium text-slate-800 bg-white hover:border-sky-200"
              >
                View solutions
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-xs md:text-sm text-slate-600 max-w-lg">
              <div>
                <p className="font-semibold text-slate-900">Built for healthcare</p>
                <p>Hospitals, long‑term care, nursing homes, skilled nursing, and specialty pharmacies.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Operational alignment</p>
                <p>Support for med‑pass workflows, cycle fills, cart fills, and high‑volume long‑term care repackaging.</p>
              </div>
            </div>
          </div>

          {/* Hero Image / Card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-white">
              <img
                src="/src/assets/pharmacist-hero.jpg"
                alt="Pharmacist in cleanroom measuring unit-dose medication"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-md px-4 py-3 text-xs text-slate-700 border border-slate-100">
              <p className="font-semibold text-slate-900">Batch-level traceability</p>
              <p>Lot, expiry, and chain-of-custody documentation with every project.</p>
            </div>
            <div className="hidden md:block absolute -top-5 -right-4 bg-sky-700 text-white rounded-2xl shadow-md px-4 py-3 text-xs">
              <p className="font-semibold">Standard & project-based workflows</p>
              <p>Support for recurring and one-time initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Strip */}
      <section className="bg-slate-900 text-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm">
          <span className="uppercase tracking-[0.18em] text-slate-300 font-semibold">Serving</span>
          <span className="px-3 py-1 rounded-full border border-slate-600 bg-slate-800/60">Hospital & health systems</span>
          <span className="px-3 py-1 rounded-full border border-slate-600 bg-slate-800/60">Nursing homes & long‑term care</span>
          <span className="px-3 py-1 rounded-full border border-slate-600 bg-slate-800/60">Skilled nursing & post‑acute care</span>
          <span className="px-3 py-1 rounded-full border border-slate-600 bg-slate-800/60">High‑volume hospital repackaging</span>
        </div>
      </section>

      {/* Solutions / Services Section */}
      <section id="solutions" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-700 uppercase">Solutions</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Repackaging solutions aligned to your medication workflows.</h3>
              <p className="mt-2 text-slate-600 max-w-2xl text-sm md:text-base">
                From unit‑dose to project‑based relabeling, Barnes Pharmaceutical helps hospital and long‑term care teams simplify complex packaging work while maintaining quality, regulatory alignment, and patient‑safety expectations.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-slate-50/60">
              <h4 className="font-semibold text-slate-900">Unit-dose & unit-of-use</h4>
              <p className="mt-2 text-sm text-slate-600">
                Oral solids, liquids, and select injectables repackaged into barcoded unit‑dose, strip‑pack, or unit‑of‑use formats to support med‑pass accuracy, bedside scanning, and LTC inventory control.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-slate-600">
                <li>• Hospital & long‑term care unit‑dose programs</li>
                <li>• Cycle‑fill and cart‑fill repackaging support</li>
                <li>• Medication safety and standardization initiatives</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-slate-50/60">
              <h4 className="font-semibold text-slate-900">Relabeling & specialty projects</h4>
              <p className="mt-2 text-sm text-slate-600">
                Controlled and non-controlled product relabeling for regulatory updates, language changes, or internal
                formulary projects.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-slate-600">
                <li>• New barcode or NDC/GTIN integration</li>
                <li>• Label updates and rebranding</li>
                <li>• Product conversions and formulary changes</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-100 shadow-sm bg-slate-50/60">
              <h4 className="font-semibold text-slate-900">Kitting & program support</h4>
              <p className="mt-2 text-sm text-slate-600">
                Pre‑configured kits and packaging support for long‑term care, skilled nursing, and transition‑of‑care initiatives, including discharge packs and admission starter kits.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-slate-600">
                <li>• Clinic and discharge kits</li>
                <li>• Patient adherence and education programs</li>
                <li>• Project-based and recurring workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section id="quality" className="bg-slate-900 text-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase">Quality & Compliance</p>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold">Quality systems built for regulated pharmacy environments.</h3>
            <p className="mt-3 text-sm md:text-base text-slate-100/80">
              Barnes Pharmaceutical operates with GMP-aligned processes, documentation, and quality controls designed to
              support audit readiness and patient safety. We work with your team to align SOPs, labeling requirements,
              and documentation standards.
            </p>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-slate-50">Documentation</span>
                <span>Batch records, lot and expiry tracking, and chain-of-custody documentation.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-slate-50">Environmental controls</span>
                <span>Temperature and humidity monitoring for storage and staging as applicable.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-slate-50">Process validation</span>
                <span>Standardized label proofing, in-process checks, and final release review.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-semibold text-slate-50">Collaboration</span>
                <span>Work alongside pharmacy leadership on quality projects and audits.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 md:p-7 flex flex-col gap-4">
            <h4 className="font-semibold text-slate-50">What you can expect</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="bg-slate-900/60 rounded-xl p-4">
                <p className="font-semibold text-slate-50">Clear onboarding</p>
                <p className="mt-1 text-slate-200/80">Defined product profiles, label standards, and communication paths.</p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4">
                <p className="font-semibold text-slate-50">Project visibility</p>
                <p className="mt-1 text-slate-200/80">Status updates, documentation packets, and shipment details.</p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4">
                <p className="font-semibold text-slate-50">Audit support</p>
                <p className="mt-1 text-slate-200/80">Support for documentation requests and quality reviews.</p>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4">
                <p className="font-semibold text-slate-50">Patient-centered mindset</p>
                <p className="mt-1 text-slate-200/80">Every decision grounded in end-patient safety and clarity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations / Benefits */}
      <section id="operations" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-700 uppercase">Operations</p>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Help your pharmacy and nursing teams focus on patient care.</h3>
              <p className="mt-2 text-slate-600 max-w-2xl text-sm md:text-base">
                Offload repackaging and complex labeling projects so pharmacists and technicians can focus on patient-facing
                work while maintaining confidence in packaging quality.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/70">
              <p className="font-semibold text-slate-900">Improve staff utilization</p>
              <p className="mt-2 text-slate-600">Redirect technician and nursing time from manual med‑pass repackaging to direct patient care, medication reconciliation, and clinical responsibilities.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/70">
              <p className="font-semibold text-slate-900">Standardize packaging</p>
              <p className="mt-2 text-slate-600">Consistent barcodes and label formats that support med‑pass scanning, MAR documentation, and nursing workflow efficiency.</p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/70">
              <p className="font-semibold text-slate-900">Scale with demand</p>
              <p className="mt-2 text-slate-600">Support for seasonal census changes, new LTC admissions, hospital expansions, and high‑volume repackaging needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-700 uppercase">About</p>
            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">A focused partner for repackaging and labeling.</h3>
            <p className="mt-3 text-sm md:text-base text-slate-700 max-w-xl">
              Barnes Pharmaceutical is a dedicated repackaging partner focused on clarity, reliability, and
              communication. We collaborate with hospital and long‑term care pharmacy teams to design programs that support med‑pass safety, operational efficiency, and regulatory readiness.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-white rounded-2xl border border-slate-100">
                <p className="font-semibold text-slate-900">Pharmacy-first mindset</p>
                <p className="mt-1 text-slate-600">We align processes with the realities of inpatient, outpatient, and
                  specialty pharmacy operations.</p>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-100">
                <p className="font-semibold text-slate-900">Relationship-driven</p>
                <p className="mt-1 text-slate-600">Clear points of contact, responsive communication, and project
                  visibility.</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4 text-sm">
            <p className="text-slate-700">
              “Our goal is to function like an extension of your pharmacy department—handling complex repackaging work
              with the same care and attention to detail you expect from your own team.”
            </p>
            <div>
              <p className="font-semibold text-slate-900">Barnes Pharmaceutical</p>
              <p className="text-xs text-slate-500">Pharmaceutical Repackaging Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="bg-gradient-to-r from-sky-50 via-white to-sky-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-16">
          <div className="rounded-3xl bg-white shadow-md border border-slate-100 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <p className="text-xs font-semibold tracking-[0.2em] text-sky-700 uppercase">Contact</p>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-slate-900">Talk with Barnes Pharmaceutical.</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Share a bit about your unit‑dose needs, facility type, volumes, census, and timelines. We&apos;ll follow up to discuss fit,
                  requirements, and next steps.
                </p>
                <div className="mt-4 text-xs text-slate-600">
                  <p>Email: <a href="mailto:info@barnespharmaceutical.com" className="underline">info@barnespharmaceutical.com</a></p>
                </div>
              </div>

              <form className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <input className="p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Full name" />
                <input className="p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Email address" />
                <input className="p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Organization" />
                <input className="p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Role / title" />
                <textarea
                  className="p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 md:col-span-2 min-h-[120px]"
                  placeholder="Project details: product types, estimated volumes, timelines, and any regulatory or labeling requirements."
                />
                <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full bg-sky-700 text-white font-semibold text-sm shadow-sm hover:bg-sky-800"
                  >
                    Submit inquiry
                  </button>
                  <p className="text-xs text-slate-500">
                    By submitting, you agree that Barnes Pharmaceutical may contact you about this and related services.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 mt-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/bp-logo.jpeg"
              alt="Barnes Pharmaceutical Logo"
              className="w-9 h-9 rounded-lg object-contain bg-slate-800"
            />
            <div className="text-xs">
              <p className="font-semibold text-slate-50">Barnes Pharmaceutical</p>
              <p className="text-slate-400">Pharmaceutical repackaging & labeling partner.</p>
            </div>
          </div>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#quality" className="hover:text-slate-100">Quality & Compliance</a>
            <a href="#solutions" className="hover:text-slate-100">Solutions</a>
            <a href="#contact" className="hover:text-slate-100">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
