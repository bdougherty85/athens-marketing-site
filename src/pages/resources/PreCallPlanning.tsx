import { ResourcePageLayout } from '../../components/ResourcePageLayout';

const PreCallPlanning = () => {
  const benefits = [
    "Master the Purpose-Process-Payoff framework for every sales call",
    "Learn strategic questions that separate top performers from average salespeople",
    "Understand how to analyze stakeholder motives (both task and personal)",
    "Develop skills to identify and fill critical information gaps",
    "Create effective call agendas that drive productive conversations",
    "Prepare for objections and concerns before they arise"
  ];

  const content = (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-6">Pre-Call Planning Mastery</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        The difference between average and exceptional sales professionals lies in preparation.
        This comprehensive pre-call planning framework, developed over decades of experience,
        ensures you maximize the value of every customer interaction.
      </p>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl mb-8">
        <h3 className="text-2xl font-bold mb-4">The Three-Area Framework: WHAT | SO WHAT | NOW WHAT</h3>
        <p className="text-blue-100">
          Before every sales call, think strategically about these three critical areas to
          ensure a productive, valuable conversation.
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Strategic Pre-Call Planning Questions</h3>

      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-blue-900">Sales Process Positioning</h4>
          <p className="text-gray-700 mb-2 font-semibold">
            Where are we in the Sales Process (Relating | Discovering | Advocating | Supporting)?
          </p>
          <p className="text-gray-600 text-sm">
            Understanding your current stage determines the appropriate objectives and approach for this call.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-green-900">Business Environment Questions</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <div>
                <strong>What are their Drivers/Goals/Initiatives?</strong>
                <p className="text-sm text-gray-600">Connect your solution to their strategic priorities</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <div>
                <strong>What is their GAP?</strong>
                <p className="text-sm text-gray-600">The difference between current state and desired state</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <div>
                <strong>What is the customer's Pain? What is the customer's Gain?</strong>
                <p className="text-sm text-gray-600">Problems to solve or opportunities to capture</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-purple-900">Customer Milestones</h4>
          <ul className="space-y-3 text-gray-700">
            <li><strong>What are their Milestones?</strong> (Their logical decision process/evaluation tree)</li>
            <li><strong>What do we want their Milestones to be?</strong> (How can we influence criteria?)</li>
            <li><strong>How will they/we measure?</strong> What metrics? How will they be calculated?</li>
            <li><strong>What data are we missing? How will we get it?</strong></li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-yellow-900">Stakeholder Analysis</h4>
          <p className="text-gray-700 mb-3">Before the call, map out the people landscape:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Are we aligned with the Decision Makers?</strong></li>
            <li>• <strong>Who is for us?</strong> (Advocates and Champions)</li>
            <li>• <strong>Who is against us?</strong> (Competitors' relationships)</li>
            <li>• <strong>Who is influencing whom?</strong> (Power dynamics)</li>
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <h4 className="font-bold text-lg mb-3 text-red-900">Stakeholder Motives</h4>
          <p className="text-gray-700 mb-3">Understand BOTH task and personal motives:</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">TASK MOTIVES:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>✓ Less Cost</li>
                <li>✓ Less Effort</li>
                <li>✓ Increased Quality/Output</li>
                <li>✓ Increased Profit</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <p className="font-semibold mb-2">PERSONAL MOTIVES:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>✓ Power</li>
                <li>✓ Approval</li>
                <li>✓ Recognition</li>
                <li>✓ Respect</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4">Purpose - Process - Payoff Framework</h3>
      <p className="text-gray-700 mb-6">
        Every sales call must have clear answers to these three questions:
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h4 className="font-bold text-xl mb-3">PURPOSE</h4>
          <p className="text-gray-700 text-sm">
            What is our specific objective for this call? What do we want to accomplish?
          </p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h4 className="font-bold text-xl mb-3">PROCESS</h4>
          <p className="text-gray-700 text-sm">
            How will we structure the call? What's our agenda? What questions will we ask?
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg">
          <h4 className="font-bold text-xl mb-3">PAYOFF</h4>
          <p className="text-gray-700 text-sm">
            What value will the customer get? What's in it for them? Why should they invest their time?
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8 mb-4">Planning Tactical Execution</h3>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>What other resources do we need?</strong>
            <p className="text-sm text-gray-600">Subject matter experts, executives, technical resources</p>
          </li>
          <li>
            <strong>What is the next best call(s) to make?</strong>
            <p className="text-sm text-gray-600">Strategic sequencing of customer interactions</p>
          </li>
          <li>
            <strong>Who will execute the call?</strong>
            <p className="text-sm text-gray-600">Right person(s) for maximum impact</p>
          </li>
          <li>
            <strong>When will we execute the call?</strong>
            <p className="text-sm text-gray-600">Timing aligned with customer's decision process</p>
          </li>
          <li>
            <strong>If the Call goes perfectly, what happens next?</strong>
            <p className="text-sm text-gray-600">Define success criteria and next milestones</p>
          </li>
          <li>
            <strong>What stands in our way of a perfect call?</strong>
            <p className="text-sm text-gray-600">Anticipated objections and concerns to address</p>
          </li>
          <li>
            <strong>Have we prepared an agenda for the call?</strong>
            <p className="text-sm text-gray-600">Share in advance to set expectations and demonstrate professionalism</p>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <p className="font-semibold text-lg text-gray-900 mb-2">The Golden Rule of Pre-Call Planning:</p>
        <p className="text-gray-700 italic">
          "The quality of your pre-call planning directly determines the quality of your sales results.
          Invest 30-60 minutes of strategic planning for every important sales call."
        </p>
      </div>
    </div>
  );

  const downloadContent = `PRE-CALL PLANNING MASTERY
Athens School of Selling - Pete Athens

===========================================
THE THREE-AREA FRAMEWORK
WHAT | SO WHAT | NOW WHAT
===========================================

Before every sales call, think strategically about these
three critical areas to ensure productive conversations.

===========================================
STRATEGIC PRE-CALL PLANNING QUESTIONS
===========================================

SALES PROCESS POSITIONING
--------------------------
□ Where are we in the Sales Process?
  → Relating: Building trust and credibility
  → Discovering: Understanding needs
  → Advocating: Presenting solutions
  → Supporting: Ensuring satisfaction

BUSINESS ENVIRONMENT ANALYSIS
------------------------------
□ What are their Drivers/Goals/Initiatives?
□ What is their GAP? (Current state vs. Desired state)
□ What is the customer's Pain?
□ What is the customer's Gain?

CUSTOMER MILESTONES
-------------------
□ What are their Milestones?
  (Their logical decision process/evaluation tree)
□ What do we want their Milestones to be?
  (How can we influence criteria?)
□ How will they/we measure? What? How?
□ What data are we missing? How will we get it?

STAKEHOLDER ANALYSIS
--------------------
□ Are we aligned with the Decision Makers?
□ Who is for us? (Advocates and Champions)
□ Who is against us? (Competitors' relationships)
□ Who is influencing whom? (Power dynamics)

STAKEHOLDER MOTIVES
-------------------
For each key stakeholder, identify:

TASK MOTIVES:
• Less Cost
• Less Effort
• Increased Quality/Output
• Increased Profit

PERSONAL MOTIVES:
• Power
• Approval
• Recognition
• Respect

===========================================
PURPOSE - PROCESS - PAYOFF FRAMEWORK
===========================================

Every sales call must have clear answers:

PURPOSE
-------
What is our specific objective for this call?
What do we want to accomplish?

Examples:
• Understand their evaluation criteria
• Gain agreement on the business case
• Meet the economic buyer
• Present our solution
• Secure commitment to next step

PROCESS
-------
How will we structure the call?
What's our agenda?
What questions will we ask?

Components:
• Opening (build rapport)
• Discovery questions
• Presentation/discussion points
• Address concerns
• Gain agreement
• Define next steps

PAYOFF
------
What value will the customer get from this meeting?
What's in it for them?
Why should they invest their time?

Examples:
• Learn best practices from industry leaders
• See new approaches to their challenges
• Understand financial impact of current situation
• Explore options for improvement

===========================================
TACTICAL EXECUTION PLANNING
===========================================

□ What other resources do we need?
  • Subject matter experts
  • Executives
  • Technical resources
  • Financial analysts
  • References

□ What is the next best call(s) to make?
  • Strategic sequencing
  • Building momentum
  • Expanding relationships

□ Who will execute the call?
  • Right person(s) for maximum impact
  • Role clarity
  • Team coordination

□ When will we execute the call?
  • Timing aligned with customer's process
  • Adequate preparation time
  • Stakeholder availability

□ If the call goes perfectly, what happens next?
  • Define success criteria
  • Next milestones
  • Required resources

□ What stands in our way of a perfect call?
  • Anticipated objections
  • Concerns to address
  • Competitive challenges
  • Internal resistance

□ Have we prepared an agenda for the call?
  • Share in advance
  • Set expectations
  • Demonstrate professionalism

===========================================
PRE-CALL PLANNING CHECKLIST
===========================================

24-48 HOURS BEFORE THE CALL:
□ Research customer's recent news/developments
□ Review previous meeting notes
□ Identify information gaps
□ Prepare strategic questions
□ Draft proposed agenda
□ Send agenda to customer
□ Coordinate with team members
□ Prepare presentation materials
□ Rehearse if complex/high-stakes

IMMEDIATELY BEFORE THE CALL:
□ Review objectives
□ Review customer background
□ Check technology (if virtual)
□ Have materials ready
□ Clear mindset - be present

AFTER EVERY CALL:
□ Debrief with team
□ Document key learnings
□ Update CRM/opportunity plan
□ Send follow-up email
□ Schedule next steps
□ Identify new planning questions

===========================================
SAMPLE CALL AGENDA TEMPLATE
===========================================

MEETING WITH: [Customer Name]
DATE: [Date]
ATTENDEES: [List all participants]
DURATION: [Time allocation]

OBJECTIVES:
• [Specific objective #1]
• [Specific objective #2]
• [Specific objective #3]

AGENDA:
1. Opening/Introductions (5 min)
2. Review objectives and confirm agenda (2 min)
3. Discovery/Discussion (30 min)
   - Question area 1
   - Question area 2
   - Question area 3
4. [Presentation/Demo] (20 min)
5. Address questions/concerns (10 min)
6. Recap and next steps (3 min)

PREPARATION REQUESTED:
• [Any materials they should review]
• [People they should include]
• [Information to gather in advance]

===========================================
THE GOLDEN RULE
===========================================

"The quality of your pre-call planning directly
determines the quality of your sales results.

Invest 30-60 minutes of strategic planning for
every important sales call."

===========================================
COMMON PLANNING MISTAKES TO AVOID
===========================================

✗ Skipping planning when you're busy
✗ Planning alone (leverage team input)
✗ Focusing only on what YOU want to say
✗ Ignoring personal motives
✗ Not preparing for objections
✗ Assuming you know what they need
✗ No written agenda
✗ Unclear next steps
✗ Not debriefing after the call

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
      title="Pre-Call Planning Mastery"
      subtitle="FREE STRATEGIC PLANNING GUIDE"
      description="Elevate every customer interaction with our comprehensive pre-call planning framework. Learn the critical questions that separate top performers from average salespeople."
      benefits={benefits}
      content={content}
      resourceName="Pre-Call Planning Mastery Checklist"
      downloadContent={downloadContent}
    />
  );
};

export default PreCallPlanning;
