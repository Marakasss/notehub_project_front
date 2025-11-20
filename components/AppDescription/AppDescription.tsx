import Link from "next/link";
import MagicBento from "../ReactBitsAnimations/MagicBento";
import SocialIconGroup from "../SocialIconGroup/SocialIconGroup";

const AppDescription = () => {
  return (
    <div>
      <div className="hidden  flex-1 lg:flex  justify-center items-center p-4 ">
        <MagicBento
          cards={[
            {
              color: "rgba(6, 5, 16, 0.5)",

              size: "xl",
              children: (
                <>
                  <div className="max-w-5xl mx-auto p-3  h-full flex flex-col ">
                    <h2 className="text-3xl font-bold text-center mb-4">
                      Welcome to NoteHub
                    </h2>
                    {/* Top description */}
                    <p className="text-sm font-bold">
                      NoteHub is a full-featured full-stack application for
                      creating, viewing, editing, and filtering notes. The
                      project showcases my skills in JS Fullstack development,
                      combining a modern frontend with thoughtful UX, and a
                      robust backend built with Node.js/Express and MongoDB for
                      data storage.
                    </p>
                    <div className="w-full max-w-3xl mx-auto p-3 space-y-6">
                      <h1 className="text-xl font-bold mb-6 text-center">
                        Project Technology Stack
                      </h1>

                      {/* Two columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Frontend */}
                        <div className="p-4 h-fit rounded-xl  shadow-md border border-slate-800">
                          <h2 className="text-sm font-semibold mb-3">
                            Frontend
                          </h2>
                          <ul className="space-y-1  text-sm">
                            <li>React / Next.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>React Query</li>
                            <li>Axios</li>
                            <li>Zustand / Context API</li>
                            <li>Next API Routing</li>
                          </ul>
                        </div>

                        {/* Backend */}

                        <Link
                          href={
                            "https://github.com/Marakasss/notehub-project-back"
                          }
                          target="blank"
                        >
                          <div className="p-4 h-fit rounded-xl  shadow-md border border-slate-800">
                            <h2 className="text-sm font-semibold mb-3">
                              Backend
                            </h2>
                            <ul className="space-y-1  text-sm">
                              <li>Node.js / Express</li>
                              <li>MongoDB / Mongoose</li>
                              <li>JWT / Google Authentication</li>
                              <li>Sessions & Cookies</li>
                              <li>REST API architecture</li>
                              <li>Validation with Joi / Yup</li>
                              <li>Cloud storage / file uploads</li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="self-center mt-8">
                      <SocialIconGroup size={36} />
                    </div>
                  </div>
                </>
              ),
            },
          ]}
          textAutoHide={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={false}
          spotlightRadius={1000}
          glowColor="50, 0, 180"
        />
      </div>
      <div
        className="lg:hidden mb-16 sm:ml-12 sm:mr-12 mx-auto text-sm sm:text-base p-6 border border-solid border-sky-950 rounded-2xl 
        opacity-90 shadow-[0_4px_20px_rgba(30,150,120,0.2),0_0_30px_rgba(90,220,190,0.1),0_0_40px_rgba(132,0,255,0.1)]  "
      >
        <div className="max-w-5xl mx-auto   h-full ">
          <h2 className="text-xl font-bold text-center mb-8">
            Welcome to NoteHub
          </h2>

          <div className="flex flex-col">
            <div className="flex flex-col justify-center">
              <p className="text-sm  mb-4">
                NoteHub is a simple and efficient{" "}
                <span className="font-semibold">responsive application</span>{" "}
                designed for managing personal notes. Whether you&apos;re at
                home or on the go, it helps keep your thoughts organized and
                accessible in one place.
              </p>
              <p className="text-sm  mb-4">
                Built with{" "}
                <span className="font-semibold">
                  Next.js, TypeScript, and Zustand
                </span>{" "}
                for state management, NoteHub offers seamless functionality with
                features like:
              </p>
              <ul className="list-disc text-sm pl-6 ">
                <li>User registration via Google Auth</li>
                <li>Note creation and profile editing</li>
                <li>Filtering by tags</li>
                <li>Dynamic routing with real-time validation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDescription;
