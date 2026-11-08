\# PROMPTS.md · \[CMLink Singapore (Contract Plans tab)\]   
\*\*Members:\*\*Fang Ziqi, Zhao Ronghui, Xiao Qingyuan, Tian Jingwen  
 \*\*Live link:\*\* \[Variant A: https\://mgmt-6108-jaylink.vercel.app/?v=A  
Variant B: https\://mgmt-6108-jaylink.vercel.app/?v=B\] 

## **Entry 1 \- Claude prompt · \[2026.10.23\] · sent by FZQ · Stitch**

Replicate the UI of https\://www\.cmlink.com/sg/en/plans/?type=2.  
Design a desktop web page (1440px wide, one long scrolling page, light theme) for a FICTIONAL Singapore mobile operator called JAYLINK. Reproduce the layout, visual hierarchy, spacing, colours and copy described below as exactly as possible. Use the attached screenshots as the visual reference, but replace the brand as instructed.

IMPORTANT: This page is the baseline (version A) for a behavioural-science audit. Do NOT redesign, simplify, tidy up, or improve anything. Weaknesses in the original must be reproduced exactly (see "Fidelity rules" at the end).

BRAND  
\- Brand name everywhere: JAYLINK. Never write "CMLink" or "China Mobile". Do not copy the original logo. Create a simple text wordmark: "JAY" in dark navy and "LINK" in blue, with a small green dot or arc. No other real brand names, logos or trademarks.

GLOBAL STYLE  
\- White page, soft light-blue section backgrounds, rounded corners (16-24px) on cards, subtle shadows.  
\- Colours (approximate): primary blue \#0A93E8, lime green \#78C000, magenta for prices \#E4087F, red for warnings \#D93025, dark text \#222, grey text \#666.  
\- Clean humanist sans-serif (similar to Open Sans or Noto Sans). Headings bold.

HEADER (white bar, sticky)  
\- Left: JAYLINK wordmark. Next to it, nav links: Promotions, Plans (active: blue, with a small curved blue underline), Services & Add-ons, Support.  
\- Right: a round red support icon with a small red notification dot; a pill button with globe icon and "简体中文"; a pill button with card icon and "Pay"; a round user icon; a filled blue pill button "Get SIM →".

TABS  
\- Two large centered tabs: "SIM-only Plans" (grey, inactive) and "Contract Plans" (blue, bold, active, small curved blue underline). The Contract Plans tab is selected.

BANNER  
\- Wide rounded box, pale lime background, 1px lime border.  
\- Heading in lime green bold: "Long-term plans with more entitlements"  
\- Body in grey: "Enjoy all the perks like cross-border data and free IDD minutes that come with your SIM-only plans and say hi to more data, talktime and SMS when you commit to a minimum usage period\!"

PLAN CARDS (three equal cards side by side, pale white-to-light-blue gradient, rounded)  
Each card, top to bottom:  
1\. "12 months" in blue bold, centered, small curved underline, thin divider below.  
2\. A blue "5G" badge with a small tail at the top-left.  
3\. Plan title in very large bold dark text on the left (e.g. "720GB") and the price on the right in large magenta text with a small dark "/month".  
4\. (Card 1 only) a lime-highlighted box with two lines in green text: "\[Non ST Port-in\] 50% off 6 Mths" and "\[New\] 50% off 6 Mths".  
5\. A light-blue panel with a list of benefits. EVERY benefit has the same green circled tick and the same font size and weight, in this order (plain text, no emphasis).  
6\. Below the panel, small grey text starting "After contract period," followed by short grey bullet lines (no ticks, smaller font).  
7\. At the bottom: a blue text link "View Details" on the left, and a large filled blue pill button "Sign Up Now" on the right.

Card 1: 720GB, \$15.0/month  
Benefits:  
\- Free 5G+ Access  
\- 5GB roaming data for use in mainland China and Hong Kong SAR  
\- 31GB APAC 12 roaming data for use in Australia, China (including Hong Kong, Macau and Taiwan), Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam  
\- 1TB shared roaming data for use in Indonesia, Malaysia and Thailand  
\- 60GB International Roaming data for use in 210 destinations for 365 days (for new and port-in only)  
\- 650 mins local calls  
\- 100 local SMS  
\- 500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)  
\- Free Caller ID & local incoming calls  
After contract period:  
\- 720GB will change to 700GB  
\- 31GB APAC 12 roaming data will change to 30GB  
\- 650 mins local calls will change to 600 mins

Card 2: 760GB, \$21.0/month (no highlighted promo box)  
Benefits:  
\- Free 5G+ Access  
\- 65GB roaming data for use in mainland China and Hong Kong SAR  
\- 33GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam  
\- 600GB shared roaming data across Indonesia, Malaysia and Thailand valid for 365 days (for new sign-ups only)  
\- 60GB International Roaming data for use in 210 destinations for 365 days (for new and port-in only)  
\- 900 mins local calls  
\- 500 Local SMS  
\- 500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)  
\- Free Caller ID & local incoming calls  
After contract period:  
\- 760GB will change to 750GB  
\- 65GB CN/HK data will change to 60GB  
\- 33GB APAC 10 roaming data will change to 32GB  
\- 900 mins local calls will change to 800 mins  
\- 500 Local SMS will change to 300

Card 3: title "Unlimited^", \$31.1/month (no highlighted promo box)  
Benefits:  
\- Free 5G+ Access  
\- ^Data limit cap at 800GB, speed managed at 512kbps thereafter  
\- 85GB roaming data for use in mainland China and Hong Kong SAR  
\- 35GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam  
\- 600GB shared roaming data across Indonesia, Malaysia and Thailand valid for 365 days (for new sign-ups only)  
\- 60GB International Roaming data for use in 210 destinations for 365 days (for new and port-in only)  
\- 1200 mins local calls  
\- 800 Local SMS  
\- 500 mins from SG to 16 destinations (Local outgoing mins will also be deducted)  
\- Free Caller ID & local incoming calls  
After contract period:  
\- 85GB CN/HK data will change to 80GB  
\- 35GB APAC 10 roaming data will change to 34GB  
\- 1200 mins local calls will change to 1000 mins  
\- 800 local SMS will change to 500

GET ADD-ONS SECTION  
\- Centered large bold heading "Get Add-Ons" with a small curved blue underline.  
\- Two equal rounded cards side by side.  
  Left card (pale green gradient): centered text, large: "Not enough " (dark) \+ "local data?" (RED) on the first line; "Affordable add-ons offers" (blue) \+ " for your immediate needs" (dark) below it. Small grey line: "Continue browsing social media and stream videos worry-free". Blue pill button "Add Now".  
  Right card (pale blue, faint world-map illustration in the background): "Stay connected with" (lime green) \+ " our roaming add-ons" (blue) \+ " while traveling abroad" (dark). Small grey line: "Choose what you need at affordable rates". Blue pill button "Add Now".

UNIQUE SERVICES SECTION (pale-blue background band)  
\- Left: a rounded photo card (a woman looking at her phone outdoors among greenery; use a generic stock-style image of a person, not a real identifiable person) with a large white bold title "Unique JAYLINK Services" and a green curved arc graphic over the image.  
\- Right: a white rounded card titled "1-Card-Multi-Number" with two icon \+ text rows: "Link your mainland China/Hong Kong number, to receive voice calls and SMS seamlessly." and "Apply for a new mainland China/Hong Kong number while in Singapore." Below, a blue link "View details \>".

EMAIL BLOCK  
\- White rounded card, centered: an envelope icon with a small green "%" price tag; bold large heading "Still deciding on which plan? No worries."; grey line "Stay in touch to receive our latest offers"; an email input with placeholder "Enter your Email Address now\!" and a blue pill button "Submit" beside it.

