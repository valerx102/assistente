// import { Conversation } from './components/conversation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4 text-center">🚧 Sito in manutenzione 🚧</h1>
      <p className="text-lg text-center">Stiamo lavorando per migliorare l’esperienza. Torneremo presto!</p>
    </main>
  );
}

// Versione originale (commentata per ora)
/*
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
           Agente AI
        </h1>
		
        <Conversation />
      </div>
    </main>
  );
}
*/
