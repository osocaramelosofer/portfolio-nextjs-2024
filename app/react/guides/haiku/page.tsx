'use client'
import { type SandpackFiles } from '@codesandbox/sandpack-react'
import CustomSandpack from '../../custom-sandpack'
import { TextScrambleBasic } from '@/components/motion-ui/text-scramble-basic'

const HAIKU_FILES: SandpackFiles = {
  '/App.js': {
    code: `/*
Desafío 4 de 4: Lista con un separador 
Este ejemplo renderiza un famoso haiku de Tachibana Hokushi, con cada línea envuelta en una etiqueta <p>. 
Tu trabajo consiste en insertar un separador <hr /> entre cada párrafo. La estructura resultante debería verse así:

<article>
  <p>Escribo, borro y reescribo</p>
  <hr />
  <p>Borro de nuevo, y luego</p>
  <hr />
  <p>Florece una amapola.</p>
</article>

Un haiku solo tiene tres líneas, pero tu solución debería funcionar con cualquier número de líneas. 
Fíjate que los elementos <hr /> solo aparecen entre los elementos <p>, ¡no en el inicio o el final!
*/

import { Fragment } from "react/cjs/react.production.min";

const poem = {
  lines: [
    "Escribo, borro y reescribo",
    "Borro de nuevo, y luego",
    "Florece una amapola.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => {
        return (
          <Fragment key={index}>
            {index > 0 && <hr />}
            <p>{line}</p>
          </Fragment>
        );
      })}
    </article>
  );
}`,
    readOnly: false, // Set as non-editable, defaults to `false`
    active: true, // Set as main file, defaults to `false`
    hidden: false // Tab visibility, defaults to `false`
  },
  '/styles.css': {
    code: `* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 20px;
  padding: 0;
}

h1 {
  margin-top: 0;
  font-size: 22px;
}

h2 {
  margin-top: 0;
  font-size: 20px;
}

h3 {
  margin-top: 0;
  font-size: 18px;
}

h4 {
  margin-top: 0;
  font-size: 16px;
}

h5 {
  margin-top: 0;
  font-size: 14px;
}

h6 {
  margin-top: 0;
  font-size: 12px;
}

code {
  font-size: 1.2em;
}

ul {
  padding-inline-start: 20px;
}

body {
  text-align: center;
}
p {
  font-family: Georgia, serif;
  font-size: 20px;
  font-style: italic;
}
hr {
  margin: 0 120px 0 120px;
  border: 1px dashed #45c3d8;
}
`,
    readOnly: true,
    hidden: false
  }
}
export default function HaikuPage() {
  return (
    <div className="px-2">
      <TextScrambleBasic className="text-3xl">haiku</TextScrambleBasic>
      <CustomSandpack files={HAIKU_FILES} />
    </div>
  )
}
