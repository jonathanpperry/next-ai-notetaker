"use client";
import { NoteProviderContext } from "@/providers/NoteProvider";
import { createContext, useContext } from "react";
function useNote() {
  const context = useContext(NoteProviderContext);
  if (!context) throw new Error("useNote must be used within a NoteProvider");

  return context;
}

export default useNote;