FOOTER  
\- A simple, minimal footer with the text "JAYLINK Singapore (fictional brand for a class project)". Nothing else.

FIDELITY RULES (do not break)  
1\. Keep the monthly price as the only price on each card. Do NOT add a 12-month total, savings summary or discounted price in dollars.  
2\. Keep all benefit lines at the same size and weight. Do NOT group, collapse, reorder or highlight any of them.  
3\. Keep "After contract period" in small grey text below the benefits panel. Do NOT make it prominent or put it in a table.  
4\. Keep "View Details" as a small plain text link and "Sign Up Now" as the large filled button. Do NOT add early-termination or contract-exit text to the cards.  
5\. Keep the "Unlimited^" title and the cap line as written. Do NOT rename it.  
6\. Keep the red "local data?" wording in the add-on card.  
7\. Keep all copy exactly as written above, including odd phrases such as "Affordable add-ons offers" and "\[Non ST Port-in\]". Do not correct grammar.  
8\. No extra sections, no new content, no animations, no countdowns, no popups.  
9\. Static visual design only; no real payment, login or personal-data fields beyond the email box shown.

**What came back:** Stitch generated a close visual replica of the CMLink page under the JAYLINK brand, with the three plan cards, banner, tabs, header and add-on section roughly in place.

**Our judgement, and what we changed next:** The replica was not inspected closely enough before import into AI Studio. Font sizes, card widths and row spacing all differed from the original, which created the mismatches we had to fix in Entries 4 and 5\. Next time, we should screenshot-compare the Stitch output against the original page before importing.

**Principle check:** None — this was a production step, not a behavioural change.

## **Entry 2 \- Variant A prompt · \[2026.10.23\] · sent by FZQ · AI studio**

ROLE: You are a senior front-end developer building a React web app.

GOAL: Implement the attached design as ONE app for "JAYLINK", a fictional  
 Singapore mobile operator, as the baseline "Variant A" of a class study.  
 The attached screenshot and the Stitch code at the end are the design  
 reference. Reproduce the screenshot as exactly as possible, including its  
 weaknesses. Do not improve, tidy, shorten, reorder or correct anything.

 1\) Three screens, in this order, with no router library (use React state):  
    a) ConsentScreen: centred card with the text "This is a class  
       prototype. No real sign-up, no payment, no personal data." and a  
       Continue button.  
    b) PlansScreen: the page in the screenshot (details below).  
    c) DebriefScreen: shown when the user clicks any "Sign Up Now" button.  
       Text: "No sign-up was made. This was a class prototype of a fictional  
       brand, JAYLINK. All plans, prices, discounts and contract terms shown  
       were simulated for a class study, and nothing was recorded. You saw  
       Variant A." plus a "Back to start" button that returns to the consent  
       screen.  
 2\) Variant: the app is Variant A only. Keep a constant VARIANT \= "A" in the  
    data file and pass it to the screens, so a second variant can be added  
    later. Do NOT build, mention or stub Variant B. No ?v URL logic, no  
    random assignment, no localStorage.  
 3\) PlansScreen layout, top to bottom (match the screenshot):  
    \- Header: wordmark "JAYLINK" (text, "JAY" dark navy, "LINK" blue, small  
      green dot after it), nav links Promotions, Plans (active, blue,  
      small blue underline), Services & Add-ons, Support; on the right a  
      round red notification icon, a pill "简体中文", a pill "Pay", a round  
      user icon, and a filled blue pill "Get SIM →".  
    \- Two tabs: "SIM-only Plans" (grey) and "Contract Plans" (blue, bold,  
      selected). The tabs are inert: no click action.  
    \- Banner (pale lime box, lime border): heading "Long-term plans with  
      more entitlements"; body "Enjoy all the perks like cross-border data  
      and free IDD minutes that come with your SIM-only plans and say hi to  
      more data, talktime and SMS when you commit to a minimum usage period\!"  
    \- Three plan cards side by side, each with: "12 months" (blue,  
      centred); a blue "5G" badge; plan title (large, bold) left and price  
      (large, magenta) right with small "/month"; benefits panel; "After  
      contract period," block in small grey text; a small blue text link  
      "View Details" bottom-left; a large filled blue pill "Sign Up Now"  
      bottom-right.  
    \- "Get Add-Ons" section: heading with small blue underline and two cards.  
    \- Pale-blue band: a photo-placeholder card with title "Unique JAYLINK  
      Services" and a green arc, and a white card "1-Card-Multi-Number".  
    \- Email block and a minimal footer.  
 4\) Exact copy (all of it goes in the data file):  
    CARD 1: title "720GB", price "\$15.0", promo box (lime background, green  
      text) with two lines: "\[Non ST Port-in\] 50% off 6 Mths" and "\[New\]  
      50% off 6 Mths".  
      Benefits (same green tick, same size and weight for every line):  
      \- Free 5G+ Access  
      \- 5GB roaming data for use in mainland China and Hong Kong SAR  
      \- 31GB APAC 12 roaming data for use in Australia, China (including  
        Hong Kong, Macau and Taiwan), Indonesia, Japan, Malaysia,  
        Philippines, South Korea, Thailand and Vietnam  
      \- 1TB shared roaming data for use in Indonesia, Malaysia and Thailand  
        valid for 365 days (for new sign-ups only)  
      \- 60GB International Roaming data for use in 210 destinations for 365  
        days (for new and port-in only)  
      \- 650 mins local calls  
      \- 100 local SMS  
      \- 500 mins from SG to 16 destinations (Local outgoing mins will also  
        be deducted)  
      \- Free Caller ID & local incoming calls  
      After contract period, (small grey bullets, no ticks):  
      \- 720GB will change to 700GB  
      \- 31GB APAC 12 roaming data will change to 30GB  
      \- 650 mins local calls will change to 600 mins  
    CARD 2: title "760GB", price "\$21.0", no promo box.  
      Benefits:  
      \- Free 5G+ Access  
      \- 65GB roaming data for use in mainland China and Hong Kong SAR  
      \- 33GB APAC 10 roaming data for use in Australia, China Macau, China  
        Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea,  
        Thailand and Vietnam  
      \- 600GB shared roaming data across Indonesia, Malaysia and Thailand  
        valid for 365 days (for new sign-ups only)  
      \- 60GB International Roaming data for use in 210 destinations for 365  
        days (for new and port-in only)  
      \- 900 mins local calls  
      \- 500 Local SMS  
      \- 500 mins from SG to 16 destinations (Local outgoing mins will also  
        be deducted)  
      \- Free Caller ID & local incoming calls  
      After contract period,  
      \- 760GB will change to 750GB  
      \- 65GB CN/HK data will change to 60GB  
      \- 33GB APAC 10 roaming data will change to 32GB  
      \- 900 mins local calls will change to 800 mins  
      \- 500 Local SMS will change to 300  
    CARD 3: title "Unlimited^", price "\$31.1", no promo box.  
      Benefits:  
      \- Free 5G+ Access  
      \- ^Data limit cap at 800GB, speed managed at 512kbps thereafter  
      \- 85GB roaming data for use in mainland China and Hong Kong SAR  
      \- 35GB APAC 10 roaming data for use in Australia, China Macau, China  
        Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea,  
        Thailand and Vietnam  
      \- 600GB shared roaming data across Indonesia, Malaysia and Thailand  
        valid for 365 days (for new sign-ups only)  
      \- 60GB International Roaming data for use in 210 destinations for 365  
        days (for new and port-in only)  
      \- 1200 mins local calls  
      \- 800 Local SMS  
      \- 500 mins from SG to 16 destinations (Local outgoing mins will also  
        be deducted)  
      \- Free Caller ID & local incoming calls  
      After contract period,  
      \- 85GB CN/HK data will change to 80GB  
      \- 35GB APAC 10 roaming data will change to 34GB  
      \- 1200 mins local calls will change to 1000 mins  
      \- 800 local SMS will change to 500  
    ADD-ONS: left card (pale green): "Not enough " (dark) \+ "local data?"  
      (RED) on line one; "Affordable add-ons offers" (blue) \+ " for your  
      immediate needs" (dark); small grey line "Continue browsing social  
      media and stream videos worry-free"; blue pill "Add Now". Right card  
      (pale blue, faint globe illustration drawn in inline SVG): "Stay  
      connected with" (lime green) \+ " our roaming add-ons" (blue) \+ " while  
      traveling abroad" (dark); small grey line "Choose what you need at  
      affordable rates"; blue pill "Add Now". Both "Add Now" buttons are  
      inert.  
    SERVICES: "1-Card-Multi-Number"; rows "Link your mainland China/Hong Kong  
      number, to receive voice calls and SMS seamlessly." and "Apply for a  
      new mainland China/Hong Kong number while in Singapore."; link "View  
      details \>" (inert).  
    EMAIL BLOCK: envelope icon with a small green "%" tag; heading "Still  
      deciding on which plan? No worries."; line "Stay in touch to receive  
      our latest offers"; a box showing the placeholder text "Enter your  
      Email Address now\!" and a blue pill "Submit".  
      PRIVACY RULE: the box must be a styled non-editable \<div\>, NOT an  
      \<input\> or \<textarea\>, and Submit must do nothing.  
    FOOTER: "JAYLINK Singapore (fictional brand for a class project)".  
 5\) Behaviour (only these):  
    \- "Sign Up Now" on any card opens the DebriefScreen.  
    \- "View Details" on any card opens a simple modal titled "Plan details"  
      containing the text in the data constant VIEW\_DETAILS\_TEXT, with a  
      Close button. Set VIEW\_DETAILS\_TEXT to exactly:  
      "\[PLACEHOLDER: replace with the wording of the real View Details panel\]"  
    \- Everything else (nav links, pills, tabs, "Get SIM", "Add Now",  
      "Submit", "View details \>") is inert: no navigation, no state change.

