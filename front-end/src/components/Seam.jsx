import React from 'react';
import CurvedLoop from './reactbits/CurvedLoop';

/* A full-bleed band that separates Projects from Skills. It's the one place
   the stack gets to be loud — everywhere else the tech names are small and
   functional. Draggable, and it keeps whichever direction you flick it. */
export default function Seam({ text }) {
  return (
    <div className="seam" aria-hidden="true">
      <CurvedLoop marqueeText={text} speed={1.2} curveAmount={220} direction="left" interactive />
    </div>
  );
}
