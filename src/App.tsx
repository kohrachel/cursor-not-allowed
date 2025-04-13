import { useState, useEffect, useRef } from "react";
import React from "react";

function App() {
  let [startGame, setStartGame] = useState(false);
  return startGame ? <Game /> : <LandingPage setStartGame={setStartGame} />;
}

export default App;

const LandingPage = ({
  setStartGame,
}: {
  setStartGame: (value: boolean) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = () => {
      setStartGame(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setStartGame]);

  return (
    <div className="bg-stone-900 w-full h-full">
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <div className="text-white text-4xl font-bold">Cursor: not-allowed</div>
        <div className="text-white text-sm">
          [HQ TRANSMISSION: LEVEL OMEGA] Agent, The stars have shifted.
          Coordinates no longer align. Your message lies buried in the vaults of
          Sector-9, beneath the cryo-array. Extraction requires Phase Key Sigma
          and retinal imprint. You'll find no map—only echoes. Decrypt only once
          inside. The code breathes and watches. Burn this after thought.
          —Control
        </div>
        <div
          ref={containerRef}
          className="bg-white text-stone-900 px-4 py-2 rounded-md mt-4"
          tabIndex={0}
        >
          Press any key to continue
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  const firstOptionRef = useRef<HTMLDivElement>(null);
  const secondOptionRef = useRef<HTMLDivElement>(null);
  const thirdOptionRef = useRef<HTMLDivElement>(null);
  const fourthOptionRef = useRef<HTMLDivElement>(null);
  const [copiedText, setCopiedText] = useState<string>("");
  const [pastedText, setPastedText] = useState<string>("");
  const pasteBoxRef = useRef<HTMLDivElement>(null);

  // Handle copy with Command+C
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey) {
        e.preventDefault();
        if (e.key === "u") {
          firstOptionRef.current?.focus();
        } else if (e.key === "i") {
          secondOptionRef.current?.focus();
        } else if (e.key === "j") {
          thirdOptionRef.current?.focus();
        } else if (e.key === "k") {
          fourthOptionRef.current?.focus();
        } else if (e.key === "c") {
          // Copy the text of the currently focused element
          const activeElement = document.activeElement;
          if (activeElement && activeElement.textContent) {
            const textToCopy = activeElement.textContent;
            navigator.clipboard
              .writeText(textToCopy)
              .then(() => {
                console.log("Text copied to clipboard:", textToCopy);
                setCopiedText(textToCopy);
              })
              .catch((err) => {
                console.error("Failed to copy text: ", err);
              });
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle paste with Ctrl+V
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "v") {
        e.preventDefault();
        // Use the copiedText value directly
        if (copiedText) {
          console.log("Pasting copied text:", copiedText);
          setPastedText(copiedText);
          pasteBoxRef.current?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [copiedText]); // Add copiedText as a dependency

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="flex flex-col items-center justify-center text-center">
          <p>Select Penguin 0</p>
          <div className="grid grid-cols-2">
            <Option ref={firstOptionRef} count={0} />
            <Option ref={secondOptionRef} count={1} />
            <Option ref={thirdOptionRef} count={2} />
            <Option ref={fourthOptionRef} count={3} />
          </div>
        </div>
      </div>
      <div className="w-1/3 p-4 bg-stone-800 text-white">
        <h2 className="text-xl font-bold mb-4">Clipboard</h2>
        {copiedText ? (
          <div>
            <p className="font-semibold">Copied:</p>
            <p className="mt-2 p-2 bg-stone-700 rounded">{copiedText}</p>
          </div>
        ) : (
          <p className="text-stone-400">Nothing copied yet</p>
        )}

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Paste Box</h2>
          <div
            ref={pasteBoxRef}
            className="min-h-32 p-4 bg-stone-700 rounded border-2 border-dashed border-stone-500 flex items-center justify-center"
          >
            {pastedText === "penguin 0" ? (
              <p>{pastedText}</p>
            ) : pastedText ? (
              <p className="text-stone-400 text-center">WRONG PENGUIN!</p>
            ) : (
              <p className="text-stone-400 text-center">
                Press Ctrl+V to paste
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Using forwardRef to allow the parent component to access the DOM element
const Option = React.forwardRef<HTMLDivElement, { count: number }>(
  ({ count }, ref) => {
    return (
      <div
        ref={ref}
        className="rounded-3xl p-6 w-32 h-32 flex items-center justify-center font-mono"
        tabIndex={0}
      >
        penguin {count}
      </div>
    );
  }
);

// Add display name for the component
Option.displayName = "Option";