OUTPUT: A complete runnable Vite \+ React 18 project. All copy, plans,  
 benefits, after-contract lines, add-on text and screen text in ONE data  
 file (src/data.js). One component per screen in src/screens/  
 (ConsentScreen, PlansScreen, DebriefScreen); small shared pieces (Header,  
 PlanCard, DetailsModal) are allowed in src/components/. Plain CSS (or  
 Tailwind) only; no UI kit. Icons as inline SVG. Fonts: system font stack  
 only, no web fonts. Mobile-first: at 1024px and wider, match the screenshot  
 (three cards in a row, max content width about 1200px); below 768px, stack  
 the cards in one column and show only the logo and "Get SIM" in the header.  
 Colours: primary blue \#0A93E8, lime green \#78C000, price magenta \#E4087F,  
 warning red \#D93025, dark text \#222, grey text \#666, pale blue background  
 \#EAF4FD.

FIDELITY RULES (do not break):  
 1\. Each card shows only the monthly price. Do NOT add a 12-month total,  
    a dollar saving, or a discounted dollar price.  
 2\. All benefit lines have the same size and weight. Do NOT group, collapse,  
    reorder or highlight any of them.  
 3\. "After contract period" stays small, grey, below the benefits panel. Do  
    NOT make it prominent or put it in a table.  
 4\. "View Details" stays a small plain text link and "Sign Up Now" the large  
    filled button. Do NOT add early-exit or contract-exit text to the cards.  
 5\. Keep "Unlimited^" and its cap line as written.  
 6\. Keep the red "local data?" in the add-on card.  
 7\. Keep all copy exactly as given, including odd phrases such as  
    "Affordable add-ons offers" and "\[Non ST Port-in\]". Do not correct  
    grammar or spelling.  
 8\. No extra sections, content, animations, countdowns or popups beyond the  
    modal and the debrief described above.

GUARDRAILS: Front end only. No server code, no database, no API keys, no  
 Gemini or other model calls, no network calls (no CDN fonts, no remote  
 images, no analytics), no login, no real payment, no localStorage, no  
 field that asks for a name, phone, email or card. No real company's name  
 or logo anywhere: never write "CMLink" or "China Mobile". No features I  
 did not ask for. Do NOT build Variant B.

CONTEXT: MGMT 6108 class sprint at SMU. It will be pushed to GitHub and  
 deployed on Vercel. This is the baseline (Variant A) of a behavioural  
 audit; a separate prompt will add Variant B later. Design reference  
 follows (screenshot attached):

**What came back:** AI Studio generated a complete, deployable Vite \+ React 18 project with ConsentScreen, PlansScreen and DebriefScreen. The three plan cards, banner, tabs, add-on section and footer were all present. This became our first deployed Variant A at mgmt-6108-jaylink.vercel.app.

**Our judgement, and what we changed next:** The site worked but several visual problems were visible immediately: the three cards were unequal in width, font sizes on the benefit lists were too small, and row spacing was looser than the original page. We did not catch these before deploying. Entries 3, 4 and 5 were written to fix them one by one.

**Principle check:** None — this was a production step. The fidelity rules in this prompt were written to preserve the audit findings (F1–F6) in Variant A, not to introduce or remove any behavioural pattern.

## **Entry 3 \- Variant A fix prompt · \[2026.10.24\] · sent by FZQ · AI studio**

Please fix the existing A-version CMLink Singapore mobile plan website. Focus ONLY on the content and functionality of the “View Details” modal for the three plans: 720GB, 760GB, and Unlimited.

Do not rebuild the website. Do not change the existing plan cards, prices, colours, layout, buttons, or other functionality.

## **1\. Main requirement**

When users click “View Details” under each plan card, the modal must display the correct official plan details provided below.

Each plan must have its own accurate details. Do not accidentally show the 720GB plan details in the 760GB or Unlimited modal. Do not assume that all three plans have identical benefits.

Preserve the existing website's language and visual style. Organise the details into readable sections, using headings and bullet points where appropriate. Keep the modal mobile-friendly and scrollable.

## **2\. Official source information: 720GB plan**

Display the following information in the 720GB plan's View Details modal:

* All prices shown include GST.  
* Promotion until 1 November: New sign-ups will enjoy a 50% discount for 6 months. The discount will be applied on the 10th of the following month after activation, with the remaining discount applied in subsequent months thereafter.  
* Promotion until 1 November: Successful port-ins from non-Singtel or non-Singtel MVNO prepaid/postpaid services to the \$11.1 or \$15 plan by 7 November will enjoy a 50% discount for 6 months. The discount will be applied in the following month after activation, with the remaining discount applied in subsequent months thereafter.  
* Includes 5G+ service. The handset must be 5G SA compatible, and 5G+ access is limited to Singtel's 5G coverage areas.  
* 720GB local data.  
* Additional 5GB roaming data for use in mainland China and Hong Kong SAR.  
* Additional 31GB APAC 12 roaming data for use in Australia, China (including Hong Kong, Macau and Taiwan), Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam.  
* Additional 1TB shared roaming data for use in Indonesia, Malaysia and Thailand, valid for 365 days. For new sign-ups only, this data will be credited on the 1st of the following month.  
* Additional 60GB international roaming data for use in 210 destinations for 365 days, for new sign-ups and port-ins only.  
* 650 local call minutes. Excess usage is charged at \$0.10 per minute.  
* 100 local SMS. Excess usage is charged at \$0.10 per message.  
* 500 international call minutes from Singapore to numbers in Australia, Bangladesh, Brunei, Canada, China (including Hong Kong and Taiwan), India, Indonesia, Malaysia, New Zealand, Philippines, South Korea, Thailand, USA and Vietnam. Excess usage is charged at \$0.10 per minute. Valid only when dialled using the “+” prefix. International call charges apply to calls using the “001” and “019” prefixes.  
* Local outgoing minutes will be deducted first for all international calls made.  
* Free Caller ID and unlimited local incoming calls.  
* 12-month minimum contractual period. Plan entitlements will change after the contract period, as stated in the original plan notes.  
* Early Termination Charge: Monthly Fee × Remaining months of the minimum subscription period, including the month in which termination occurs.

