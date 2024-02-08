import React from "react";
import { Link } from "react-router-dom";

function About() {
  const dummyData = {
    title: "Welcome to Our Company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    teamMembers: [
      { id: 1, name: "John Doe", role: "Founder" },
      { id: 2, name: "Jane Doe", role: "Lead Developer" },
      { id: 3, name: "Bob Smith", role: "Designer" },
    ],
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{dummyData.title}</h2>
        <p className="text-gray-600 mb-6">{dummyData.description}</p>

        <h3 className="text-lg font-semibold mb-2">Our Team</h3>
        <ul className="list-disc pl-6">
          {dummyData.teamMembers.map((member) => (
            <li key={member.id} className="text-gray-700">
              {member.name} - {member.role}
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Link
            to="/"
            className="bg-[#ff5100] block md:inline-block mt-10 font-bold p-2 cursor-pointer px-10 rounded-lg text-white mx-auto text-center items-center"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
