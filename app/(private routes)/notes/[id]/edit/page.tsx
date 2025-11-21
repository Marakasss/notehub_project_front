import NoteForm from "@/components/NoteForm/NoteForm";
import { fetchNoteByIdServer } from "@/lib/api/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";

//##########################################################################

interface EditNoteByIdPageProps {
  params: Promise<{ id: string }>;
}

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

const EditNoteByIdPage = async ({ params }: EditNoteByIdPageProps) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteByIdServer(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteForm action="update" />;
    </HydrationBoundary>
  );
};

export default EditNoteByIdPage;