## **3\. Official source information: 760GB plan**

Display the following information in the 760GB plan's View Details modal:

* All prices shown include GST.  
* Includes 5G+ service. The handset must be 5G SA compatible, and 5G+ access is limited to Singtel's 5G coverage areas.  
* 760GB local data.  
* Additional 65GB roaming data for use in mainland China and Hong Kong SAR.  
* Additional 33GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam.  
* Additional 600GB shared roaming data across Indonesia, Malaysia and Thailand, valid for 365 days. For new sign-ups only, this data will be credited on the 1st of the following month.  
* Additional 60GB international roaming data for use in 210 destinations for 365 days, for new sign-ups and port-ins only.  
* 900 local call minutes. Excess usage is charged at \$0.10 per minute.  
* 500 local SMS. Excess usage is charged at \$0.10 per message.  
* 500 international call minutes from Singapore to numbers in Australia, Bangladesh, Brunei, Canada, China (including Hong Kong and Taiwan), India, Indonesia, Malaysia, New Zealand, Philippines, South Korea, Thailand, USA and Vietnam. Excess usage is charged at \$0.10 per minute. Valid only when dialled using the “+” prefix. International call charges apply to calls using the “001” and “019” prefixes.  
* Local outgoing minutes will be deducted first for all international calls made.  
* Free Caller ID and unlimited local incoming calls.  
* 12-month minimum contractual period. Plan entitlements will change after the contract period, as stated in the original plan notes.  
* Early Termination Charge: Monthly Fee × Remaining months of the minimum subscription period, including the month in which termination occurs.

## **4\. Official source information: Unlimited plan**

Display the following information in the Unlimited plan's View Details modal:

* All prices shown include GST.  
* Includes 5G+ service. The handset must be 5G SA compatible, and 5G+ access is limited to Singtel's 5G coverage areas.  
* 760GB local data, as specified in the provided official details. Do not replace this with unlimited high-speed local data.  
* Additional 65GB roaming data for use in mainland China and Hong Kong SAR.  
* Additional 33GB APAC 10 roaming data for use in Australia, China Macau, China Taiwan, Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and Vietnam.  
* Additional 600GB shared roaming data across Indonesia, Malaysia and Thailand, valid for 365 days. For new sign-ups only, this data will be credited on the 1st of the following month.  
* Additional 60GB international roaming data for use in 210 destinations for 365 days, for new sign-ups and port-ins only.  
* 900 local call minutes. Excess usage is charged at \$0.10 per minute.  
* 500 local SMS. Excess usage is charged at \$0.10 per message.  
* 500 international call minutes from Singapore to numbers in Australia, Bangladesh, Brunei, Canada, China (including Hong Kong and Taiwan), India, Indonesia, Malaysia, New Zealand, Philippines, South Korea, Thailand, USA and Vietnam. Excess usage is charged at \$0.10 per minute. Valid only when dialled using the “+” prefix. International call charges apply to calls using the “001” and “019” prefixes.  
* Local outgoing minutes will be deducted first for all international calls made.  
* Free Caller ID and unlimited local incoming calls.  
* 12-month minimum contractual period. Plan entitlements will change after the contract period, as stated in the original plan notes.  
* Early Termination Charge: Monthly Fee × Remaining months of the minimum subscription period, including the month in which termination occurs.

## **5\. Implementation and accuracy checks**

* Connect each “View Details” button to the correct plan-specific modal.  
* Keep all information separated by plan. Do not reuse a single hard-coded detail list for every plan.  
* If the project already stores plan information in a data object or configuration file, update that data source and keep the implementation maintainable.  
* Do not invent missing details, including monthly prices, post-contract entitlements, additional fees, or conditions.  
* The 720GB plan's promotional terms must not be copied into the 760GB or Unlimited plan unless the source explicitly confirms that they apply.  
* Do not invent an end date or expand the scope of any promotion.  
* Keep the existing plan-selection and A/B experiment functionality working.  
* Test all three “View Details” buttons and confirm that each modal displays the correct plan information.

After implementation, briefly report what you changed and identify any information that is still missing from the supplied source.

**What came back:** AI Studio updated the View Details modal content for all three plans with plan-specific details, including promotion terms for the 720GB card and the Early Termination Charge formula. Each modal now shows the correct data for its own plan.

**Our judgement, and what we changed next:** This was a necessary correction because the original placeholder text in the modal was not usable for a real audit. The Early Termination Charge formula confirmed by this prompt later became the basis for the Finding 5 repair text in Variant B. No visual or layout changes were made in this entry.

**Principle check:** Finding 5 (W5 / W7) — this entry did not change the card UI, but it confirmed the existence of the Early Termination Charge that Finding 5 is based on. The fact that this information was only discoverable inside the modal, and not on the card face, is exactly the sludge pattern described in Finding 5\.

## **Entry 4 \- Variant A fix prompt · \[2026.10.24\] · sent by FZQ · AI studio**

ROLE: You are a senior front-end developer maintaining the JAYLINK class prototype.

GOAL: Make the benefit list density match the reference screenshot more

closely. Make only these changes, nothing else.

CHANGES:

\- Benefit list items: set font-size to 13px, line-height to 1.4,

  margin-bottom between items to 6px.

\- "After contract period" bullet lines: same font-size 13px, line-height 1.4.

\- Reduce the padding inside the benefits panel from its current value to

  12px top/bottom and 14px left/right.

\- The green tick icon: set width and height to 16px so it aligns with

  the 13px text without dominating it.

\- Do not change anything else: no colours, no titles, no prices, no logic.

OUTPUT: Full corrected file(s) only.

**What came back:** AI identified that the core problem was not the font size (which was already close to the original) but the padding and line-height, which made the card feel more spacious than the original. It reduced padding and tightened line-height accordingly, and edited src/components/PlanCard.jsx.

**Our judgement, and what we changed next:** After this change, the cards looked closer to the original but still felt slightly too loose compared with the real CMLink page. We went on to Entry 5 to compare directly with screenshots of both pages side by side, targeting the remaining spacing gap.

**Principle check:** None — this was a visual fidelity correction. Keeping the benefit list at equal size and weight for all items is required by Fidelity Rule 2 in order to faithfully reproduce Finding 4 (W7 / W5) in Variant A.

## **Entry 5 \- Variant A fix prompt · \[2026.10.24\] · sent by FZQ · AI studio**

ROLE: You are a senior front-end developer maintaining the JAYLINK class prototype.

GOAL: Fix two specific spacing and typography issues on the plan cards.

Make only these two changes, nothing else.

CHANGE 1 – Benefit list spacing (the green-tick items):

\- Set margin-bottom between each benefit item to 10px.

\- Set line-height to 1.55.

\- Keep font-size at 13px.

CHANGE 2 – "After contract period" section:

\- font-size: 11px (smaller than the benefit lines above).

\- font-weight: 400 (same, not bold).

\- color: \#999 (lighter grey than the benefit text).

