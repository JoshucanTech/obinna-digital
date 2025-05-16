import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckIcon } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-[#1A2238] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-3">Pricing</h2>

        <div className="flex justify-start mb-10">
          <Button
            variant="outline"
            className="rounded-full  flex gap-12 bg-gray-200 hover:bg-gray-300"
          >
            <span className="font-bold text-slate-900 ">Choose a Service</span>
            <div className="bg-[#1A2238] rounded-full p-3">
              <ArrowRight className="h-full w-6 text-white" />
            </div>
          </Button>
        </div>

        <div className="bg-black rounded-lg p-8 mb-10">
          <h3 className="text-xl font-bold mb-6">
            Choose a service from the list
          </h3>

          <div className="mb-10">
            <Select>
              <SelectTrigger className="w-2/3 bg-gray-700 border-none h-14 rounded-full">
                <SelectValue placeholder="Google Ads" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="w-2/3 bg-red-600" value="google-ads">
                  Google Ads
                </SelectItem>
                <SelectItem value="facebook-ads">Facebook Ads</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
                <SelectItem value="content-marketing">
                  Content Marketing
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="w-2/3 flex ">
              <div className="bg-gray-700 rounded-full py-4 px-8 w-full md:w-auto flex-1 text-center">
                Flat Fee
              </div>
              <div className="flex items-center">
                <Plus className="mx-4" />
              </div>
              <div className="bg-gray-700 rounded-full py-4 px-8 w-full md:w-auto flex-1 text-center">
                % of ad spend
              </div>
            </div>
            <div className="flex items-center">
              <span className="mx-4">=</span>
            </div>
            <div className="bg-gray-700 rounded-full py-4 px-8 w-full md:w-auto flex-1 text-center">
              Total cost of service
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="w-2/3 flex ">
              <div className="bg-gray-700 rounded-full py-4 px-8 w-full md:w-auto flex-1 text-center">
                Flat Fee
              </div>
            </div>
            <div className="flex items-center opacity-0">
              <span className="mx-4">=</span>
            </div>
            <div className="bg-gray-700 rounded-full py-4 px-8 w-full md:w-auto flex-1 text-center">
              Total cost of service
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="text-xl font-bold mb-2">$1000</p>
          </div>
          <div>
            <p className="text-xl font-bold mb-2">% Ad spend</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Fixed Price Guarantees:</h4>
            <ul className="space-y-2">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <li key={`guarantee-${i}`} className="flex items-center">
                    <CheckIcon className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-400">Messages</span>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">You may want to add</h4>
            <ul className="space-y-2">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <li key={`add-${i}`} className="flex items-center">
                    <CheckIcon className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-400">Messages</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
