import { Award, ShieldCheck, Clock } from "lucide-react";

const credentials = [
  { icon: Award, label: "PGCE & QTS Certified", sublabel: "Qualified Teacher Status" },
  { icon: ShieldCheck, label: "DBS Checked", sublabel: "Enhanced Disclosure" },
  { icon: Clock, label: "10+ Years Experience", sublabel: "Specialist Maths Teaching" },
];

const ExpertiseBar = () => {
  return (
    <section className="py-10 bg-primary" aria-label="Credentials">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          {credentials.map((cred) => (
            <div key={cred.label} className="flex items-center gap-4 justify-center">
              <cred.icon className="w-8 h-8 text-primary-foreground/80" aria-hidden="true" />
              <div>
                <p className="font-heading font-semibold text-primary-foreground">{cred.label}</p>
                <p className="text-sm text-primary-foreground/70">{cred.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseBar;
