import React from "react";
import Image from "next/image";
import missionImage from "@/assets/pic1.jpg";
import visionImage from "@/assets/pic2.jpg";
import valuesImage from "@/assets/pic4.jpg";
import programsImage from "@/assets/pic1.jpg";
import impactImage from "@/assets/pic3.jpg";

const Page = () => {
  return (
    <div className="bg-gray-100 text-black py-16">
      <div className="w-11/12 md:w-4/5 mx-auto flex flex-col items-center justify-center relative z-50">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center">
          <span className="underline decoration-red-500">JOIN</span> US IN
          MAKING A DIFFERENCE
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-12 text-center">
          Together, we can create a brighter future for those who are in need.
        </p>

        <div className="flex flex-wrap gap-8 justify-center mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[300px] max-w-[400px]">
            <Image
              src={missionImage}
              alt="Our Mission"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 mt-4">Our Mission</h2>
            <p className="text-base md:text-lg">
              At Hope Horizons, our mission is to provide homeless children with
              the essentials they need to thrive. Through donations of clothing,
              school supplies, toys, and other necessities, we strive to offer
              hope and support to the most vulnerable members of our community.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[300px] max-w-[400px]">
            <Image
              src={visionImage}
              alt="Our Vision"
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <h2 className="text-2xl md:text-3xl font-semibold mt-4">Our Vision</h2>
            <p className="text-base md:text-lg">
              We envision a world where every child, regardless of their
              circumstances, has access to the resources and support necessary
              for a happy and healthy childhood. We are committed to creating a
              brighter future for homeless children by addressing their
              immediate needs and empowering them for a better tomorrow.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mb-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
              <Image
                src={valuesImage}
                alt="Our Values"
                className="rounded-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Values</h2>
              <ul className="text-base md:text-lg list-disc mb-4 pl-6">
                <li>
                  Compassion: We believe in treating every child with kindness
                  and empathy.
                </li>
                <li>
                  Integrity: We are committed to transparency and accountability
                  in all our operations.
                </li>
                <li>
                  Collaboration: We work together with communities, partners,
                  and other organizations to maximize our impact.
                </li>
                <li>
                  Innovation: We embrace new ideas and approaches to improve our
                  programs and outcomes.
                </li>
                <li>
                  Empowerment: We prioritize solutions that not only meet
                  immediate needs but also empower children for a better future.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mb-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
              <Image
                src={programsImage}
                alt="Our Programs"
                className="rounded-lg"
                width={400}
                height={300}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-red-300 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Programs</h2>
                <ul className="text-base md:text-lg list-disc pl-6">
                  <li>
                    Clothing and Essentials Drive: Collecting and distributing
                    clothing, hygiene products, and other essentials to homeless
                    children.
                  </li>
                  <li>
                    Back-to-School Initiative: Providing school supplies,
                    backpacks, and educational resources to ensure children are
                    prepared for academic success.
                  </li>
                  <li>
                    Holiday Toy Drive: Bringing joy to children during the
                    holiday season with gifts and toys.
                  </li>
                  <li>
                    Mentorship and Support: Offering mentorship programs and
                    emotional support to help children cope with their
                    circumstances and build resilience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center mb-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
              <Image
                src={impactImage}
                alt="Impact"
                className="rounded-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Impact</h2>
              <p className="text-base md:text-lg">
                Since our inception, Hope Horizons has provided assistance to
                over 20,000 homeless children. We have distributed thousands of
                clothing items, school supplies, and toys, and have partnered
                with numerous schools and shelters to reach those in need. Our
                efforts have made a significant difference in the lives of the
                children we serve, helping them to feel valued and supported.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
