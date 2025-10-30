import MagicBento from "../ReactBitsAnimations/MagicBento";

const AppDescription = () => {
  return (
    <div>
      <div className="hidden  flex-1 lg:flex  justify-center items-center p-4 ">
        <MagicBento
          cards={[
            {
              color: "rgba(6, 5, 16, 0.5)",
              title: "Welcome to NoteHub",
              htmlDescr: `<p>
                NoteHub is a simple and efficient application designed for managing
                 personal notes. It helps keep your thoughts organized and accessible in one place,
                  whether you're at home or on the go.
                  </p>
                  <p>
                  NoteHub is a simple and efficient
                   application designed for managing personal notes.It helps keep your thoughts
                    organized and accessible in one place, whether you're at home or on the go.
                    </p>`,

              size: "xl",
              titleFontStyle: {
                fontSize: "32px",
                fontWeight: "bold",
                color: "#dedae8",
              },
              descriptionFontStyle: { fontSize: "18px", color: "#dedae8" },
              alwaysGlow: true,
            },
          ]}
          textAutoHide={false}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={700}
          particleCount={12}
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
          NoteHub is a simple and efficient application designed for managing
          personal notes. It helps keep your thoughts organized and accessible
          in one place, whether youre at home or on the go.
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
