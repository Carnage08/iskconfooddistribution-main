import Home from '@/components/Home'
import Testemonials from '@/components/Testemonial'
import About from '@/app/About_Us/page'
import React from 'react'
import Upcoming from '@/components/Upcoming'
// import Impacts from '@/components/Impacts'
import Impact1 from '@/components/Impact1'
import Gallery from '@/components/Gallery'


const page = () => {
  return (
    <div className="">
  <Home />

  {/* ✅ Spiritual Warm Section */}
  <section className="min-h-screen bg-gradient-to-b from-[#2A1A1A] to-[#1C1313]">
    <Upcoming />
  </section>

  {/* ✅ Modern Minimal Section */}
  <section className="min-h-screen bg-[#F8F8F8]">
    <Impact1/>
  </section>

  {/* ✅ Spiritual Warm Again */}
  <section className="min-h-screen bg-gradient-to-b from-[#2A1A1A] to-[#1C1313]">
    <Testemonials />
  </section>

  <section>
    <Gallery/>
  </section>
</div>

  )
}

export default page
