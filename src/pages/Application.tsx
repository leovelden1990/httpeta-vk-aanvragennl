import ApplicationForm from "@/components/ApplicationForm";
import ukHeroLondon from "@/assets/uk-hero-london.jpg";

const Application = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${ukHeroLondon})` }}
      />
      <div className="fixed inset-0 bg-background/95 -z-10" />
      
      <ApplicationForm />
    </div>
  );
};

export default Application;
