// Enable the use of the 'client' environment "use client";
"use client";

// Import styles from the module './page.css'
import styles from "./page.module.css";

//Import the 'useState' hook from React import { useState } from "react"
import { useState } from "react";

import PromptForm from "@/components/PromptForm"
// import myImage from "./photo1.webp";

// Define state variables 'choices' and 'isLoading' using the 'useState' hook 
export default function Home() {
  const [choices, setChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    //main component with defined styles
    <main className={styles.main}>
      
      {/* <img src={myImage} alt="My Image" className={styles.image} /> */}

      <div className={styles.card}>
        <p>MedCHAT💊</p>
        <PromptForm
          isLoading={isLoading}
          onSubmit={async (prompt) => {
            setIsLoading(true);
            
             // Make a POST request to '/api/chat-gpt' with the user's prompt
            const response = await fetch("/api/chat-gpt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                prompt,
              }),
            });

            setIsLoading(false);
            // Parse the response and update the 'choices' state
            const result = await response.json();
            setChoices(result.choices);
          }}
        />

        {choices.map((choice) => {
          console.log(choice);
          return (
            <p className={styles.response} key={choice.index}>
              {choice.message.content}
            </p>
          );
        })}
      </div>
    </main>
  );
}
