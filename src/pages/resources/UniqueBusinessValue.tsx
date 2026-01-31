import { ResourcePageLayout } from '../../components/ResourcePageLayout';

const UniqueBusinessValue = () => {
  const benefits = [
    "Learn the proven framework for Creating, Capturing, and Communicating business value",
    "Master the art of building quantifiable ROI business cases",
    "Understand how to differentiate from competitors through unique value propositions",
    "Develop skills to articulate value in three key areas: Safety & Reliability, Continuous Improvement, and Innovation",
    "Create compelling value stories that resonate with executive decision-makers",
    "Transform technical features into measurable business outcomes"
  ];

  const content = (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Creating Unique Business Value</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        In today's competitive marketplace, price alone doesn't win deals - unique, quantifiable
        business value does. This comprehensive guide teaches you how to create, capture, and
        communicate value that differentiates you from every competitor.
      </p>

      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-xl mb-8">
        <h3 className="text-2xl font-bold mb-4">The Three Pillars of Value Selling</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="text-xl font-bold mb-2">CREATE</h4>
            <p className="text-purple-100">Identify opportunities to deliver measurable business impact</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">CAPTURE</h4>
            <p className="text-purple-100">Quantify the financial value in customer's terms</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">COMMUNICATE</h4>
            <p className="text-purple-100">Present value in compelling, credible business cases</p>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Three Key Value Areas</h3>

      <div className="space-y-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h4 className="font-bold text-xl mb-3 text-blue-900">1. Safety & Reliability</h4>
          <p className="text-gray-700 mb-3">
            Demonstrate how your solution reduces risk, improves safety, and increases operational reliability.
          </p>
          <div className="bg-white p-4 rounded mt-3">
            <p className="font-semibold mb-2 text-gray-900">Value Metrics:</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Reduced downtime (hours/year × cost per hour)</li>
              <li>• Lower maintenance costs (% reduction × annual spend)</li>
              <li>• Decreased safety incidents (incidents avoided × cost per incident)</li>
              <li>• Extended asset life (years × replacement cost)</li>
              <li>• Reduced insurance premiums</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
          <h4 className="font-bold text-xl mb-3 text-green-900">2. Continuous Improvement</h4>
          <p className="text-gray-700 mb-3">
            Show measurable operational improvements that drive efficiency and reduce costs.
          </p>
          <div className="bg-white p-4 rounded mt-3">
            <p className="font-semibold mb-2 text-gray-900">Value Metrics:</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Increased throughput (units/hour × margin per unit)</li>
              <li>• Reduced waste (% reduction × annual waste cost)</li>
              <li>• Labor savings (hours saved × fully-loaded labor rate)</li>
              <li>• Energy efficiency (kWh saved × rate + sustainability value)</li>
              <li>• Quality improvements (defects reduced × cost per defect)</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
          <h4 className="font-bold text-xl mb-3 text-purple-900">3. Innovation</h4>
          <p className="text-gray-700 mb-3">
            Articulate how your solution enables new capabilities, revenue streams, or competitive advantages.
          </p>
          <div className="bg-white p-4 rounded mt-3">
            <p className="font-semibold mb-2 text-gray-900">Value Metrics:</p>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• New revenue opportunities (market size × capture rate)</li>
              <li>• Faster time-to-market (days saved × opportunity cost)</li>
              <li>• Competitive differentiation (market share gain × revenue)</li>
              <li>• Customer satisfaction improvements (retention rate increase × customer value)</li>
              <li>• Sustainable/green benefits (regulatory compliance + brand value)</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4">Building Your ROI Business Case</h3>
      <p className="text-gray-700 mb-4">
        A compelling ROI business case has these essential components:
      </p>

      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <ol className="space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</span>
            <div>
              <strong>Current State Analysis</strong>
              <p className="text-sm text-gray-600 mt-1">Document baseline metrics, costs, and performance levels</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</span>
            <div>
              <strong>Future State Vision</strong>
              <p className="text-sm text-gray-600 mt-1">Define measurable improvements and target outcomes</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</span>
            <div>
              <strong>Value Quantification</strong>
              <p className="text-sm text-gray-600 mt-1">Calculate financial impact using customer's numbers and assumptions</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</span>
            <div>
              <strong>Investment Required</strong>
              <p className="text-sm text-gray-600 mt-1">Total cost of ownership including implementation, training, support</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">5</span>
            <div>
              <strong>ROI Calculation</strong>
              <p className="text-sm text-gray-600 mt-1">Payback period, NPV, IRR - in formats your customer uses</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">6</span>
            <div>
              <strong>Risk Mitigation</strong>
              <p className="text-sm text-gray-600 mt-1">Address implementation risks and provide conservative assumptions</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">7</span>
            <div>
              <strong>Proof Points</strong>
              <p className="text-sm text-gray-600 mt-1">Case studies, references, pilot results from similar customers</p>
            </div>
          </li>
        </ol>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Differentiation Framework</h3>
      <p className="text-gray-700 mb-4">
        Answer these critical customer questions better than your competitors:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-yellow-50 p-5 rounded-lg">
          <p className="font-semibold text-lg text-gray-900 mb-2">
            "What specific, measurable business result will you deliver?"
          </p>
          <p className="text-gray-600 text-sm">
            Go beyond features to quantified outcomes tied to their business priorities
          </p>
        </div>

        <div className="bg-yellow-50 p-5 rounded-lg">
          <p className="font-semibold text-lg text-gray-900 mb-2">
            "How do we define and measure value in our terms?"
          </p>
          <p className="text-gray-600 text-sm">
            Use their KPIs, their financial models, their language
          </p>
        </div>

        <div className="bg-yellow-50 p-5 rounded-lg">
          <p className="font-semibold text-lg text-gray-900 mb-2">
            "How does your value differentiate you from competitors?"
          </p>
          <p className="text-gray-600 text-sm">
            Highlight unique capabilities that competitors can't match
          </p>
        </div>

        <div className="bg-yellow-50 p-5 rounded-lg">
          <p className="font-semibold text-lg text-gray-900 mb-2">
            "Can you prove you've delivered this value for similar customers?"
          </p>
          <p className="text-gray-600 text-sm">
            Provide credible proof through references, case studies, and documented results
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <p className="font-semibold text-lg text-gray-900 mb-2">Critical Success Factor:</p>
        <p className="text-gray-700">
          The customer must confirm their understanding of the value you'll deliver. Value is
          only real when the customer believes it, agrees with your calculations, and is willing
          to stake their reputation on achieving the results.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Value Selling Best Practices</h3>
      <ul className="space-y-3 text-gray-700 mb-8">
        <li className="flex items-start">
          <span className="text-green-500 mr-2 text-xl">✓</span>
          <span>Use conservative assumptions - under-promise and over-deliver</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2 text-xl">✓</span>
          <span>Build the business case WITH the customer, not FOR them</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2 text-xl">✓</span>
          <span>Get agreement on baseline metrics before calculating improvements</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2 text-xl">✓</span>
          <span>Address both financial and non-financial value</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2 text-xl">✓</span>
          <span>Include implementation timeline and resource requirements</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2 text-xl">✓</span>
          <span>Plan how you'll measure and validate value post-implementation</span>
        </li>
      </ul>
    </div>
  );

  const downloadContent = `CREATING UNIQUE BUSINESS VALUE
Athens School of Selling - Pete Athens

===========================================
THE THREE PILLARS OF VALUE SELLING
===========================================

1. CREATE
---------
Identify opportunities to deliver measurable business impact
across Safety & Reliability, Continuous Improvement, and Innovation

2. CAPTURE
----------
Quantify the financial value using the customer's numbers,
assumptions, and financial models

3. COMMUNICATE
--------------
Present value in compelling, credible business cases that
resonate with executive decision-makers

===========================================
THREE KEY VALUE AREAS
===========================================

AREA 1: SAFETY & RELIABILITY
-----------------------------
Demonstrate how your solution reduces risk, improves safety,
and increases operational reliability.

VALUE METRICS:
• Reduced downtime
  Formula: Hours saved/year × Cost per hour
• Lower maintenance costs
  Formula: % reduction × Annual maintenance spend
• Decreased safety incidents
  Formula: Incidents avoided × Cost per incident
• Extended asset life
  Formula: Additional years × Replacement cost
• Reduced insurance premiums
• Improved compliance (avoiding fines/penalties)

AREA 2: CONTINUOUS IMPROVEMENT
-------------------------------
Show measurable operational improvements that drive
efficiency and reduce costs.

VALUE METRICS:
• Increased throughput
  Formula: Additional units/hour × Margin per unit
• Reduced waste
  Formula: % waste reduction × Annual waste cost
• Labor savings
  Formula: Hours saved × Fully-loaded labor rate
• Energy efficiency
  Formula: kWh saved × Rate + Sustainability value
• Quality improvements
  Formula: Defects reduced × Cost per defect
• Inventory reduction
  Formula: Days of inventory reduced × Carrying cost

AREA 3: INNOVATION
------------------
Articulate how your solution enables new capabilities,
revenue streams, or competitive advantages.

VALUE METRICS:
• New revenue opportunities
  Formula: Market size × Capture rate × Margin
• Faster time-to-market
  Formula: Days saved × Opportunity cost
• Competitive differentiation
  Formula: Market share gain × Revenue × Margin
• Customer satisfaction improvements
  Formula: Retention rate increase × Customer lifetime value
• Sustainable/green benefits
  Formula: Regulatory compliance + Brand value + Cost savings

===========================================
BUILDING YOUR ROI BUSINESS CASE
===========================================

COMPONENT 1: CURRENT STATE ANALYSIS
-----------------------------------
Document:
□ Baseline metrics and KPIs
□ Current costs and performance levels
□ Pain points and inefficiencies
□ Competitive position
□ Risks and concerns

COMPONENT 2: FUTURE STATE VISION
---------------------------------
Define:
□ Measurable improvement targets
□ Target outcomes and KPIs
□ Timeline for achieving results
□ Success criteria
□ Alignment with business initiatives

COMPONENT 3: VALUE QUANTIFICATION
----------------------------------
Calculate:
□ Annual savings/revenue increase
□ One-time benefits
□ Productivity improvements
□ Risk reduction value
□ Strategic value

Use CUSTOMER'S:
• Numbers and data
• Assumptions
• Financial models
• KPIs and metrics

COMPONENT 4: INVESTMENT REQUIRED
---------------------------------
Include:
□ Initial purchase price
□ Implementation costs
□ Training and change management
□ Ongoing support/maintenance
□ Internal resource requirements
□ Opportunity cost during transition

COMPONENT 5: ROI CALCULATION
-----------------------------
Present (in customer's preferred format):
□ Payback period (months)
□ Net Present Value (NPV)
□ Internal Rate of Return (IRR)
□ Total Cost of Ownership (TCO)
□ Cost-benefit analysis
□ Multi-year projection

COMPONENT 6: RISK MITIGATION
-----------------------------
Address:
□ Implementation risks
□ Conservative assumptions
□ Contingency plans
□ Pilot/phased approach options
□ Success guarantees
□ Exit strategies

COMPONENT 7: PROOF POINTS
--------------------------
Provide:
□ Relevant case studies
□ Customer references
□ Pilot results
□ Industry benchmarks
□ Third-party validation
□ Awards/recognition

===========================================
DIFFERENTIATION FRAMEWORK
===========================================

Answer these questions BETTER than competitors:

QUESTION 1:
"What specific, measurable business result will you deliver?"

Your Answer Must:
✓ Be quantifiable in financial terms
✓ Be tied to their business priorities
✓ Go beyond features to outcomes
✓ Include timeline for results

QUESTION 2:
"How do we define and measure value in OUR terms?"

Your Answer Must:
✓ Use their KPIs
✓ Use their financial models
✓ Use their language
✓ Align with their decision criteria

QUESTION 3:
"How does your value differentiate you from competitors?"

Your Answer Must:
✓ Highlight unique capabilities
✓ Show specific advantages
✓ Demonstrate proven results
✓ Address why others can't match it

QUESTION 4:
"Can you prove you've delivered this value?"

Your Answer Must:
✓ Provide specific customer examples
✓ Include measurable results
✓ Offer credible references
✓ Show documented case studies

===========================================
VALUE SELLING BEST PRACTICES
===========================================

✓ Use conservative assumptions
  (Under-promise, over-deliver)

✓ Build the business case WITH the customer,
  not FOR them

✓ Get agreement on baseline metrics BEFORE
  calculating improvements

✓ Address both financial AND non-financial value
  (reputation, risk reduction, strategic positioning)

✓ Include implementation timeline and
  resource requirements

✓ Plan how you'll measure and validate
  value post-implementation

✓ Present multiple scenarios
  (conservative, expected, optimistic)

✓ Update business case as you learn more
  (it's a living document)

✓ Get customer's CFO/finance team involved
  early (they validate your numbers)

✓ Use customer's data whenever possible
  (more credible than industry averages)

===========================================
COMMON VALUE SELLING MISTAKES
===========================================

✗ Using generic ROI claims
✗ Not quantifying value in customer's terms
✗ Focusing on features instead of outcomes
✗ Making unrealistic assumptions
✗ Not getting customer agreement on calculations
✗ Ignoring implementation costs
✗ No proof points or references
✗ Presenting value the customer doesn't care about
✗ Not aligning with customer's decision criteria
✗ Building business case alone without customer input

===========================================
VALUE CONFIRMATION QUESTIONS
===========================================

Before finalizing your business case, ask:

□ "Does this analysis reflect your current situation?"
□ "Are these assumptions reasonable and conservative?"
□ "Have we used the right metrics and financial models?"
□ "Is this how you would calculate the ROI internally?"
□ "What additional value should we consider?"
□ "What concerns or risks should we address?"
□ "Who else should validate these numbers?"
□ "Does this business case give you what you need to
   gain internal approval?"

===========================================
THE ULTIMATE TEST
===========================================

"Is the customer willing to stake their personal
reputation on achieving these results?"

If not, your value proposition isn't strong enough yet.
Keep refining until you get there.

===========================================
About Pete Athens
===========================================
31 years with Nalco/Ecolab, 5 years with Dyno Nobel
Roles: AVP, Training Director, CAM, District Manager, Sales
Bucknell University, BSME | US Army Veteran

© Athens School of Selling
www.athensschoolofselling.com
`;

  return (
    <ResourcePageLayout
      title="Creating Unique Business Value"
      subtitle="FREE VALUE SELLING GUIDE"
      description="Differentiate yourself from competitors by creating, capturing, and communicating unique business value. Learn to build quantifiable ROI business cases that win executive approval."
      benefits={benefits}
      content={content}
      resourceName="Creating Unique Business Value Guide"
      downloadContent={downloadContent}
    />
  );
};

export default UniqueBusinessValue;
