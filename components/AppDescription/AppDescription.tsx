import MagicBento from "../ReactBitsAnimations/MagicBento";

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
                  <div className="max-w-5xl mx-auto p-3  h-full ">
                    <h2 className="text-3xl font-bold text-center mb-8">
                      Welcome to NoteHub
                    </h2>

                    <div className="flex flex-col">
                      <div className="flex flex-col justify-center">
                        <p className="text-lg  mb-4">
                          NoteHub is a simple and efficient{" "}
                          <span className="font-semibold">
                            responsive application
                          </span>{" "}
                          designed for managing personal notes. Whether
                          you&apos;re at home or on the go, it helps keep your
                          thoughts organized and accessible in one place.
                        </p>
                        <p className="text-lg  mb-4">
                          Built with{" "}
                          <span className="font-semibold">
                            Next.js, TypeScript, and Zustand
                          </span>{" "}
                          for state management, NoteHub offers seamless
                          functionality with features like:
                        </p>
                        <ul className="list-disc text-lg pl-6 ">
                          <li>User registration via Google Auth</li>
                          <li>Note creation and profile editing</li>
                          <li>Filtering by tags</li>
                          <li>Dynamic routing with real-time validation</li>
                        </ul>
                      </div>
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
          clickEffect={true}
          spotlightRadius={700}
          glowColor="50, 0, 180"
        />
      </div>
      <div
        className="lg:hidden mb-16 sm:ml-12 sm:mr-12 mx-auto text-sm sm:text-base p-6 border border-solid border-sky-950 rounded-2xl 
        opacity-90 shadow-[0_4px_20px_rgba(30,150,120,0.2),0_0_30px_rgba(90,220,190,0.1),0_0_40px_rgba(132,0,255,0.1)]  "
      >
        <h1 className="mb-3  font-bold text-xl sm:text-3xl">
          Welcome to NoteHub
        </h1>
        <p>
          NoteHub is a simple and efficient responsive application designed for
          managing personal notes. It helps keep your thoughts organized and
          accessible in one place, whether youre at home or on the go.
        </p>
        <p>
          NoteHub is a simple and efficient application designed for managing
          personal notes.It helps keep your thoughts organized and accessible in
          one place, whether youre at home or on the go.
        </p>
      </div>
    </div>
  );
};

export default AppDescription;