\- line-height: 1.5.

\- margin-bottom between bullet lines: 4px.

\- The heading "After contract period," itself: font-size 11px, color \#999,

  margin-bottom 6px.

Do not change anything else: no colours, no titles, no prices, no logic,

no benefit list font-size.

OUTPUT: Full corrected file(s) only.

**What came back:** AI Studio applied both changes. The benefit list gained visible breathing room between items, and the "After contract period" block became noticeably smaller and greyer than the benefit list above it, matching the original page more closely.

**Our judgement, and what we changed next:** This brought the visual fidelity to an acceptable level for a class prototype. 

**Principle check:** Finding 2 (W4 default effect / W7 perceptual disfluency) — the small grey styling of "After contract period" in Variant A is a deliberate reproduction of the original page's de-emphasis of post-contract reductions. This entry confirms the baseline condition that Finding 2's repair in Variant B is designed to change.

## **Entry 6 \- Variant B prompt· \[2026.10.24\] · sent by FZQ · AI studio**

Now add Variant B to the existing codebase.

VARIANT SWITCHING:  
\- Read ?v=A or ?v=B from the URL (case-insensitive).  
\- If no ?v is present, randomly assign A or B once, store the result in  
  sessionStorage under the key "jaylink\_variant", and use it for the  
  whole session.  
\- Pass the variant string down to every screen as a prop.

CHANGES FOR VARIANT B — plan cards only.  
Variant A must remain byte-for-byte identical. Apply every change below  
only when variant \=== "B".

──────────────────────────────────────────  
FINDING 1 FIX — show the real cost, not just the monthly price  
──────────────────────────────────────────  
On each card, replace the current price display with this layout:

Card 1 (720GB):  
  \- Large line: "S\$135 / 12 months" (same magenta colour, same font size  
    as the current monthly price)  
  \- Smaller grey line directly below: "S\$7.50/month for months 1–6,  
    then S$15.00/monthformonths7–12.YousaveS$45."

Card 2 (760GB):  
  \- Large line: "S\$252 / 12 months"  
  \- Smaller grey line: "S\$21.0/month"

Card 3 (800GB Max — see Finding 3 fix):  
  \- Large line: "S\$373.20 / 12 months"  
  \- Smaller grey line: "S\$31.1/month"

The "/month" suffix on the large line is removed in Variant B.  
Everything else on the price row stays the same.

──────────────────────────────────────────  
FINDING 2 FIX — make the post-contract reductions equally visible  
──────────────────────────────────────────  
Remove the current small grey "After contract period," bullet block from  
the bottom of each card.

In its place, insert a new section directly below the last green-tick  
benefit line (before the View Details / Sign Up Now row). Give it:  
  \- A bold section heading in dark text: "Changes after contract period"  
  \- Each change on its own line, normal font size, same colour as the  
    benefit lines, using an arrow format. Examples:  
      Data: 720GB → 700GB  
      APAC 12 roaming: 31GB → 30GB  
      Local calls: 650 min → 600 min  
  Use the exact before/after values already in the data file for each card.  
  No small grey text. No bullets. Same visual weight as the benefit list.

──────────────────────────────────────────  
FINDING 3 FIX — rename "Unlimited^" to remove the misleading label  
──────────────────────────────────────────  
On card 3 only, in Variant B:  
  \- Change the plan title from "Unlimited^" to "800GB Max"  
  \- Keep the benefit line "^Data limit cap at 800GB, speed managed at  
    512kbps thereafter" exactly as-is (do not remove it).  
  \- Do not change any other text on card 3\.

──────────────────────────────────────────  
FINDING 4 FIX — group benefits into a clear 3-layer visual structure  
──────────────────────────────────────────  
Reorder and group the benefit lines on every card into three labelled  
sections. Use a small bold grey section label above each group (e.g.  
"LOCAL", "ROAMING", "CALLS & SMS"). Keep every line of text exactly as  
written in the data file — do not edit, merge or drop any line.

Group 1 — LOCAL (label: "LOCAL DATA")  
  \- Free 5G+ Access  
  \- \[local GB figure\] local data  ← this is the plan title line rephrased;  
    keep the original wording from the benefits list if it appears there,  
    otherwise skip

Group 2 — ROAMING (label: "ROAMING")  
  All roaming lines in the order they appear in the data file.

Group 3 — CALLS & SMS (label: "CALLS & SMS")  
  All minutes, SMS, IDD and Caller ID lines in the order they appear.

The "Changes after contract period" section from Finding 2 fix appears  
after Group 3, as described above.

Do not change the green tick icon or any colours.

──────────────────────────────────────────  
FINDING 5 FIX — show the early termination charge above the button  
──────────────────────────────────────────  
On every card, directly above the "Sign Up Now" button, insert a  
bordered notice box (light yellow background \#FFFBE6, 1px solid \#F0C040,  
border-radius 6px, padding 10px). Text inside (normal dark text, 13px):

"⚠ Early Termination Charge applies if you cancel before month 12:  
Monthly Fee × Remaining months (including the termination month)."

Keep the "View Details" link and "Sign Up Now" button exactly as they are,  
just below this notice.

──────────────────────────────────────────  
FINDING 6 FIX — consolidate roaming lines into a collapsible drawer  
──────────────────────────────────────────  
Within the ROAMING group (from Finding 4 fix), replace the individual  
roaming bullet lines with:  
  \- One summary line: "Multi-Destination Roaming — tap to see coverage  
    & priority"  
  \- A collapsible drawer (toggled by clicking the summary line) that  
    lists all the original roaming lines exactly as written, plus one  
    additional line at the bottom:  
    "Deduction order: CN/HK → APAC → MY/TH/ID shared → Global 210"  
  \- The drawer is collapsed by default.  
  \- Use a small ▶ / ▼ chevron to show open/closed state.

──────────────────────────────────────────  
DEBRIEF SCREEN  
──────────────────────────────────────────  
When variant \=== "B", change the last sentence of the debrief to:  
"You saw Variant B."

──────────────────────────────────────────  
RULES  
──────────────────────────────────────────  
\- Variant A: zero changes. If ?v=A, the page must be identical to today.  
\- Do not add any feature not listed above.  
\- Front end only. No network calls, no new npm packages, no localStorage.  
\- All copy changes above apply only when variant \=== "B".  
\- Output the full corrected file(s) only. No explanation needed.

**What came back:** AI Studio added Variant B to the existing codebase. The URL switching logic (?v=A / ?v=B), sessionStorage random assignment, and all six finding fixes were implemented.  The card 3 total price initially overflowed the card width and required a follow-up prompt to reduce the font size.

**Our judgement, and what we changed next:** The six fixes were all present in Variant B, but card alignment and title sizing still differed slightly between the three cards when viewed at desktop width. 

**Principle check:** Findings 1–6 (W3, W4, W5, W7) — this entry is the core behavioural intervention. Each fix maps directly to a finding in AUDIT.md:

* F1 repair → W4 framing / mental accounting (total cost now visible at decision point)  
* F2 repair → W4 default effect / W7 disfluency (post-contract change now equal weight)  
* F3 repair → W3 prior expectations ("800GB Max" replaces "Unlimited^")  
* F4 repair → W7 processing disfluency / W5 information overload (3-layer grouping)  
* F5 repair → W5 / W7 (exit charge shown above the button, not hidden in View Details)  
* F6 repair → W4 partitioned framing / W7 disfluency (roaming pools consolidated)

## **Entry 7 \- Variant B fix prompt · \[2026.11.6\] · sent by FZQ · AI studio**

ROLE: You are a senior front-end developer maintaining the JAYLINK class prototype.

GOAL: Revise Variant B only, in the four places listed below. Variant A is

