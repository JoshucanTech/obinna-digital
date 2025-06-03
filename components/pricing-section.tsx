"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const guarantees = [
  "24/7 Campaign Monitoring",
  "Monthly Performance Reports",
  "Dedicated Account Manager",
  "A/B Testing & Optimization",
  "Conversion Tracking Setup",
  "Competitor Analysis",
  "Landing Page Optimization",
  "Custom Dashboard Access",
  "Weekly Strategy Calls",
  "Performance Guarantees",
];

const addOns = [
  "Advanced Analytics Setup",
  "Custom Creative Design",
  "Video Ad Production",
  "Influencer Partnerships",
  "Retargeting Campaigns",
  "Multi-Platform Integration",
  "Brand Strategy Consultation",
  "Market Research Analysis",
  "Competitor Intelligence",
  "Priority Support",
];

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("pricing");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital Marketing Pricing
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our transparent pricing model combines a flat management fee with a
            percentage of your ad spend, ensuring our incentives align with your
            success.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-black/50 backdrop-blur-lg border-white/10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <CardHeader className="border-b border-white/10 pb-6">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-blue-400" />
                Full-Funnel Digital Marketing
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-8 relative z-10">
              {/* Pricing Formula */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6 bg-white/5 rounded-xl mb-8">
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-6 py-4 text-center">
                  <p className="text-xl font-bold text-white">$1,500</p>
                  <span className="text-blue-400 text-sm">Flat Fee</span>
                </div>
                <div className="text-gray-400 text-2xl">+</div>
                <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-lg px-6 py-4 text-center">
                  <p className="text-xl font-bold text-white">15%</p>
                  <span className="text-indigo-400 text-sm">of Ad Spend</span>
                </div>
                <div className="text-gray-400 text-2xl">=</div>
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg px-6 py-4 text-center">
                  <p className="text-xl font-bold text-white">Total Cost</p>
                  <span className="text-green-400 text-sm">
                    Monthly Investment
                  </span>
                </div>
              </div>

              {/* Example Calculation */}
              <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-xl border border-blue-500/20 p-6 mb-8">
                <h3 className="text-lg font-medium text-center mb-4">
                  Example Calculation
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-400">
                      For $5,000 monthly ad spend:
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <p className="text-lg font-bold">$1,500</p>
                      <span className="text-gray-400">+</span>
                      <p className="text-lg font-bold">$750</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Base + 15% of $5,000
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">
                      Total Monthly Investment:
                    </p>
                    <p className="text-2xl font-bold text-green-400 mt-2">
                      $2,250
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Guarantees */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5 text-yellow-400" />
                    <h3 className="text-lg font-medium">Included Guarantees</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {guarantees.slice(0, 6).map((guarantee, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: isVisible ? 1 : 0,
                          x: isVisible ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">
                          {guarantee}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Add-ons */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-blue-400" />
                    <h3 className="text-lg font-medium">Available Add-ons</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {addOns.slice(0, 6).map((addOn, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: isVisible ? 1 : 0,
                          x: isVisible ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        <div className="h-4 w-4 rounded-full border border-blue-400 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{addOn}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-8 py-6 h-auto text-lg">
            Get Started Today
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            No setup fees • Cancel anytime • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
