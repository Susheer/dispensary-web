export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Sai Clinic – Prescription Manager</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded p-4">
        <p className="text-gray-700 text-center">Prescriptions will be listed here. Add, update, or delete patient instructions securely.</p>
      </div>
    </div>
  );
}