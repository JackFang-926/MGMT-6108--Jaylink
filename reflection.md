\# REFLECTION.md · \[CMLink Singapore (Contract Plans tab)\]   
Members:Fang Ziqi, Zhao Ronghui, Xiao Qingyuan, Tian Jingwen

## **Part A · Critical thinking**

### **A1 Where did the AI get the behavioural science wrong, and how did you catch it?**

During our first audit, because we didn't provide all the original documents to the AI, it made some mistakes. We caught these by checking our course readings:

1. Diminishing Sensitivity (Finding 3): The AI cited Kahneman's (2011, ch. 26\) diminishing sensitivity to explain why users focus on the "Unlimited^" headline while ignoring the 800GB cap. We overruled this: diminishing sensitivity describes how marginal subjective value decreases as base amounts grow (e.g., the 40GB jump from 760GB to 800GB feels negligible), which explains tier indifference but cannot account for selective visual attention or why users miss a footnote. Instead, the "Unlimited^" headline establishes an inflated prior reference point and triggers mindless consumption cues. Once System 1 feels reassured against overage penalties, it suppresses deliberate System 2 inspection, leaving the small-print speed cap unread. We replaced it with expectation setting (Ariely, 2008, ch. 9\) and mindless consumption cues (Thaler & Sunstein, 2008, ch. 2\) (TJW).  
2. Status Quo Bias and Commitment Devices (Finding 5): For the hidden early termination charges, the AI cited status quo bias (Kahneman, 2011\) and exploitative commitment devices (Thaler & Sunstein, 2008). We rejected both: status quo bias explains why existing users fail to switch plans, not why prospective shoppers miss exit terms on a sign-up page. A commitment device is a voluntary self-control arrangement chosen in a cold state, not a hidden telecom penalty. We used processing fluency (Petrova et al., 2012\) and account resuscitation (Shafir & Thaler, 2006\) instead (XQY).  
3. Artificial Mental Accounts (Finding 6): For the overlapping roaming pools, the AI cited non-fungibility via artificial mental accounts, We identified a fundamental theoretical mismatch: in behavioural economics, artificial mental accounts describe an internal, consumer-initiated self-control strategy, where individuals intentionally label distinct money pots (e.g., a "holiday fund" vs. "emergency savings") to restrict their own impulsive spending.  (Thaler & Sunstein, 2008). Since artificial accounts refer to consumers intentionally labelling their own budgets to curb spending, we replaced it with partitioned framing: different surface presentations evoke different mental accounts.  (Kahneman, 2011, ch. 34)(TJW).  
4. Information Overload Direction (Finding 4): The AI claimed visual clutter inevitably pushes users to buy the most expensive plan. We corrected this: overload degrades System 2 evaluation, but the resulting choice direction is uncertain—it may favour the cheapest tier, the largest headline, or abandonment (TJW).

### **A2 Which claim did you check at source (reading and page), and what did you find?**

We checked every citation and contractual claim against the original readings and official CMLink terms, catching four major errors:

1. Fabricated Beshears & Gino Citation (Finding 4): The AI cited "System 2 Joint evaluation failure (Beshears & Gino, 2015, p. 2)". Checking page 2 of the text, we found this concept does not exist there and deleted it (TJW, FZQ).  
2. Hallucinated Syllabus Mapping (Finding 5): The AI invented "W4 Sludge and exit friction (Thaler, 2018)". Checking our syllabus, we confirmed Thaler (2018) was not a Week 4 reading and removed it (TJW, FZQ).  
3. Stretching Shafir & Thaler (2006) (Finding 1): The AI cited pp. 702–704 as direct proof that monthly telecom pricing causes users to underestimate 12-month totals. At the source, the paper actually studies delayed consumption and sunk costs, so we framed mental accounting as a plausible interpretation rather than proven evidence (XQY).  
4. Unverified Exit Fees and Roaming Priority (Findings 5 & 6): In Finding 5, the AI claimed early termination required repaying recovered discounts; checking CMLink's terms showed those clauses applied to port-ins from previous providers, whereas CMLink's actual exit fee is Monthly Fee × Remaining months. In Finding 6, the AI invented a roaming deduction order (CN/HK → APAC → MY/TH/ID → Global 210\) absent from the official site, which we deleted in Prompt Entry 7 (XQY, FZQ).

### **A3 Which nudge-or-sludge call did you make against the AI's suggestion, and why?**