the baseline replica and must NOT change in any way.

HARD RULE FOR VARIANT A:

\- Every change below applies only when variant \=== "B".

\- Do not edit any CSS rule, class name, component or data field that

  Variant A uses. Where PlanCard or shared CSS is reused, add B-only

  branches or new B-only class names (for example prefixed "vb-").

\- With ?v=A, the price row, benefit list, "After contract period" block,

  buttons, spacing and every other element must render exactly as they do

  today.

CHANGE 1 – Early Termination notice: one global banner instead of three boxes

\- Remove the yellow "Early Termination Charge applies..." box from inside

  each plan card (Variant B only).

\- Add ONE full-width banner directly underneath the row of three plan cards

  and above the "Get Add-Ons" heading. It spans the same width as the cards

  container.

\- Style: same as the removed box (background \#FFFBE6, border 1px solid

  \#F0C040, border-radius 8px, padding 14px 18px, a ⚠ icon on the left,

  14px dark text).

\- Text, exactly: "If you terminate your subscription before the end of

  the agreed period, there will be an Early Termination Charge, calculated

  as follows: Monthly Fee x Remaining months of the minimum subscription

  period (including the month in which termination occurs)."

\- Keep the "View Details" link and the "Sign Up Now" button in each card

  unchanged.

CHANGE 2 – Roaming section: restructure the drawer

\- Summary line label: "Multi-Destination Roaming — tap to see coverage"

  (remove "& priority"). Keep the ▶ / ▼ chevron. Collapsed by default.

\- Delete the line "Deduction order: ..." completely. Do not show any

  deduction-priority or consumption-order wording anywhere.

\- Inside the drawer, show every roaming item in the same two-paragraph

  format, with no green ticks:

  Paragraph 1: bold, \#222, 14px: the data allowance and its validity.

  Paragraph 2: regular weight, \#666, 13px: the prefix "Applicable Coverage: "

  followed by the destinations.

  Leave 12px between items. All items use the same left alignment.

\- Put this text in the data file (Variant B only) and render from it:

  CARD 1 (720GB):

  1\. P1: "5GB roaming data (per month)"

     P2: "Applicable Coverage: Mainland China and Hong Kong SAR"

  2\. P1: "31GB APAC 12 roaming data (per month)"

     P2: "Applicable Coverage: Australia, China (including Hong Kong, Macau

     and Taiwan), Indonesia, Japan, Malaysia, Philippines, South Korea,

     Thailand and Vietnam"

  3\. P1: "1TB shared roaming data (one pool, valid for 365 days, for new

     sign-ups only)"

     P2: "Applicable Coverage: Indonesia, Malaysia and Thailand"

  4\. P1: "60GB international roaming data (valid for 365 days, for new and

     port-in only)"

     P2: "Applicable Coverage: 210 destinations"

  CARD 2 (760GB):

  1\. P1: "65GB roaming data (per month)"

     P2: "Applicable Coverage: Mainland China and Hong Kong SAR"

  2\. P1: "33GB APAC 10 roaming data (per month)"

     P2: "Applicable Coverage: Australia, China Macau, China Taiwan,

     Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and

     Vietnam"

  3\. P1: "600GB shared roaming data (one pool, valid for 365 days, for new

     sign-ups only)"

     P2: "Applicable Coverage: Indonesia, Malaysia and Thailand"

  4\. P1: "60GB international roaming data (valid for 365 days, for new and

     port-in only)"

     P2: "Applicable Coverage: 210 destinations"

  CARD 3 (800GB Max):

  1\. P1: "85GB roaming data (per month)"

     P2: "Applicable Coverage: Mainland China and Hong Kong SAR"

  2\. P1: "35GB APAC 10 roaming data (per month)"

     P2: "Applicable Coverage: Australia, China Macau, China Taiwan,

     Indonesia, Japan, Malaysia, Philippines, South Korea, Thailand and

     Vietnam"

  3\. P1: "600GB shared roaming data (one pool, valid for 365 days, for new

     sign-ups only)"

     P2: "Applicable Coverage: Indonesia, Malaysia and Thailand"

  4\. P1: "60GB international roaming data (valid for 365 days, for new and

     port-in only)"

     P2: "Applicable Coverage: 210 destinations"

CHANGE 3 – Align the first row of the benefits panel across the three cards

\- In Variant B, the "LOCAL DATA" label (the first row of the benefits

  panel) must sit at exactly the same vertical position in all three cards.

\- Implement it so the area above the benefits panel has identical height in

  every card: give cards 2 and 3 an invisible placeholder

  (visibility: hidden) with the same height as the lime promo box in card 1,

  and give the price sub-text block a shared min-height large enough for

  card 1's longest text. A CSS grid with shared rows (subgrid) is also fine.

\- Check at widths from 1024px to 1440px that the three "LOCAL DATA" labels

  share the same top position. Below 768px, where the cards stack, no

  alignment is needed.

CHANGE 4 – Price row (Variant B only)

\- Remove the letter "S" from the three large pink prices, keeping the

  dollar sign: "$135/year","$252 / year", "\$373.20 / year".

  ("12 months" is replaced by "year".)

\- Each pink price must stay on ONE line (white-space: nowrap) in all three

  cards, with the same font size in all three cards.

\- To make room, move the plan title (720GB, 760GB, 800GB Max) further left

  and reduce the gap between title and price. If the longest case

  ("800GB Max" next to "\$373.20 / year") still does not fit on one row at

  1024px width and above, reduce the title font-size by up to 10%, and then,

  if still needed, the price font-size by up to 10%, applying the same

  reduction to all three cards.

\- Leave the smaller grey lines under the price exactly as they are now.

RULES:

\- Do not change any other text, colour, benefit line, "Changes after

  contract period" section, button or screen.

\- Do not add any feature not listed above.

\- Front end only. No network calls, no new npm packages, no localStorage.

\- Variant A: zero changes.

OUTPUT: Full corrected file(s) only. No explanation needed.

**What came back:** AI restructured the roaming items into a collapsible two-paragraph drawer per card, removed the “Deduction order” line from all three cards, replaced the three individual yellow warning boxes with one full-width global Early Termination banner, applied invisible spacers so “LOCAL DATA” aligns across cards, and reformatted the pink price to “xxx / year” on a single line.

**Our judgement, and what we changed next:** The global banner was cleaner than the three repeated boxes, confirming that the original design had a redundancy problem that itself made the warning harder to read (W7). We noted that “(per month)” on the CN/HK and APAC roaming lines was inferred rather than taken from official terms and flagged it for verification before submission. The layout was solid enough to proceed to adding Findings 7–10 in Entry 8\.

**Principle check:** Finding 5 (W5 / W7) — moving the Early Termination notice from inside each card to a single shared banner reduces visual clutter, removes the sludge created by three identical repeated warnings, and makes the commitment cost visible at the point of decision without punishing readers with duplicate text. Finding 6 (W4 / W7) — the two-paragraph drawer format removes the dense comma-separated country lists from the main card view and replaces them with a scannable, labelled structure, reducing the partitioned framing effect.

## **Entry 8 \- Variant B fix prompt · \[2026.11.6\] · sent by FZQ · AI studio**

I want you to update my existing CMLink Singapore A/B testing website based on four additional audit findings (Findings 7, 8, 9 and 10).

**CRITICAL INSTRUCTION — DO NOT MODIFY VARIANT A.**

Variant A is the original control version and must remain completely unchanged. It is a faithful copy of the original website for experimental comparison.

You must:

* Keep Variant A exactly as it currently is.  
* Do not change any text, colours, layout, prices, plan details, buttons, interactions, or styling in Variant A.  
* Do not apply any of the following improvements to Variant A.  
* Make all four improvements ONLY in Variant B.  
* Keep the existing A/B switching functionality working.  
* Do not rebuild the entire application or overwrite existing components unnecessarily.

The following are the four changes required ONLY for Variant B.

---

## **Finding 7 — Make promotion eligibility easier to understand**

**Problem:**  
The original promotion labels use abbreviations such as:

* “\[Non ST Port-in\] 50% off 6 Mths”  
* “\[New\] 50% off 6 Mths”

Users may not understand what “ST” or “Port-in” means, making it difficult to determine whether they qualify for the promotion.

**Required change in Variant B:**

Replace the confusing promotion labels with clear, plain English:

* Replace “\[New\] 50% off 6 Mths” with:  
  “New Sign-ups: 50% Off for 6 Months”  
* Replace “\[Non ST Port-in\] 50% off 6 Mths” with:  
  “Switch from Non-Poretel Providers: 50% Off for 6 Months”

Use the fictional company name “Poretel” instead of Singtel or ST, because the real company's name cannot be disclosed in this academic project.

Make these promotion labels easy to notice and understand on the relevant \$15 plan card.

Do not change the actual promotion conditions or discount amount. Do not imply that every existing customer qualifies.

If there is enough space, add a short explanatory line:  
“Transfer your existing mobile number from a provider other than Poretel to qualify, subject to the promotion's terms.”

Keep the original promotion eligibility and timing conditions accurate.

---

## **Finding 8 — Make 5G+ device and coverage conditions visible**

**Problem:**  
The original plan cards display “Free 5G+ Access”, which may create the expectation that users can access 5G+ regardless of their handset compatibility or location.

The actual conditions are only explained inside View Details.

**Required change in Variant B:**

Change the benefit label from:

“Free 5G+ Access”

to:

“Free 5G+ Access (Requires 5G SA Handset & Covered Areas)”

Place this qualification immediately beside or directly below the 5G+ headline on each relevant plan card.

The qualification must be visible without requiring users to click “View Details”.

Use a smaller but clearly readable font for the explanatory condition. Do not hide it in a tooltip or modal.

Keep the full explanation in View Details as well:

“To access 5G+, your handset needs to be 5G SA compatible. 5G+ access is limited to Singtel's 5G coverage areas.”

For the fictionalised academic prototype, replace “Singtel” with “Poretel” if the company name is displayed.

Important:

* Do not suggest that a 5G SA handset guarantees 5G+ everywhere.  
* Clearly communicate both prerequisites: a compatible 5G SA handset and coverage in the relevant area.  
* Do not imply that 5G compatibility is required for basic mobile service.

---

## **Finding 9 — Establish a clearer visual hierarchy in the benefits list**

**Problem:**  
All benefits currently use identical green checkmarks and similar visual emphasis. This makes important differences between the three plans difficult to identify.

**Required change in Variant B:**

Redesign the benefits list across all three plan cards using a more meaningful visual hierarchy.

1. Shared baseline benefits:  
   * Use low-saturation light grey checkmarks and grey text for features shared across all three plans.  
   * Examples include “Free 5G+ Access” and “Free Caller ID & Unlimited Local Incoming Calls”, where these benefits are confirmed to be shared.  
   * These items should remain readable but should not attract as much attention as upgraded benefits.  
2. Upgraded or differentiating benefits:  
   * Reserve the high-saturation green checkmarks for features that genuinely differ or improve across plan tiers.  
   * Examples may include local data allowances, roaming data allowances, and other benefits that increase between plans.  
   * Do not mark a feature as upgraded if the three plans provide the same allowance.  
3. Category headings:  
   * Change “LOCAL DATA”, “ROAMING”, and “CALLS & SMS” from light grey to bold black or dark text.  
   * Make these headings visually distinct from the individual benefit rows.  
   * Use consistent spacing to separate the categories.  
4. Roaming text:  
   * Change the blue “Multi-Destination Roaming” text to harmonious dark grey or black.  
   * Keep it consistent with the main text colour and avoid unnecessary colour contrast.  
5. Overall design:  
   * Maintain the existing card structure and overall visual identity.  
   * Keep the pink annual price as the main visual focal point of each card.  
   * Avoid excessive colours or decorative icons.  
   * Make the visual hierarchy consistent across all three plans.

Important:  
Only use grey styling for genuinely shared benefits. Do not accidentally make a unique or upgraded benefit look like a basic shared feature.

---

## **Finding 10 — Add clear plan positioning and target-user context**

**Problem:**  
The three plan cards currently present raw monthly prices and technical specifications without explaining which type of user each plan is suitable for.

Users must mentally translate data allowances and roaming benefits into their own daily needs.

**Required change in Variant B:**

Add a prominent lifestyle positioning badge or short descriptive subtitle directly above the price and technical specifications on each plan card.

Use the following exact labels:

For the \$15 plan:  
“Local Essential”  
Supporting text:  
“Perfect for daily Singapore usage.”

For the \$21 plan:  
“Cross-Border Professional”  
Supporting text:  
“Best value for frequent Singapore–China commuters.”

For the \$31.10 plan:  
“Regional Wanderer”  
Supporting text:  
“Maximum freedom for heavy APAC travellers.”

Design requirements:

* Place each positioning label near the top of its corresponding plan card, above the monthly price.  
* Use a clear, readable visual style that distinguishes the three plan identities.  
* Keep the supporting description concise.  
* Do not make the labels larger or more visually dominant than the actual plan price.  
* Preserve all existing plan prices, data allowances, roaming benefits, contract periods and other factual information.  
* Do not claim that a plan is objectively the cheapest or best value unless the supplied plan data supports that claim.  
* Treat these labels as guidance for users, not as additional contractual benefits.

---

## **Final implementation requirements**

1. Apply Findings 7, 8, 9 and 10 ONLY to Variant B.  
2. Variant A must remain exactly unchanged.  
3. Do not modify the existing plan prices, data allowances, contract periods or official plan terms.  
4. Keep all existing View Details interactions working.  
5. Keep the existing A/B experiment navigation and URL parameters working.  
6. Ensure the updated Variant B is responsive on desktop and mobile.  
7. Do not invent additional promotions, benefits, eligibility rules or plan conditions.  
8. Do not remove any existing information from either version.

Before finishing, perform these checks:

* Open Variant A and confirm that it is visually and functionally unchanged.  
* Open Variant B and confirm that all four findings have been implemented.  
* Check the promotion wording on the \$15 plan.  
* Check that the 5G+ conditions are visible directly on the plan cards.  
* Check the grey versus green benefit hierarchy across all three plans.  
* Check that all three lifestyle labels appear on the correct plans.  
* Click every View Details button and confirm that it still works.  
* Confirm that switching between Variant A and Variant B works correctly.

Finally, provide a short implementation report listing the changes made to Variant B and explicitly confirm that Variant A was not modified.

**What came back:** AI added lifestyle positioning badges (“Local Essential”, “Cross-Border Professional”, “Regional Wanderer”) with supporting text, rewrote the promo labels on the \$15 card into plain English using the fictional brand name “Poretel”, appended the 5G+ device and coverage condition inline on each card, and introduced a two-tone checkmark system (grey for shared benefits, green for differentiating ones) across all three cards. 

**Our judgement, and what we changed next:** The behavioural changes were all present and correctly limited to Variant B. However, the lime promo boxes on the middle and right cards had been stretched to match the taller left card, making them visually misaligned and inconsistent. The lifestyle labels also introduced a slight vertical shift that pushed “LOCAL DATA” out of alignment across the three cards.

