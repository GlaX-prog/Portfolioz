Hey i think you saw my website, here is a Q&A with interesting shit about the website. 
much love

"What's it built with?"
"Next.js with React, styled with Tailwind CSS, and I used Framer Motion for the animations."

"What language is it written in?"
"TypeScript. It's basically JavaScript but with types. And memes."

"Where's it hosted?"
"Vercel. It auto-deploys from my GitHub repo whenever I push changes."

"Did you use a template?"
"No, I scaffolded it with create-next-app and built the design from scratch. Not a website builder, real written code"

"How do the animations work?"
"Framer Motion. The fade ins use the useInView hook so they trigger when you scroll to them. The expandable sections use AnimatePresence for smooth open/close."

"What about the sidebar?"
"It's a fixed-position aside element with position: fixed and full viewport height. The nav icons are from Lucide React."

"What icon library is that?"
"Lucide React. It's an open-source icon set. The LinkedIn and GitHub icons are custom inline SVGs because Lucide doesn't include brand icons."

"How does the portrait card work?"
"It's a fixed-position div on the left with a full-height image, a CSS gradient overlay for the purple tint, and a box-shadow for the glow effect."

"Is it responsive?"
"Yeah, the portrait card is hidden on mobile with Tailwind's lg:hidden / lg:block breakpoints. On smaller screens it switches to a centered card layout."

"What about the popup/modal things?"
"Those are client components using React useState. Click opens a modal with a backdrop blur, Framer Motion handles the fade-in animation."

"What's the parallax background?"
"It's a CSS trick with multiple radial-gradient layers on the background and a slow CSS @keyframes animation moving the background-position. Not real parallax, just a floating particle effect."

"How does the CV download work?"
"The PDF sits in the /public folder and I link to it with a standard <a> tag with the download attribute."

Its AN AGILE PROJECT SO IF SOMETHING DOESENT WORK, I PROBABLY KNOW ABOUT ITTTT ♡ thanks 