We did not rely on AI for our nudge, sludge, or grey classifications. Instead, each member independently evaluated whose goal wins on the screen, followed by group deliberation to settle divided verdicts:

1. **Finding 3 ("Unlimited^" vs. 800GB Cap) — Overruling Sludge to GREY:** Initially, Fang rated this Sludge because the prominent "Unlimited" headline directly contradicts the fine-print 800GB cap, creating a salience gap. However, Zhao, Tian, and Xiao voted for GREY and convinced the group to adopt GREY as the consensus. We concluded that 800GB is practically unconstrained for normal smartphone usage, and the cap is openly disclosed right on the main card rather than buried in external legal terms. Furthermore, for cross-border commuters, the S\$10.10 price premium genuinely upgrades international roaming allowances, making it a legitimate trade-off rather than purely exploitative friction (TJW, ZRH, XQY).  
2. **Finding 1 & Finding 4 — Calibrating GREY Concerns into Agreed Sludge:** For Finding 1 (monthly vs. 12-month total cost) and Finding 4 (chaotic benefit clutter), Xiao initially argued for GREY, noting that showing monthly figures is standard commercial practice and information overload does not guarantee users pick an expensive plan. After group review, we agreed on Sludge: hiding the mandatory commitment total and piling unstructured specs onto the cards systematically forces users to rely on cognitive shortcuts at the expense of their personal budgeting goals (FZQ, ZRH, TJW, XQY).  
3. **Finding 8, 9 & 10 — Recognizing Mutual Friction as GREY:** In our post-building audit, we classified the 5G restrictions, uniform green checkmarks, and lack of lifestyle context as GREY (unanimous or majority). We agreed these are design ambiguities where neither side clearly wins: the platform fails to guide users to the right tiers, while users suffer unnecessary comparison fatigue (ZRH, TJW, XQY).

### **A4 What about your users could the AI not know?**

Cross-Border Needs Over Local GB: The AI judged value purely by local data cost, ignoring that Chinese students and expats buy the S\$21 plan primarily for the 65GB China/HK roaming and dual-number SMS reception, which guided our Finding 10 (TJW, ZRH).

## **Part B · Test Plan & Team Workflow**

### **B1 Which principle replicated, or was refuted, in your pilot or prediction check?**

Since we did not run a live pilot, we conducted a statistical power check across our ten predictions ($\alpha =.05,power=.80$):

1. Statistical Power Limits: A 70-person pilot (\~35 per arm) can statistically verify high-salience repairs (Findings 1, 2, 4, 5, 8, 9; $n=19-32$), whereas subtler framing repairs (Findings 3, 6, 7, 10; $n=39-61$) can only show directional trends (FZQ, ZRH).

### **B2 What would you test next, and what result would change your mind?**

Next, we will run an A/B pilot with \~70 Singaporean adults to evaluate comprehension of 12-month totals and month-seven charges, alongside task completion time, sign-up intent, and specific errors. We will iterate on the design if accuracy improves by under 25 percentage points or intent drops by more than 0.5 points—distinguishing informed drop-off from poor usability. Any noisy estimates will prompt follow-up testing, and individual components will be isolated before claiming causality. (XQY, TJW, FZQ).

### **B3 How did AI change who did what in your group?**

AI shifted our workflow from manual coding to adversarial auditing: FZQ acted as the sole AI driver across all Stitch and AI Studio prompts to maintain CSS consistency and protect Variant A, while XQY, TJW, and ZRH redirected freed coding hours into verifying official contract clauses, checking citations at source, and calibrating Nudge/Sludge/Grey ratings (FZQ, ZRH, XQY, TJW)

References

Ariely, D. (2008). *Predictably irrational: The hidden forces that shape our decisions*. HarperCollins.

Kahneman, D. (2011). *Thinking, fast and slow*. Farrar, Straus and Giroux.

Petrova, P. K., Schwarz, N., & Song, H. (2012). Fluency and social influence: Lessons from judgment and decision-making. In D. T. Kenrick, N. J. Goldstein, & S. L. Braver (Eds.), *Six degrees of social influence: Science, application, and the psychology of Robert Cialdini* (pp. 61–71). Oxford University Press. 

Shafir, E., & Thaler, R. H. (2006). Invest now, drink later, spend never: On the mental accounting of delayed consumption. *Journal of Economic Psychology, 27*(5), 694–712. https\://doi.org/10.1016/j.joep.2006.05.008

Thaler, R. H., & Sunstein, C. R. (2008). *Nudge: Improving decisions about health, wealth, and happiness*. Yale University Press.

