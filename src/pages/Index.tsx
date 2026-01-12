import { useState, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageUploader from "@/components/ImageUploader";
import ResultCard, { ClassificationResult } from "@/components/ResultCard";
import DiseasesInfo from "@/components/DiseasesInfo";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

// Mock classification function - will be replaced with AI
const mockClassify = (): Promise<ClassificationResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const diseases: ClassificationResult[] = [
        {
          disease: "Tomato Late Blight",
          confidence: 0.92,
          isHealthy: false,
          description: "Late blight ek fungal infection hai jo Phytophthora infestans ki wajah se hota hai. Ye bimari patton par brown-black spots banati hai jo tezi se phailte hain.",
          treatment: "Copper-based fungicide ya Mancozeb spray karein. Mutasir patton ko hata dein aur jalaa dein. Fasal ko alag karein taake sehat mand plants tak na phail sake.",
          prevention: "Resistant varieties lagayein. Drip irrigation istemal karein. Plants ke darmiyan munasib fasla rakhein hawa ke behtar guzar ke liye.",
        },
        {
          disease: "Healthy Plant",
          confidence: 0.95,
          isHealthy: true,
          description: "Aapka plant bilkul sehat mand hai! Koi bimari ya stress ke nishaan nahi hain. Patte hare aur chamakdar hain.",
          treatment: "",
          prevention: "Apni achi practices jari rakhein. Baqa'ida pani dein, munasib dhoop aur ghiza frahum karein apne plants ko sehat mand rakhne ke liye.",
        },
        {
          disease: "Powdery Mildew",
          confidence: 0.85,
          isHealthy: false,
          description: "Powdery mildew patton par safed powder jaisi paras banata hai. Ye fungal infection hawa ke zariye phailti hai aur garmi mein zyada hoti hai.",
          treatment: "Neem oil ya sulfur-based fungicide spray karein. Baking soda solution (1 tbsp per liter pani) bhi kaam karta hai.",
          prevention: "Plants ko bharpur dhoop mein rakhein. Zyada pani dene se bachein. Hawa ke achay guzar ke liye patton ki katai karein.",
        },
      ];
      resolve(diseases[Math.floor(Math.random() * diseases.length)]);
    }, 2000);
  });
};

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const classifierRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    classifierRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageSelect = async (file: File, preview: string) => {
    setSelectedImage(preview);
    setResult(null);
    setIsAnalyzing(true);
    
    try {
      const classificationResult = await mockClassify();
      setResult(classificationResult);
    } catch (error) {
      console.error("Classification error:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setResult(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection onGetStarted={handleGetStarted} />
        
        {/* Classifier Section */}
        <section ref={classifierRef} id="classifier" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
                Plant Ka Photo Dalein
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Apne plant ke patte ki saaf tasveer upload karein. Hamara AI kuch hi seconds mein bimari ki pehchaan kar dega.
              </p>
            </div>

            <ImageUploader onImageSelect={handleImageSelect} isLoading={isAnalyzing} />

            {result && (
              <div className="mt-12">
                <ResultCard result={result} />
                <div className="flex justify-center mt-6">
                  <Button variant="outline" onClick={handleReset} className="gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Nayi Tasveer
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Diseases Info */}
        <div id="diseases">
          <DiseasesInfo />
        </div>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
                Is Project Ke Baare Mein
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ye Final Year Project hai jo kisanon aur baghbani ke shauqeen logon ki madad ke liye banaya gaya hai. 
                Hamara maqsad AI technology ko aam logon tak pohanchana hai taake wo apni faslon ki bimarion ko jaldi 
                pehchaan sakein aur munasib ilaaj kar sakein. Is system mein deep learning models istemal kiye gaye hain 
                jo 38 se zyada plant bimarion ko pehchaan sakte hain.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Deep Learning", "Computer Vision", "TensorFlow", "React", "TypeScript"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
