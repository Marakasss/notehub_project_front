"use client";

import { useCallback, useEffect, useId, useState } from "react";
import * as Yup from "yup";
import type { NewNoteData, Note } from "../../types/note.ts";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { createNote, editNoteById, fetchNoteById } from "@/lib/api/clientApi";
import { useParams, useRouter } from "next/navigation";
import { useNoteDraftStore } from "@/lib/store/noteStore";
import { tags } from "@/constants/tags";

import Modal from "@/components/UI/Modal/Modal";
import CustomTagSelect from "@/components/UI/CustomSelect/CustomSelect";
import Input from "@/components/UI/Input/Input";

import Button from "@/components/UI/Button/Button";

interface NoteFormProps {
  action: "create" | "update";
}

const NoteForm = ({ action }: NoteFormProps) => {
  const fieldId = useId();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { draft, setDraft, clearDraft } = useNoteDraftStore();
  const [alert, setAlert] = useState<{ [key: string]: string }>({});

  const onClose = useCallback(() => {
    router.replace("/notes/filter/All");
  }, [router]);

  const { id } = useParams();

  const { data: noteToUpdate } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(String(id)),
    refetchOnMount: false,
  });

  //HandleChange-------------------------------------------
  useEffect(() => {
    if (action === "update" && noteToUpdate) {
      const { tag, title, content } = noteToUpdate;
      setDraft({ tag, title, content });
    }
  }, [action, noteToUpdate, setDraft]);

  const handleChange = async (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    const updatedDraft = {
      ...draft,
      [name]: value,
    };
    setDraft(updatedDraft);

    validationSchema
      .validateAt(name, updatedDraft)
      .then(() => setAlert((prev) => ({ ...prev, [name]: "" })))
      .catch((err) => setAlert((prev) => ({ ...prev, [name]: err.message })));
  };

  //ValidationSchema-------------------------------------------

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title can't be empty")
      .min(3, "Title must be at least 3 characters")
      .max(50, "Title is too long"),

    content: Yup.string().max(500, "Note is too long"),

    tag: Yup.string().oneOf(tags, "Invalid tag").required("Tag is required"),
  });

  //Post notes func-------------------------------------------

  const { mutate } = useMutation({
    mutationFn:
      action === "update" && noteToUpdate
        ? (values: NewNoteData) => editNoteById(noteToUpdate?._id, values)
        : (values: NewNoteData) => createNote(values),

    onSuccess: () => {
      onClose();
      clearDraft();
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  //HandleSubmit-------------------------------------------

  const handleSubmit = async (formData: FormData) => {
    const values: NewNoteData = {
      title: (formData.get("title") as string) || "",
      content: (formData.get("content") as string) || "",
      tag: draft.tag,
    };

    mutate(values);
  };

  //Button disabled logic-------------------------------------------

  const isFormValid =
    draft.title.trim().length >= 3 &&
    draft.title.trim().length <= 50 &&
    draft.content.trim().length <= 500;

  return (
    <Modal onClose={onClose}>
      <form
        action={handleSubmit}
        className="w-fit min-w-[300px] sm:min-w-[360px] flex justify-center items-center flex-col  gap-2 sm:gap-5 p-3 sm:p-8 self-center  border border-cyan-900 rounded-2xl    bg-[linear-gradient(135deg,rgba(5,51,69,0.9),rgba(5,51,69,0.8))] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      >
        {/* -----Select tag field----- */}

        <CustomTagSelect
          fieldId={fieldId}
          tags={tags}
          draft={draft}
          handleChange={handleChange}
        />

        {/* -----Title input field----- */}

        <div className="group w-full">
          <label htmlFor={`${fieldId}-title`} className="text-xs mb-2">
            Title
          </label>
          <Input
            id={`${fieldId}-title`}
            type="text"
            name="title"
            onChange={handleChange}
            defaultValue={draft.title}
            TWclasses="w-full min-w-[220]"
          />

          {alert.title && <div className="text-xs">{alert.title}</div>}
        </div>

        {/* -----Content textarea field----- */}

        <div className="group w-full flex flex-col">
          <label className="text-xs mb-2" htmlFor={`${fieldId}-content`}>
            Content
          </label>
          <textarea
            id={`${fieldId}-content`}
            name="content"
            rows={8}
            className=" border border-cyan-900 rounded-xl p-2 w-auto  bg-transparent outline-none 
                          transition-all duration-300
                          focus:ring focus:ring-cyan-800 focus:border-cyan-800
                          focus:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
            onChange={handleChange}
            defaultValue={draft.content}
          />
          {alert.content && (
            <div className="text-xs text-center mt-1 text-cyan-300">
              {alert.content}
            </div>
          )}
        </div>

        {/* -----Action buttons----- */}

        <div className="flex justify-center gap-5">
          <Button
            onClick={onClose}
            type="button"
            textContent="Cancel"
            style={{ backgroundColor: "rgba(25,105,125,0.2)" }}
          ></Button>
          <Button
            type="submit"
            disabled={!isFormValid}
            textContent={action === "create" ? "Create" : "Update"}
            style={{ backgroundColor: "rgba(25,105,125,0.2)" }}
          ></Button>
        </div>
      </form>
    </Modal>
  );
};

export default NoteForm;
