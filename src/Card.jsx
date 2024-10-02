import React from "react";

const Card = () => {
  return (
    <div className="w-full flex #f5f5f7 justify-center items-center flex-col  p-10">
      <div className="w-5/12 shadow-2xl p-5  rounded-2xl">
        <div>
          <img
            className="rounded-2xl "
            src="https://media.licdn.com/dms/image/v2/D5612AQEg8RWVqS_1yQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721906313677?e=2147483647&v=beta&t=XBe2mPTMpA0YEx-f02uC-l1_rpF4PdsjzuNPLS09jBg"
            alt=""
            srcset=""
          />
        </div>
        <div className="space-y-1">
          <h1 className="font-bold text-4xl">Quantum Bio-Technology</h1>
          <h2 className="font-semibold text-gray-500 text-lg ">Uves khan</h2>
          <h3 className="font-semibold text-gray-500 text-lg">Fahad khan</h3>
          <p className="text-justify">
            We’re thrilled to announce the launch of our new tutor-student
            matching platform, designed to make personalized learning more
            accessible for everyone! This exciting subpart of our main platform
            connects students with experienced tutors across a wide range of
            subjects, from academic support to skill development. Whether you
            need help with math, science, or even non-academic topics like
            coding or language learning, we’ve got you covered. Our platform
            offers key features to make the process easy and transparent.
            Students can browse detailed tutor profiles, check their
            qualifications, read reviews from past learners, and select the
            tutor that best fits their needs. Tutors have the freedom to set
            their own pricing, making the service flexible and affordable for
            everyone. With an intuitive messaging system, scheduling lessons is
            a breeze, and our secure payment system ensures a smooth transaction
            process. This launch marks a new era of education where finding the
            right tutor is simple, fast, and personalized. We’re here to empower
            students to achieve their academic and personal goals with expert
            guidance. Visit our platform today to explore and find the perfect
            tutor for your learning journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