**Principle check:** Finding 7 (W7 fluency) — plain English replaces the abbreviation “\[Non ST Port-in\]”, removing the decoding effort that prevented many users from knowing whether they qualified. Finding 8 (W3 prior expectations) — showing “Requires 5G SA Handset & Covered Areas” inline on the card corrects the expectation set by “Free 5G+ Access” standing alone. Finding 9 (W7 fluency / W8 colour) — the grey/green hierarchy makes shared and differentiating benefits visually distinguishable at a glance, reducing the equal-weight clutter of Variant A. Finding 10 (W3 expectations) — lifestyle labels give each plan a human-readable identity so users can self-select based on behaviour rather than raw data figures.

## **Entry 9 \- Variant B fix prompt · \[2026.11.6\] · sent by FZQ · AI studio**

Please refine the visual styling of the Variant B cards based on the following two adjustments:

1\. Resize the light green promotion boxes: The green boxes on the middle and right cards are currently too tall (they seem to be forced to match the height of the left card's box). Allow the green boxes on the middle and right cards to shrink in height to naturally fit their two lines of text. 

   \- CRITICAL ALIGNMENT: The top edges of all three green boxes must remain perfectly aligned horizontally. 

   \- CRITICAL ALIGNMENT: "LOCAL DATA" and all elements below it MUST remain perfectly aligned horizontally across all three cards. (Hint: Apply a fixed height or bottom margin/padding to the parent container holding the green boxes to maintain this layout structure, rather than stretching the green boxes themselves).

2\. Change text color for interactivity: Change the text color of the collapsible label "Multi-Destination Roaming — tap to see coverage" under the ROAMING section from black to a standard interactive link blue to indicate it is clickable. 

Change nothing else. Keep the data, text content, font sizes, and all other layouts exactly as they are.

**What came back:** AI attempted to let the middle and right promo boxes shrink to fit their text while keeping the top edges aligned. The boxes still stretched vertically because the AI applied a min-height to the box itself rather than to the containing wrapper. The roaming label text was set to blue only on hover, not by default, so it appeared black in its resting state.

**Our judgement, and what we changed next:** Both fixes were partially wrong in the same direction: the AI conflated “make the wrapper a fixed height” with “stretch the box to fill it”, and applied a hover state where a default colour was needed. We rewrote both instructions more explicitly in Entry 10, specifying that the fixed height should be on the parent wrapper and that the blue colour must be permanent, not conditional.

**Principle check:** None — this was a visual fidelity correction with no behavioural content change.

## **Entry 10 \- Variant B fix prompt · \[2026.11.6\] · sent by FZQ · AI studio**

Please refine the Variant B UI based on the following two exact adjustments. Do not invent any hover states.

1\. Resize the light green promotion boxes: Let the green boxes on the middle and right cards shrink in height to naturally fit their text. Do not force them to match the tall height of the left card's box.

\- CRITICAL ALIGNMENT 1: The top edges of all three green boxes must remain perfectly aligned horizontally.

\- CRITICAL ALIGNMENT 2: The "LOCAL DATA" headers and all elements below them MUST remain perfectly aligned horizontally across all three cards. To achieve this, apply a fixed height or invisible spacer to the parent wrapper of these green boxes. Shrinking the green boxes must NOT pull up the content below them.

2\. Make the roaming label permanently blue: Change the default text color AND the dropdown arrow icon for the collapsible row "Multi-Destination Roaming — tap to see coverage" to a permanent interactive blue (e.g., text-blue-600).

\- CRITICAL: It must be blue by default at all times, NOT just on hover. Remove any text-black or text-gray default classes on this specific text and its SVG arrow icon. 

Change nothing else. Keep all other content, font sizes, colors, and layouts exactly as they are.

**What came back:** AI correctly applied a fixed-height invisible spacer to the parent wrapper of the promo boxes, allowing the middle and right boxes to shrink to their natural text height while keeping top edges level. The roaming label “Multi-Destination Roaming — tap to see coverage” and its chevron icon were both set to a permanent interactive blue, with no hover-only state remaining.

**Our judgement, and what we changed next:** Both corrections worked as intended. However, the left card’s promo box now contained an orphaned second paragraph (“Transfer your existing mobile number...”) that sat below the bold line on its own line, making the box visually taller than it needed to be and breaking the reading flow. We addressed this in Entry 11 by merging the two lines into one continuous paragraph.

**Principle check:** None — this was a visual fidelity correction

## **Entry 11 \- Variant B fix prompt · \[2026.11.6\] · sent by FZQ · AI studio**

Please refine the text layout inside the light green promotion box on the left card (the 720GB plan).

Currently, the text "Transfer your existing mobile number..." is on its own separate line/paragraph. I want to merge it with the bold heading above it.

1\. Merge the text: Take the non-bold sentence starting with "Transfer your existing mobile number..." and append it directly to the end of the bold sentence "Switch from Non-Poretel Providers: 50% Off for 6 Months". Use a space or a colon to separate them on the same line if needed.

2\. Keep the font styles intact: The first part ("Switch from...") must remain bold, and the appended part ("Transfer your...") must remain non-bold (regular weight). They should just flow together as a single continuous paragraph.

3\. Box height: Allow the green box to naturally shrink in height as a result of removing this paragraph break. Ensure the top edges of all three green boxes, as well as the "LOCAL DATA" sections below, remain perfectly aligned horizontally across all cards.

Change nothing else. Keep all other text, colors, and alignments exactly as they are.

**What came back:** AI merged the non-bold sentence “Transfer your existing mobile number...” directly onto the same line as the bold heading “Switch from Non-Poretel Providers: 50% Off for 6 Months”, with a space between them. The bold and regular weights were preserved within a single paragraph. The left promo box shrank accordingly, top-edge alignment across all three boxes held, and “LOCAL DATA” remained aligned.

**Our judgement, and what we changed next:** The promo box on the left card now reads as a single coherent statement rather than a heading followed by a dangling footnote. The merging also reduced the box’s visual weight, which is appropriate because the promo condition is secondary information and should not compete with the price. The alignment fix worked at desktop widths. However, the varying number of items under “LOCAL DATA” across the three cards (card 3 has two items, cards 1 and 2 have one) caused “ROAMING”, “CALLS & SMS” and “Changes after contract period” headers to stagger at different heights. We wrote Entry 12 to fix cross-card header alignment.

**Principle check:** None

## **Entry 12 \- Variant B fix prompt · \[2026.11.6\] · sent by FZQ · AI studio**

Please refine the vertical alignment of the sections within the three pricing cards to ensure all category headers align perfectly horizontally across the page.

Currently, because some cards have more items in a section (e.g., the right card has two items under "LOCAL DATA" while others have one), the subsequent headers are staggered and uneven. 

Please fix this by introducing blank space (using min-height, fixed height, or CSS grid matching) to the content areas of each section so that the next header is pushed down to match the tallest content block in that row.

\- CRITICAL ALIGNMENT 1: The "ROAMING" header must sit on the exact same horizontal line across all three cards.

\- CRITICAL ALIGNMENT 2: The "CALLS & SMS" header must sit on the exact same horizontal line across all three cards.

\- CRITICAL ALIGNMENT 3: The "Changes after contract period" header must sit on the exact same horizontal line across all three cards.

Change nothing else. Keep all text, fonts, colors, icons, and the top alignments (like the green boxes) exactly as they are. Do not alter the content itself, only the vertical spacing to achieve perfect cross-card alignment.

**What came back:** The AI implemented CSS min-heights properly, ensuring that every category header sits on the exact same horizontal baseline across all three cards.

**Our judgement, and what we changed next:** Variant B is now visually polished, symmetrical, and accurately reflects all behavioural nudges. The build is complete and ready for testing.

**Principle check:** None

