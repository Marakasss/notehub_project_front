import { Metadata } from "next";
import NoteForm from "@/components/NoteForm/NoteForm";

//##########################################################################

export const metadata: Metadata = {
  title: "Create Note",
  description: "Create a new note in NoteHub",
  openGraph: {
    title: "Create Note",
    description: "Create a new note in NoteHub",
    url: "https://notehub-project-front.vercel.app/notes/action/create",
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Note",
    description: "Create a new note in NoteHub",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};

//##########################################################################

const CreateNote = () => {
  return <NoteForm action="create" />;
};

export default CreateNote;
