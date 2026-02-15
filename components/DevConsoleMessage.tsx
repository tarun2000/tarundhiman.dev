'use client';

import { useEffect } from 'react';

export function DevConsoleMessage() {
  useEffect(() => {
    console.log(`
%c
████████╗ █████╗ ██████╗ ██╗   ██╗███╗   ██╗
╚══██╔══╝██╔══██╗██╔══██╗██║   ██║████╗  ██║
   ██║   ███████║██████╔╝██║   ██║██╔██╗ ██║
   ██║   ██╔══██║██╔══██╗██║   ██║██║╚██╗██║
   ██║   ██║  ██║██║  ██║╚██████╔╝██║ ╚████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

%cHey there, developer 👋
Thanks for checking out my portfolio.

Built with:
• Next.js
• React
• Tailwind
• Framer Motion

If you're hiring or just want to build cool things —
📩 tarundhiman.workmail@gmail.com
🐙 github.com/tarun2000

Let’s ship something that doesn’t end up in the GitHub graveyard 🚀
`,
      "color:#7c3aed; font-weight:bold;",
      "color:#9ca3af;"
    );
  }, []);

  return null;
}