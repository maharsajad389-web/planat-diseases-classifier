import { Bug, Droplets, Sun, Wind } from "lucide-react";

const diseases = [
  {
    name: "Late Blight",
    urdu: "آلو کا مرجھانا",
    icon: Droplets,
    description: "Aloo aur tamatar mein hone wali sabse khatarnak bimari",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    name: "Powdery Mildew",
    urdu: "سفید پھپھوندی",
    icon: Wind,
    description: "Patton par safed powder jaisi fungal infection",
    color: "bg-gray-500/10 text-gray-600",
  },
  {
    name: "Bacterial Spot",
    urdu: "دھبے والی بیماری",
    icon: Bug,
    description: "Patton aur phalon par kaale dhabbe",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    name: "Leaf Scorch",
    urdu: "پتوں کا جلنا",
    icon: Sun,
    description: "Garmi aur pani ki kami se patton ka jalna",
    color: "bg-orange-500/10 text-orange-600",
  },
];

const DiseasesInfo = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Aam Plant Bimariyan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hamara AI in sab bimariyon ko pehchaan sakta hai aur aapko sahi ilaaj batata hai
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diseases.map((disease, index) => (
            <div
              key={disease.name}
              className="group p-6 rounded-2xl bg-card card-gradient border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${disease.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <disease.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{disease.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{disease.urdu}</p>
              <p className="text-sm text-muted-foreground">{disease.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseasesInfo;
