import { Info } from "lucide-react"; // Optionnel : pour des icônes

async function getHFStats(username: string) {
  const res = await fetch(`https://huggingface.co/api/models?author=${username}`, {
    next: { revalidate: 3600 } // Met à jour les données toutes les heures
  });
  
  if (!res.ok) return null;
  
  const models = await res.json();
  const totalDownloads = models.reduce((acc: number, model: any) => acc + (model.downloads || 0), 0);
  
  return {
    count: models.length,
    downloads: totalDownloads
  };
}

export default async function HFStats() {
  const stats = await getHFStats("Vlor999");

  if (!stats) return <p>Impossible de charger les stats.</p>;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl text-white shadow-lg">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span className="text-yellow-400">🤗</span> Hugging Face Activity
      </h3>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-sm text-slate-400">Models</p>
          <p className="text-2xl font-mono font-bold text-blue-400">{stats.count}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-sm text-slate-400">Downloads</p>
          <p className="text-2xl font-mono font-bold text-green-400">{stats.downloads.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}