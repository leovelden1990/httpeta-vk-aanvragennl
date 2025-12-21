import ApplicationForm from "@/components/ApplicationForm";
import ukHeroLondon from "@/assets/uk-hero-london.jpg";

const Application = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Color Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${ukHeroLondon})` }}
      />
      {/* Rich gradient overlay for more color */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-800/70 to-purple-900/80 -z-10" />
      {/* Additional subtle pattern overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.25)_0%,transparent_50%)] -z-10" />
      
      <ApplicationForm />
    </div>
  );
};

export default Application;
