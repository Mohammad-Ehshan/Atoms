import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import { Companies } from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import Pricing from "@/components/marketing/pricing";
import Whychooseus from "../service/whychooseus";


const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <Companies />
            <Whychooseus/>
            <Features />
            <Analysis />
            <Integration />
            <Pricing />
            <CTA />
        </Wrapper>
    )
};

export default HomePage
