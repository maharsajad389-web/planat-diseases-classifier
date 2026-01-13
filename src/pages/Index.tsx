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
          description: "Late blight is a fungal infection caused by Phytophthora infestans. This disease creates brown-black spots on leaves that spread rapidly.",
          treatment: "Apply copper-based fungicide or Mancozeb spray. Remove and burn affected leaves. Isolate the crop to prevent spread to healthy plants.",
          prevention: "Plant resistant varieties. Use drip irrigation. Maintain proper spacing between plants for better air circulation.",
        },
        {
          disease: "Healthy Plant",
          confidence: 0.95,
          isHealthy: true,
          description: "Your plant is perfectly healthy! No signs of disease or stress detected. The leaves are green and vibrant.",
          treatment: "",
          prevention: "Continue your good practices. Regular watering, proper sunlight, and nutrition will keep your plants healthy.",
        },
        {
          disease: "Powdery Mildew",
          confidence: 0.85,
          isHealthy: false,
          description: "Powdery mildew creates a white powder-like coating on leaves. This fungal infection spreads through air and is more common in warm weather.",
          treatment: "Apply neem oil or sulfur-based fungicide. Baking soda solution (1 tbsp per liter of water) also works effectively.",
          prevention: "Keep plants in full sunlight. Avoid overwatering. Prune leaves for better air circulation.",
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
                Upload Plant Image
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Upload a clear image of your plant's leaf. Our AI will identify any disease within seconds.
              </p>
            </div>

            <ImageUploader onImageSelect={handleImageSelect} isLoading={isAnalyzing} />

            {result && (
              <div className="mt-12">
                <ResultCard result={result} />
                <div className="flex justify-center mt-6">
                  <Button variant="outline" onClick={handleReset} className="gap-2">
                    <RefreshCw className="w-4 h-4" />
                    New Image
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
                About This Project
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                This is a Final Year Project designed to help farmers and gardening enthusiasts. 
                Our goal is to make AI technology accessible to everyone so they can quickly identify 
                crop diseases and apply appropriate treatments. This system uses deep learning models 
                capable of identifying more than 38 different plant diseases.
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
