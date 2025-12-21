import { Card } from "@/components/ui/card";
import { Calendar, Plane, Clock, Shield, ChevronRight, Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderSidebarProps {
  step: number;
  travelers?: number;
  selectedProcessing?: string;
  governmentFee?: number;
  onNext?: () => void;
  onPrevious?: () => void;
  isSubmitting?: boolean;
  isLastStep?: boolean;
}

const processingPrices: Record<string, { name: string; time: string; price: number }> = {
  urgent: { name: "Dringend", time: "1 uur", price: 119.95 },
  fast: { name: "Snel", time: "4 uur", price: 79.95 },
  standard: { name: "Standaard", time: "24 uur", price: 49.95 },
};

const OrderSidebar = ({ 
  step, 
  travelers = 1, 
  selectedProcessing = "fast", 
  governmentFee = 19.28,
  onNext,
  onPrevious,
  isSubmitting = false,
  isLastStep = false
}: OrderSidebarProps) => {
  const selectedOption = processingPrices[selectedProcessing];
  const processingTotal = selectedOption ? selectedOption.price * travelers : 0;
  const governmentTotal = governmentFee * travelers;
  const total = processingTotal + governmentTotal;

  // UK Flag SVG
  const UKFlag = () => (
    <svg viewBox="0 0 60 30" className="w-10 h-6 rounded shadow-sm">
      <clipPath id="uk-clip">
        <rect width="60" height="30" rx="2" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#uk-center)" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );

  // ETA Info Cards - shown for steps 1, 2, 3
  const ETAInfoCards = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
        <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
          <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Geldig gedurende</p>
          <p className="font-semibold text-foreground">2 jaar na afgifte</p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30">
        <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/50">
          <Plane className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Aantal reizen</p>
          <p className="font-semibold text-foreground">Meermaals inreizen</p>
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30">
        <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/50">
          <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Maximaal verblijf</p>
          <p className="font-semibold text-foreground">180 dagen per verblijf</p>
        </div>
      </div>
    </div>
  );

  // Checkout Summary - only for step 4
  const CheckoutSummary = () => (
    <>
      <div className="space-y-3 py-4 border-t border-b">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Overheidskosten</span>
          <span className="text-muted-foreground">€ {governmentTotal.toFixed(2)}</span>
        </div>
        {selectedOption && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{selectedOption.name}, {selectedOption.time}</span>
            <span className="text-muted-foreground">€ {processingTotal.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>
          <span className="text-lg font-bold text-foreground">Totaal</span>
          <p className="text-xs text-muted-foreground">(Inclusief belastingen en toeslagen)</p>
        </div>
        <span className="text-2xl font-bold text-foreground">€ {total.toFixed(2)}</span>
      </div>
    </>
  );

  return (
    <div className="bg-white dark:bg-card rounded-none lg:rounded-r-2xl border shadow-sm overflow-hidden">
      {/* Header with UK flag */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3 mb-6">
          <UKFlag />
          <div>
            <h3 className="text-xl font-bold text-foreground">United Kingdom ETA</h3>
            {step === 4 && (
              <span className="text-sm text-muted-foreground">{travelers} Reiziger{travelers > 1 ? 's' : ''}</span>
            )}
          </div>
        </div>

        {/* Show ETA info cards for steps 1, 2, 3 */}
        {step !== 4 && <ETAInfoCards />}

        {/* Show checkout summary only for step 4 */}
        {step === 4 && <CheckoutSummary />}
      </div>

      {/* Privacy section and buttons */}
      <div className="p-6 pt-4 border-t border-border/50">
        <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg mb-4">
          <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-sm text-foreground">Wij beschermen uw gegevens.</p>
            <a href="/privacy-policy" className="text-sm text-primary hover:underline">Bekijk ons privacybeleid</a>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onNext}
            disabled={isLastStep && isSubmitting}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 text-lg font-semibold rounded-lg"
          >
            {isLastStep && isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Verwerken...
              </>
            ) : (
              <>
                Opslaan en doorgaan
                <ChevronRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          {step > 1 && (
            <button
              onClick={onPrevious}
              className="w-full flex items-center justify-center gap-2 py-3 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Vorige
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSidebar;
