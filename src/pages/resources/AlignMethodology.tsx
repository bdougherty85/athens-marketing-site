import { ResourcePageLayout } from '../../components/ResourcePageLayout';

const AlignMethodology = () => {
  const benefits = [
    "Master the 5-step ALIGN consultative selling framework",
    "Learn advanced questioning techniques that uncover real customer needs",
    "Develop skills to handle objections and build consensus",
    "Transform from product pusher to trusted advisor and Counselor Sales Person (CSP)",
    "Apply the framework across all four stages: Relating, Discovering, Advocating, Supporting",
    "Integrate Social Styles for more versatile and effective communication"
  ];

  const content = (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">The ALIGN Sales Methodology</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        ALIGN is Pete Athens' refined approach to consultative selling that transforms sales
        professionals into trusted advisors. This methodology integrates proven techniques from
        the Counselor Sales Person (CSP) framework with modern best practices.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">The ALIGN Framework</h3>

      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-bold text-xl mb-3 flex items-center">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">A</span>
            ASK - Strategic Questioning
          </h4>
          <p className="text-gray-700 mb-3">
            Open the conversation with powerful, open-ended questions that demonstrate your expertise
            and genuine interest in understanding the customer's business.
          </p>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold mb-2">Example Questions:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• "What are your top business priorities for this year?"</li>
              <li>• "How are you currently handling [specific challenge]?"</li>
              <li>• "What would success look like for you in this area?"</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-bold text-xl mb-3 flex items-center">
            <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">L</span>
            LISTEN - Active and Empathetic Listening
          </h4>
          <p className="text-gray-700 mb-3">
            Truly hear what your customer is saying - both the words and the emotions behind them.
            Listen for pain points, aspirations, and unspoken concerns.
          </p>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold mb-2">Listening Techniques:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Paraphrase to confirm understanding</li>
              <li>• Take notes on specific details</li>
              <li>• Watch for non-verbal cues</li>
              <li>• Resist the urge to interrupt or pitch too early</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h4 className="font-bold text-xl mb-3 flex items-center">
            <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">I</span>
            IMPLICATION - Explore Consequences
          </h4>
          <p className="text-gray-700 mb-3">
            Help customers understand the full impact of their current situation and the cost of
            inaction. Connect their challenges to business outcomes.
          </p>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold mb-2">Implication Questions:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• "What happens if this issue isn't resolved?"</li>
              <li>• "How is this affecting your team's productivity?"</li>
              <li>• "What's the cost to your business if nothing changes?"</li>
              <li>• "How does this impact your competitive position?"</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h4 className="font-bold text-xl mb-3 flex items-center">
            <span className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">G</span>
            GAIN AGREEMENT - Build Consensus
          </h4>
          <p className="text-gray-700 mb-3">
            Secure agreement at each stage of the sales process. Ensure alignment on the problem,
            the value of solving it, and your approach to the solution.
          </p>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold mb-2">Gaining Agreement:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• "Does this align with your understanding?"</li>
              <li>• "Would solving this problem be valuable to you?"</li>
              <li>• "Are we on the same page about next steps?"</li>
              <li>• "Do you see how this addresses your concerns?"</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <h4 className="font-bold text-xl mb-3 flex items-center">
            <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">N</span>
            NEXT STEPS - Clear Actions
          </h4>
          <p className="text-gray-700 mb-3">
            Every interaction must end with clear, mutually agreed-upon next steps. Define who does
            what, by when, and how you'll measure success.
          </p>
          <div className="bg-white p-4 rounded">
            <p className="font-semibold mb-2">Defining Next Steps:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Specific actions for both parties</li>
              <li>• Clear timeline and deadlines</li>
              <li>• Resources or information needed</li>
              <li>• Scheduled follow-up meeting</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4">The Four Barriers in Buy-Sell Relationships</h3>
      <p className="text-gray-700 mb-4">
        The Counselor Sales Person (CSP) approach helps you overcome these critical barriers:
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-100 p-5 rounded-lg">
          <h5 className="font-bold text-lg mb-2">1. No Trust</h5>
          <p className="text-gray-700">Build credibility through expertise, authenticity, and consistency</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h5 className="font-bold text-lg mb-2">2. No Need</h5>
          <p className="text-gray-700">Uncover and develop awareness of problems and opportunities</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h5 className="font-bold text-lg mb-2">3. No Help</h5>
          <p className="text-gray-700">Demonstrate how your solution specifically addresses their needs</p>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <h5 className="font-bold text-lg mb-2">4. No Satisfaction</h5>
          <p className="text-gray-700">Ensure successful implementation and continuous value delivery</p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <p className="font-semibold text-lg text-gray-900 mb-2">Pro Tip:</p>
        <p className="text-gray-700">
          Combine ALIGN with Social Styles (Versatile Sales Person) to adapt your approach based
          on whether you're speaking with a Driver, Expressive, Amiable, or Analytical buyer.
        </p>
      </div>
    </div>
  );

  const downloadContent = `THE ALIGN SALES METHODOLOGY
Athens School of Selling - Pete Athens

===========================================
OVERVIEW
===========================================
ALIGN is a consultative selling framework that transforms
sales professionals into Counselor Sales Persons (CSP) -
trusted advisors who help customers make better decisions.

===========================================
THE ALIGN FRAMEWORK
===========================================

A - ASK: Strategic Questioning
--------------------------------
Open the conversation with powerful questions that demonstrate
expertise and genuine interest in the customer's business.

Example Questions:
• What are your top business priorities for this year?
• How are you currently handling [specific challenge]?
• What would success look like for you in this area?
• Who else is affected by this situation?
• What have you tried so far?

Best Practices:
✓ Ask open-ended questions (What, How, Why)
✓ Avoid yes/no questions early in discovery
✓ Layer questions to go deeper
✓ Prepare questions in advance

L - LISTEN: Active and Empathetic Listening
--------------------------------------------
Truly hear what your customer is saying - both words and
emotions. Listen for pain points, aspirations, and concerns.

Listening Techniques:
• Paraphrase to confirm understanding
• Take detailed notes
• Watch for non-verbal cues
• Resist the urge to interrupt or pitch
• Show empathy and understanding

Key Principle:
Listen twice as much as you talk!

I - IMPLICATION: Explore Consequences
--------------------------------------
Help customers understand the full impact of their current
situation and the cost of inaction.

Implication Questions:
• What happens if this issue isn't resolved?
• How is this affecting your team's productivity?
• What's the cost to your business if nothing changes?
• How does this impact your competitive position?
• What opportunities are you missing?
• How does this affect your customers?

Purpose:
Create urgency and help customer recognize the value
of solving the problem NOW.

G - GAIN AGREEMENT: Build Consensus
------------------------------------
Secure agreement at each stage of the sales process.
Ensure alignment on problem, value, and solution.

Gaining Agreement Phrases:
• "Does this align with your understanding?"
• "Would solving this problem be valuable to you?"
• "Are we on the same page about next steps?"
• "Do you see how this addresses your concerns?"
• "Can we agree that this is worth exploring further?"

Checkpoints:
✓ Agreement on the problem
✓ Agreement on implications
✓ Agreement on desired outcomes
✓ Agreement on evaluation criteria
✓ Agreement on next steps

N - NEXT STEPS: Clear Actions
------------------------------
Every interaction must end with clear, mutually agreed-upon
next steps with defined ownership and timelines.

Next Steps Components:
1. WHO - Specific person responsible
2. WHAT - Exact action to be taken
3. WHEN - Specific date/time
4. RESOURCES - What's needed to complete

Example:
"By Friday, March 15th, I'll send you the ROI analysis
(WHO: Me, WHEN: 3/15). You'll review with your CFO and
get back to me by March 22nd with questions or approval
to move forward (WHO: You, WHEN: 3/22). Does that work?"

===========================================
THE FOUR BARRIERS
===========================================
The CSP approach helps overcome these barriers:

1. NO TRUST
   - Build credibility through expertise
   - Demonstrate authenticity and consistency
   - Keep commitments
   - Share relevant case studies

2. NO NEED
   - Uncover problems and opportunities
   - Develop awareness through questioning
   - Quantify the gap between current and desired state

3. NO HELP
   - Show how your solution addresses their specific needs
   - Provide proof through case studies and references
   - Demonstrate ROI and unique value

4. NO SATISFACTION
   - Ensure successful implementation
   - Deliver continuous value
   - Build long-term relationships
   - Provide ongoing support

===========================================
SALES PROCESS STAGES
===========================================
Apply ALIGN across all four stages:

1. RELATING
   Building trust and credibility

2. DISCOVERING
   Understanding needs and uncovering opportunities

3. ADVOCATING
   Presenting solutions and building consensus

4. SUPPORTING
   Ensuring satisfaction and expanding relationship

===========================================
INTEGRATING SOCIAL STYLES
===========================================
Enhance ALIGN effectiveness by adapting to Social Styles:

DRIVER (Results-oriented, direct)
- Be brief and to the point
- Focus on results and ROI
- Move quickly

EXPRESSIVE (People-oriented, enthusiastic)
- Build relationship first
- Share stories and vision
- Be enthusiastic

AMIABLE (Relationship-focused, supportive)
- Take time to build trust
- Involve their team
- Reduce risk perception

ANALYTICAL (Data-focused, systematic)
- Provide detailed information
- Be precise and accurate
- Allow time for analysis

===========================================
KEY SUCCESS FACTORS
===========================================
✓ Prepare questions in advance
✓ Listen more than you talk
✓ Take detailed notes
✓ Confirm understanding frequently
✓ Build consensus progressively
✓ Always define clear next steps
✓ Adapt to customer's Social Style

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
      title="The ALIGN Sales Methodology"
      subtitle="FREE CONSULTATIVE SELLING GUIDE"
      description="Transform your sales approach with the ALIGN framework: Ask, Listen, Implication, Gain Agreement, Next Steps - proven techniques for becoming a trusted advisor."
      benefits={benefits}
      content={content}
      resourceName="ALIGN Sales Methodology Guide"
      downloadContent={downloadContent}
    />
  );
};

export default AlignMethodology;
