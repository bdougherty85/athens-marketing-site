import { ResourcePageLayout } from '../../components/ResourcePageLayout';

const StrategicSalesGuide = () => {
  const benefits = [
    "Master the WHAT-SO WHAT-NOW WHAT strategic framework for opportunity analysis",
    "Learn to identify and leverage Business Drivers, Initiatives, and Compelling Events",
    "Develop competitive strategies using proven frameworks (Full Frontal, Flanking, Niche, etc.)",
    "Create tactical plans with clear Purpose, Process, and Payoff for every sales call",
    "Build comprehensive Target Opportunity Plans that win complex B2B deals",
    "Understand how to assess competitive environment and determine if opportunities are worth winning"
  ];

  const content = (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Strategic Sales Opportunity Planning</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        This comprehensive guide is based on Pete Athens' Sales Opportunity Workshop, refined over
        31 years of experience with Fortune 500 companies. Learn the exact framework used by top-performing
        sales professionals to win complex, strategic deals.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">The Three-Phase Framework: WHAT | SO WHAT | NOW WHAT</h3>

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h4 className="font-bold text-xl mb-3">Phase 1: WHAT - Business Environment Analysis</h4>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Business Profile:</strong> Understanding customer's products, services, markets, and key competitors</li>
          <li><strong>Business Drivers:</strong> Internal and external forces driving the customer's business (regulatory changes, competition, customer demands)</li>
          <li><strong>Business Initiatives:</strong> Programs and responses the customer has put in place to address their drivers</li>
        </ul>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h4 className="font-bold text-xl mb-3">Phase 2: SO WHAT - Strategic Analysis</h4>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Compelling Event:</strong> Time-stamped urgency or deadline forcing customer action</li>
          <li><strong>Pain or Gain:</strong> What specific problem are you solving or opportunity are you creating?</li>
          <li><strong>The Competition:</strong> Who are you competing against and what is their likely strategy?</li>
          <li><strong>Unique Business Value:</strong> How do you differentiate and quantify your value?</li>
          <li><strong>Customer Milestones:</strong> Understanding the customer's decision-making process</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg mb-6">
        <h4 className="font-bold text-xl mb-3">Phase 3: NOW WHAT - Tactical Execution</h4>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Strategy Selection:</strong> Choose between Full Frontal, Flanking, Niche, Defensive strategies</li>
          <li><strong>People Environment:</strong> Map key stakeholders, their motives (task and personal), and social styles</li>
          <li><strong>Tactical Planning:</strong> Define Who, What, When, and Resources needed for each action</li>
          <li><strong>Purpose-Process-Payoff:</strong> Clear objectives for every customer interaction</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Six Warning Signals to Watch For</h3>
      <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
        <li>Change in Key Decision Makers</li>
        <li>Change in Representation</li>
        <li>Real/Perceived Results Concerns</li>
        <li>Complacency in the account</li>
        <li>Expansion/Contraction of Operations</li>
        <li>Tender or Contract Expiring</li>
      </ol>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
        <p className="font-semibold text-lg text-gray-900 mb-2">Key Question:</p>
        <p className="text-gray-700 italic">
          "Is this project linked to one of the client's key business initiatives, and what measurable
          impact will completion have on their business?"
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Strategic Decision Framework</h3>
      <p className="text-gray-700 mb-4">
        Before investing resources, answer these critical questions:
      </p>
      <ul className="space-y-3 text-gray-700">
        <li><strong>Is it worth winning?</strong> Order amount, profitability, future potential, strategic value</li>
        <li><strong>Can we effectively compete?</strong> Do we have the technical, commercial, and physical resources?</li>
        <li><strong>Can we expect to win?</strong> Do we have access to key players and champions?</li>
      </ul>
    </div>
  );

  const downloadContent = `STRATEGIC SALES OPPORTUNITY PLANNING GUIDE
Athens School of Selling - Pete Athens

===========================================
THE THREE-PHASE FRAMEWORK
===========================================

PHASE 1: WHAT - Business Environment Analysis
----------------------------------------------
1. Business Profile
   - What are the customer's products and services?
   - What are their key markets?
   - Who are their key customers and competitors?
   - What is driving the customer's business internally and externally?

2. Business Drivers
   - Making, Selling, Delivering Products
   - Right Skill Mix? Reorganization?
   - Regulatory Changes
   - "Nightmare Competitors"
   - Customer Satisfaction and Loyalty
   - Revenue, Cost, and Metrics
   - Shareholder Equity

3. Business Initiatives
   - What reactions, responses, programs has the customer put in place?
   - Is this project linked to a key business initiative?
   - What measurable impact will completion have?
   - Is there a budget? Timeline? Milestones?

PHASE 2: SO WHAT - Strategic Analysis
--------------------------------------
1. Compelling Event
   - Why does the customer HAVE to act?
   - What is the deadline for decision?
   - What are consequences if delayed?
   - What is the payback if completed on time?

2. Competition Analysis
   - Who are our competitors?
   - Do they have an advantage or edge?
   - What is their likely solution and strategy?

3. Competitive Environment Questions
   IS IT WORTH WINNING?
   - Order amount and profitability?
   - Future business potential (1-3 years)?
   - Strategic value beyond revenue?

   CAN WE COMPETE?
   - Do we have a sustainable solution?
   - Do we have required resources?
   - Do we bring Unique Business Value?
   - Is our value statement strong enough?

4. Customer Milestones
   - How will they determine need for change?
   - How will they find options?
   - How will they develop evaluation criteria?
   - How will they measure ROI?
   - What will be the specific basis for award?

PHASE 3: NOW WHAT - Tactical Execution
---------------------------------------
1. Strategy Selection Framework
   - Full Frontal: Significant advantage over competitors
   - Flanking: Can change/expand buying criteria
   - Niche: Win profitable segment
   - Defensive: Protect existing business
   - Fragment/Delay: Create compelling event or buy time

2. People Environment
   - Who are the key players?
   - What is our status with them?
   - Do we have champions or advocates?
   - Can they influence decision criteria?

3. Key Stakeholder Motives
   TASK MOTIVES:
   - Less Cost
   - Less Effort
   - Increased Quality/Output
   - Increased Profit

   PERSONAL MOTIVES:
   - Power
   - Approval
   - Recognition
   - Respect

4. Tactical Planning Components
   - WHO will execute the activity?
   - WHAT needs to be accomplished?
   - WHEN will it happen?
   - WHAT resources are needed? (time, people, money, material)

===========================================
SIX WARNING SIGNALS
===========================================
1. Change in Key Decision Makers
2. Change in Representation
3. Real/Perceived Results Concerns
4. Complacency
5. Expansion/Contraction of Operations
6. Tender or Contract Expiring

===========================================
CRITICAL SUCCESS FACTORS
===========================================
✓ Link opportunity to customer's key business initiatives
✓ Identify and create compelling events
✓ Understand all stakeholder motives (task AND personal)
✓ Build champions who can influence criteria
✓ Quantify unique business value in customer's terms
✓ Develop tactical plans with clear Purpose-Process-Payoff
✓ Monitor warning signals continuously

===========================================
About Pete Athens
===========================================
31 years with Nalco/Ecolab, 5 years with Dyno Nobel
Roles: AVP, Training Director, CAM, District Manager, Sales
Bucknell University, BSME | US Army Veteran
Pittsburgh, PA

© Athens School of Selling
www.athensschoolofselling.com
`;

  return (
    <ResourcePageLayout
      title="Strategic Sales Opportunity Planning Guide"
      subtitle="FREE COMPREHENSIVE GUIDE"
      description="Master the art of strategic selling with the proven WHAT-SO WHAT-NOW WHAT framework used by Fortune 500 sales teams."
      benefits={benefits}
      content={content}
      resourceName="Strategic Sales Opportunity Planning Guide"
      downloadContent={downloadContent}
    />
  );
};

export default StrategicSalesGuide;
