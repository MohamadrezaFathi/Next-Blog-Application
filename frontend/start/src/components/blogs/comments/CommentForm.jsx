"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Loading from "@/ui/Loading";
import SubmitButton from "@/ui/SubmissionButton";
import TextArea from "@/ui/TextArea";
import { createComment } from "@/lib/actions";

const initialState = {
  error: "",
  message: "",
};

export default function CommentForm({ postId, parentId, onClose }) {
  const [text, setText] = useState("");
  const [state, formAction, isPending] = useActionState(
    createComment,
    initialState
  );

  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      setText("");
      ref.current?.reset();
      onClose();
      router.refresh();
    }

    if (state?.error) {
      toast.error(state.error);
    }
  }, [state, onClose, router]);

  return (
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-md">
        <form
          ref={ref}
          className="space-y-7"
          action={(formData) =>
            formAction({
              formData,
              postId,
              parentId,
            })
          }
        >
          <TextArea
            name="text"
            label="متن نظر"
            value={text}
            isRequired
            onChange={(e) => setText(e.target.value)}
          />

          <div className="mt-8">
            {isPending ? (
              <Loading />
            ) : (
              <SubmitButton type="submit" className="w-full">
                {parentId ? "ثبت پاسخ" : "ثبت نظر"}
              </SubmitButton>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}