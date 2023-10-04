import React from "react";

const About = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-8 mt-6 text-4xl font-bold leadi text-center sm:text-5xl">
            ABOUT US
          </h2>
          <p className="p-2 text-sm font-medium tracki text-center uppercase">
            <b>How the mission started</b>
          </p>
          <h4 className=" p-6 font-medium text-base md:text-lg">
            It all started 1995,when I came back from mission school at (Full
            stature mission international school, Ibadan). The first mission
            field was at Amberi,Eleyoka,Falokun all Ajase IPO kwara started and
            from there to others villages.
          </h4>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>

              <p className="mb-2 pt-3 text-sm text-gray-900">
                The goals To reach the unreached for Christ Jesus.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="mb-2 pt-3 text-sm text-gray-900">
                The mission To help the less privileged one through giving to
                them in cash and in kind,bringing them to the knowledge of
                Christ.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="mb-2 pt-3 text-sm text-gray-900">
                The vision To gain the world for Christ.
              </p>
            </div>
            <div className="max-w-md">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-12 h-12 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="mb-2 pt-3 text-sm text-gray-900">
                Places covered We have covered more than two hundred villages
                (200)ranging from Osun,Kwara, Oyo etc.
              </p>
            </div>
          </div>
          <div className=""></div>

          <div class="lg:px-32 md:px-2 w-full  ">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">1. Bible</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">2. Donation </a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">3. Motorcycle</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">
                  4. Buses for outreach
                </a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">5. Generator</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">6. Video scope</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">
                  7. use or unused clothes
                </a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">
                  8. Shoes and bag for the privileges ones
                </a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">9. Food items</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">
                  10. Drugs for medical outreach
                </a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">
                  11. Roofing sheets
                </a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">
                  12. Educational material books
                </a>
              </li>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
