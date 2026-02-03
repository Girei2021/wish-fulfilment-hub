import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <span className="text-[150px] md:text-[200px] font-heading font-bold text-gradient-gold leading-none">
            404
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 -mt-6">
            Page Not Found
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/">
                <Home size={18} />
                Back to Home
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
