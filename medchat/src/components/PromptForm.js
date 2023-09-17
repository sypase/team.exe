import { useState } from "react";
import styles from "./PromptForm.module.css";
import Link from 'next/link';

export default function PromptForm({ onSubmit, isLoading }) {
  const [prompt, setPrompt] = useState("");

  return (

    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Fire callback...
        if (prompt === "") {
          return;
        }

        onSubmit(prompt);
        setPrompt("");
      }}
    >
      <label>Question</label>
      <input
        className={styles.input}
        type="text"
        value={prompt}
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <input
        className={styles.submitButton}
        type="submit"
        disabled={isLoading}
      />
      <a className={styles.bookdlink} target="_blank" href="https://locahost:5000"> Book a doctor?</a>
      
    </form>
  );
}
